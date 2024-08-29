import React, { useState, useCallback, useEffect } from 'react'
import styled from '@emotion/styled'

import Header from '../Header'

type LayoutProps = {
    fixRolling?: boolean
    children: any
}

type ContainerProps = {
    width: number
}

type MainProps = {
    fixRolling: boolean
}

const Container = styled.div<ContainerProps>`
    margin: ${ props => {
        const horizonMargin = ((props.width - 500) / 80 + 10).toString()
        return "2% " + horizonMargin + "% 0% " + horizonMargin + "%;"
    }}
    flex: 1;
`

const Main = styled.main<MainProps>`
    box-sizing: border-box;    
    padding-top: 50px;
    display: flex;
    width: 100%;
    flex-direction: column;
    min-height: 100px;
    padding-bottom: ${ props => props.fixRolling ? '0px' : '30px' };
    overflow: hidden;
    height: ${ props => props.fixRolling ? '98vh' : 'auto' };
`
const Layout: React.FC<LayoutProps> = (props) => {
    // Outside useEffect, we are not allowed to use `document`
    // as we do not know whether it is defined.
    // See https://www.gatsbyjs.com/docs/debugging-html-builds/
    const [width, setWidth] = useState(1000)
    
    const onResize = useCallback(() => {
        const newWidth = document.documentElement.clientWidth
        setWidth(newWidth)
        console.log("window width: " + newWidth)
    }, [])

    useEffect(() => {
        setWidth(document.documentElement.clientWidth)
        window.addEventListener('resize', onResize)
        return () => { window.removeEventListener('resize', onResize) }
    }, [])

    return (
        <>
            <Header />
            <Main fixRolling={props.fixRolling ?? false}>
                <Container width={width}>
                    {props.children}
                </Container>
            </Main>
        </>
    )
}

export default Layout
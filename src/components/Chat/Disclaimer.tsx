import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 60px;
    padding-right: 60px;
`

const Content = styled.span`
    line-height: 16px;
    text-size-adjust: 100%;
    text-align: center;
    font-size: 12px;
`

const Disclaimer = () => {
    return (
        <>
            <Wrapper>
                <Content>ChatGPT 也可能会犯错。请喝茶重要信息。</Content>
            </Wrapper>
        </>
    )
}

export default Disclaimer
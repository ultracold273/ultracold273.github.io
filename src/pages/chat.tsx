import React, { useState } from 'react'
import styled from '@emotion/styled'
import { PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Disclaimer from '../components/Chat/Disclaimer'
import InputBar from '../components/Chat/InputBar'

// import send from '../../static/arrow.svg'

const backgroundColor = '#f5f5f5'

const MainWrapper = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const ContentBox = styled.div`
    flex: 1;
`

const BottomBox = styled.div`
`

const Wrapper = styled.header`
    position: flex;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: ${backgroundColor};
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    z-index: 1;
`

const Content = styled.div`
    display: block
`

const Chat = (props: PageProps) => {
    return (
        <>
            <Layout fixRolling={true}>
                <MainWrapper>
                    <ContentBox></ContentBox>
                    <BottomBox>
                        <InputBar />
                        <Disclaimer />
                    </BottomBox>
                </MainWrapper>
            </Layout>
        </>
    )
}

export default Chat
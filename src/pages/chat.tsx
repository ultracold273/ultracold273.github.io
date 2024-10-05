import React, { useState } from 'react'
import styled from '@emotion/styled'
import { PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Disclaimer from '../components/Chat/Disclaimer'
import InputBar from '../components/Chat/InputBar'

const backgroundColor = '#f5f5f5'

const MainWrapper = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const StickyHeader = styled.div`
    box-sizing: border-box;
    padding: 12px;
    margin-bottom: 6px;
    position: sticky;
    display: flex;
    top: 0px;
    align-items: center;
    justify-content: space-between;
    background-color: lightgray;
    height: 56px;
`

const DropDown = styled.div`
    font-family: ui-sans-serif;
    font-size: 18px;
    font-weight: 600;
    background-color: darkgray;
    line-height: 28px;
    cursor: pointer;
`
const SignIn = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 9999px;
    background-color: red;
`

const BottomBox = styled.div`
`

const Chat = (props: PageProps) => {
    return (
        <>
            <Layout fixRolling={true}>
                <MainWrapper>
                    <ContentBox>
                        <StickyHeader>
                            <DropDown>ChatGPT</DropDown>
                            <SignIn></SignIn>
                        </StickyHeader>
                    </ContentBox>
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
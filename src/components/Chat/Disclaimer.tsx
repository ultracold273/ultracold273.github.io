import React from 'react'
import styled from '@emotion/styled'

import DisplayText from '../../i18n/string.json'

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
                <Content>{DisplayText.disclaimer}</Content>
            </Wrapper>
        </>
    )
}

export default Disclaimer
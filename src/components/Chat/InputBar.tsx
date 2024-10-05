import React from 'react'
import styled from '@emotion/styled'

import DisplayText from '../../i18n/string.json'

import { ReactComponent as AttachmentIcon } from '../../resources/attachment.svg'
import { ReactComponent as ArrowIcon } from '../../resources/arrow.svg'

const Wrapper = styled.div`
    display: flex;
`

const FlexContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex: 1;
    column-gap: 6px;
    padding: 6px;
    border-radius: 26px;
    background-color: lightgray;
`

const FileUploadPlaceHolder = styled.div`
    // height: 32px;
    // width: 32px;
    margin-left: 6px;
    margin-bottom: 4px;
    border-radius: 9999px;
    background-color: lightgray;
`

const Input = styled.textarea`
    flex: 1;
    margin: 8px 0px 8px 0px;
    padding: 0px;
    border-width: 0px;
    font-family: ui-sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-wrap: wrap;
    resize: none;
    max-height: 25vh;
    outline-width: 0px;
    overflow-y: hidden;
    background-color: lightgray;
`

const SendButton = styled.button`
    height: 32px;
    width: 32px;
    margin-right: 6px;
    margin-bottom: 4px;
    border-width: 0px;
    border-radius: 9999px;
    background-color: darkgray;
    padding-block: 0px;
    padding-inline: 0px;
`

const InputBar = () => {
    const handleInput: React.FormEventHandler<HTMLTextAreaElement> = (event) => {
        const textarea = event.target as HTMLTextAreaElement;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <>
            <Wrapper>
                <FlexContainer>
                    <FileUploadPlaceHolder>
                        <AttachmentIcon />
                    </FileUploadPlaceHolder>
                    <Input rows={1} placeholder={DisplayText.input_placeholder} onInput={handleInput} />
                    <SendButton>
                        <ArrowIcon />
                    </SendButton>
                </FlexContainer>
            </Wrapper>
        </>
    )
}

export default InputBar
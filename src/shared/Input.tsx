import React from "react";
import styled from 'styled-components'

interface InputProps {
    error?: string
}

const Input = styled.input<InputProps>`
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 20px 100px 20px 20px;
    border: ${props => props.error ? "1px solid #E26F6F" : "1px solid transparent"};
    :focus, :hover {
        border: ${props => props.error ? "1px solid #E26F6F" : "1px solid transparent"};
    }
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px
`
export default Input
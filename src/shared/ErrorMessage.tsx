import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.span`
    color: #E26F6F;
    font-size: 14px;
    line-height: 17px;
    margin-top: 8px;
`

export const ErrorServerMessage = styled.div`
    background: #F5E9E9;
    border: 1px solid #E26F6F;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    color: #000;
    display: flex;
    align-items: center;
    svg {
        margin: 0;
        margin-right: 14px
    }
    p {
        margin: 0;
    }
`


export default ErrorMessage
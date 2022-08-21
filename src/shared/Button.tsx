import React from "react";
import styled from "styled-components";

interface ButtonProps {
    color?: string;
    backgroundColor?: string;
    size?: number;
    disabled?: boolean
}

const Button = styled.button<ButtonProps>`
    padding: 19px 292px;
    color: ${props => props.color || "#fff"};
    background-color: ${props => props.backgroundColor || "#4A67FF"};
    border-radius: 8px;
    font-weight: 700;
    font-size: ${props => props.size + "px" || "18px"};
    line-height: 22px;
    border: 1px solid transparent;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    :disabled {
        opacity: 0.8;
    }
`

export default Button
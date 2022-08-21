import React from "react";
import styled from "styled-components";

interface TextProps {
    size?: number,
    color?: string
}

const Text = styled.p<TextProps>`
    font-size: ${props => props.size?.toString() + "px" || "14px"};
    color: ${props => props.color || "#000"}
`
export default Text
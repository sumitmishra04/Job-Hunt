import React, { ReactNode } from "react"
import styled, { css } from "styled-components"
import { Colours, Typography } from "../../atoms"
import { CommonInterface, commonCSS } from "../../atoms/Utilities"

interface TextProps extends CommonInterface {
  content: string
  color?: Colours.ColorType
  size?: Typography.size
  icon?: ReactNode
  capitalize?: boolean
  noWrap?: boolean
  required?: boolean
}

const StyledText = styled.span<Omit<TextProps, "content"> & CommonInterface>`
  ${(p) => commonCSS(p)}
  color: ${({ color }) => Colours.palette[color || "grey700"]};
  font-size: ${({ size }) => Typography[size || "md"].px};
  display: flex;
  gap: 3px;
  align-items: center;
  ${(p) =>
    p.capitalize &&
    css`
      text-transform: capitalize;
    `}
  ${(p) =>
    p.noWrap &&
    css`
      white-space: nowrap;
    `}
`

function Text({
  content,
  color,
  size,
  onClick,
  icon,
  capitalize,
  required,
  ...rest
}: TextProps) {
  return (
    <StyledText
      onClick={onClick}
      color={color}
      size={size}
      capitalize={capitalize}
      {...rest}
    >
      {content}
      {required && <span style={{ color: Colours.palette.red600 }}>*</span>}
      {icon}
    </StyledText>
  )
}

Text.defaultProps = {
  content: "",
  size: "md",
  color: "grey700",
}

export default Text

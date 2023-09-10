import React from "react"
import { styled } from "styled-components"
import { Colours, Typography } from "../../atoms"
import { CommonInterface, commonCSS } from "../../atoms/Utilities"

interface ButtonProps extends Partial<CommonInterface> {
  value: string
  onClick?: () => void
}

const StyledButton = styled.div<Partial<CommonInterface>>`
  ${(p) => commonCSS(p)};
  padding: 7px 15px;
  background-color: ${Colours.palette.blue600};
  color: ${Colours.palette.monoWhite};
  font-size: ${Typography.md.px};
  border-radius: 50px;
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  white-space: nowrap;
`

function Button({ value, onClick, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest} onClick={onClick}>
      {value}
    </StyledButton>
  )
}

export default Button

import React, { ReactNode } from "react"
import { styled } from "styled-components"
import { Colours, Typography } from "../../atoms"
import { CommonInterface, commonCSS } from "../../atoms/Utilities"

interface TextAreaProps extends CommonInterface {
  icon?: ReactNode
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

const StyledWrapper = styled.div<CommonInterface>`
  ${(p) => commonCSS(p)};
  display: flex;
  align-items: center;
  border: 1px solid ${Colours.palette.grey400};
  border-radius: 4px;
  padding: 8px;
  margin: 8px auto;
  background: ${Colours.palette.monoWhite};
`

const StyledTextArea = styled.textarea`
  border: none;
  outline: none;
  flex: 1;
  padding: 0;
  margin: 0;
  font-size: ${Typography.md.px};
  width: 100%;
  font-family: sans-serif;
`

function Textarea({
  icon,
  placeholder,
  value,
  onChange,
  ...rest
}: TextAreaProps) {
  return (
    <StyledWrapper {...rest}>
      {icon}
      <StyledTextArea
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        {...rest}
      />
    </StyledWrapper>
  )
}

Textarea.defaultProps = {
  icon: null,
  placeholder: "",
  value: "",
  onChange: null,
  type: "text",
}

export default Textarea

import React from "react"
import styled from "styled-components"
import Text from "../text"
import { CommonInterface, commonCSS } from "../../atoms/Utilities"

interface RadioGroupProps extends Partial<CommonInterface> {
  options: string[]
  selectedOption: string
  onChange: (newValue: string) => void
}

const RadioWrapper = styled.div<Partial<CommonInterface>>`
  ${(p) => commonCSS(p)};
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`

const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
`

const RadioCircle = styled.span`
  width: 14px;
  height: 14px;
  border: 2px solid #007bff;
  border-radius: 50%;
  margin-right: 5px;
  position: relative;

  ${RadioInput}:checked + &::before {
    content: "";
    width: 12px;
    height: 12px;
    background-color: #007bff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedOption,
  onChange,
  ...rest
}) => {
  const handleRadioChange = (newValue: string) => {
    onChange(newValue)
  }

  return (
    <RadioWrapper {...rest}>
      {options.map((option) => (
        <RadioOption key={option}>
          <RadioInput
            type="radio"
            value={option}
            checked={option === selectedOption}
            onChange={() => handleRadioChange(option)}
          />
          <RadioCircle />
          <Text content={option} size="sm" color="grey700" />
        </RadioOption>
      ))}
    </RadioWrapper>
  )
}

export default RadioGroup

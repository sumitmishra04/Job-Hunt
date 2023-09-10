import React, { useState } from "react"
import styled from "styled-components"
import { Colours } from "../../atoms"
import Text from "../text"

interface CheckboxWrapperProps {
  label: string
  checked: boolean
  onChange?: (newValue: boolean) => void
}

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`

const Checkmark = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid ${Colours.palette.grey400};
  border-radius: 3px;
  margin-right: 10px;
  position: relative;

  ${CheckboxInput}:checked + &::before {
    content: "\u2713";
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${Colours.palette.blue600};
  }

  ${CheckboxLabel}:hover & {
    background-color: ${Colours.palette.grey100};
  }
`

function Checkbox({ label, onChange, checked }: CheckboxWrapperProps) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = () => {
    const newValue = !checked
    setIsChecked(newValue)

    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <CheckboxLabel>
      <CheckboxInput checked={isChecked} onChange={handleCheckboxChange} />
      <Checkmark />
      <Text content={label} color="grey700" size="md" />
    </CheckboxLabel>
  )
}

export default Checkbox

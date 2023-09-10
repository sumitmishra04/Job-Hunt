import React, { useRef, useState } from "react"
import styled from "styled-components"
import Input from "../input"
import { useOnClickOutside } from "../../../hooks"

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

const Dropdown = styled.div`
  position: absolute;
  top: 43px;
  left: 0;
  z-index: 1;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 250px;
  width: 182px;
  overflow-y: auto;
`

const OptionItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`

interface Option {
  value: string
  label: string
}

interface SearchableDropdownProps {
  options: Option[]
  onOptionSelect: (value: string) => void
}

const Select = ({ options, onOptionSelect }: SearchableDropdownProps) => {
  const [inputValue, setInputValue] = useState("")
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [showOptions, setShowOptions] = useState(false)
  const selectRef = useRef(null)

  useOnClickOutside(selectRef, () => {
    setShowOptions(false)
    setFilteredOptions(options)
  })

  const getFilteredOptions = (searchText: string) =>
    options.filter(({ value }) =>
      value.toLowerCase().includes(searchText.toLowerCase())
    )

  const handleInputChange = (searchText: string) => {
    setInputValue(searchText)
    setFilteredOptions(getFilteredOptions(searchText))
  }

  const handleOptionSelect = (option: Option) => {
    setShowOptions(false)
    setInputValue(option.label)
    onOptionSelect(option.label)
    setInputValue("")
  }

  return (
    <DropdownContainer ref={selectRef}>
      <Input
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
        onMouseDown={() => {
          setShowOptions(true)
        }}
      />
      {showOptions && (
        <Dropdown>
          {filteredOptions.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </OptionItem>
          ))}
        </Dropdown>
      )}
    </DropdownContainer>
  )
}

export default Select

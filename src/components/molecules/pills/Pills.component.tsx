import React from "react"
import Container from "../container"
import Text from "../text"
import { styled } from "styled-components"
import { Colours } from "../../atoms"
import { CrossIcon } from "../../atoms/Icons"

interface PillsProps {
  value: string
  onCancel?: (value: string) => void
}

const StyledPillsWrapper = styled(Container)`
  background-color: ${Colours.palette.blue100};
  border-radius: 50px;
  align-items: center;
`

function Pills({ value, onCancel }: PillsProps) {
  return (
    <StyledPillsWrapper
      display="flex"
      paddingHorizontal="sm"
      paddingVertical="xxsm"
    >
      <Text content={value} size="sm" color="blue600" />
      {onCancel && (
        <Text
          marginLeft="xsm"
          content={<CrossIcon />}
          size="sm"
          color="blue600"
          pointer
          onClick={onCancel}
        />
      )}
    </StyledPillsWrapper>
  )
}

export default Pills

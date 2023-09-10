import React from "react"
import {
  Container,
  Input,
  Text,
} from "../../../../../../../../components/molecules"
import { styled } from "styled-components"

interface MinSalaryProps {
  minSalary: string
  onChange: (value: string) => void
}

const StyledText = styled(Text)`
  white-space: nowrap;
`

function MinSalary({ minSalary, onChange }: MinSalaryProps) {
  return (
    <Container width="100%" card padding="sm" display="flex">
      <StyledText
        content="Salary Per Hour.: "
        color="grey700"
        marginRight="sm"
      />
      <Container width="100%">
        <Input
          margin="xsm"
          type="number"
          value={minSalary}
          onChange={onChange}
          placeholder="Enter minimum salary"
        />
      </Container>
    </Container>
  )
}

export default MinSalary

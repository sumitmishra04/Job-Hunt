import React from "react"
import { JobListInterface } from "../../JobList.interfaces"
import {
  Button,
  Container,
  Text,
} from "../../../../../../../../components/molecules"
import { styled } from "styled-components"
import { Colours } from "../../../../../../../../components/atoms"
import { Device } from "../../../../../../../../components/atoms/DeviceSize"

interface JobDetailProps {
  list: JobListInterface[]
  index: number
  key: string
  onApply: (index: number) => void
}

const StyledWrapper = styled(Container)<JobListInterface>`
  border: 1px solid ${Colours.palette.grey300};
  width: 100%;
  gap: 8px;
  border-bottom: none;
  flex-direction: column;
  background: ${(p) =>
    p.applied ? Colours.palette.blue200 : Colours.palette.monoWhite};

  &:hover {
    background-color: ${Colours.palette.blue100};
  }

  &:last-child {
    border-bottom: 1px solid ${Colours.palette.grey300};
  }

  @media ${Device.Large} {
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const StyledItem = styled(Container)`
  align-items: center;
  gap: 10px;
`

const StyledItemWrapper = styled(Container)`
  flex-direction: column;
  gap: 10px;
`

function JobDetail({ index, style, key, list, onApply }: JobDetailProps) {
  return (
    <StyledWrapper
      paddingHorizontal="sm"
      paddingVertical="md"
      key={key}
      style={style}
      display="flex"
      applied={list[index].applied}
    >
      <StyledItemWrapper display="flex">
        <StyledItem display="flex">
          <Text content="Company: " color="grey800" size="sm" />
          <Text content={list[index].companyName} color="blue600" size="sm" />
        </StyledItem>
        <StyledItem display="flex">
          <Text content="Salary: " color="grey800" size="sm" />
          <Text
            content={`$${list[index].salary.toString()} per annum`}
            color="grey600"
            size="sm"
          />
        </StyledItem>
        <StyledItem display="flex">
          <Text content="Skills: " color="grey800" size="sm" />
          <Text
            content={list[index].skills.join(", ")}
            color="grey600"
            size="sm"
          />
        </StyledItem>
      </StyledItemWrapper>
      <Button
        value={list[index].applied ? "Applied" : "Easy Apply"}
        onClick={() => onApply(list[index].id)}
      />
    </StyledWrapper>
  )
}

export default React.memo(JobDetail)

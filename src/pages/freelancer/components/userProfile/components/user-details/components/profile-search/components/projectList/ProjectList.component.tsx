import React from "react"
import {
  Container,
  Text,
} from "../../../../../../../../../../components/molecules"
import { styled } from "styled-components"
import { Colours } from "../../../../../../../../../../components/atoms"
import { RedirectIcon } from "../../../../../../../../../../components/atoms/Icons"
import { Device } from "../../../../../../../../../../components/atoms/DeviceSize"

interface ProfileProps {
  gitProjects: Array<{
    id: string
    name: string
    url: string
  }>
}

const StyledTableContent = styled(Container)`
  border: 1px solid ${Colours.palette.grey200};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow-y: auto;
  max-height: calc(100vh - 260px);

  @media ${Device.Large} {
    width: 100%;
  }
`

const StyledItem = styled(Container)`
  border-bottom: 1px solid ${Colours.palette.grey200};
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${Colours.palette.blue100};
  }
`

const StyledTableHeader = styled(Container)`
  height: 60px;
  background: ${Colours.palette.blue200};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  justify-content: space-between;
`

const StyledContainer = styled(Container)`
  width: 80%;

  @media ${Device.Small} {
    width: 100%;
  }
`

function ProfileList({ gitProjects }: ProfileProps) {
  const redirectToGit = (url: string) => {
    window.open(url, "_blank", "noreferrer")
  }

  return (
    <StyledContainer>
      <Text
        content={`Projects (${gitProjects?.length})`}
        color="blue600"
        size="lg"
        marginBottom="sm"
      />
      <StyledTableHeader
        display="flex"
        paddingLeft="sm"
        paddingVertical="lg"
        paddingRight="xlg"
      >
        <Text content="Project Name" color="blue600" size="md" />
        <Text content="Actions" color="blue600" size="md" />
      </StyledTableHeader>
      <StyledTableContent>
        {(gitProjects || [])?.map((data) => {
          return (
            <StyledItem
              display="flex"
              paddingHorizontal="sm"
              paddingVertical="lg"
              key={data.id}
            >
              <Text capitalize content={data.name} color="grey600" size="md" />
              <Text
                pointer
                color="blue600"
                content="View"
                icon={<RedirectIcon />}
                onClick={() => redirectToGit(data.url)}
              />
            </StyledItem>
          )
        })}
      </StyledTableContent>
    </StyledContainer>
  )
}

export default ProfileList

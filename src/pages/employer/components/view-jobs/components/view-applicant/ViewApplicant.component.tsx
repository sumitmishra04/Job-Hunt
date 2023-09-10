import React from "react"
import { JobInterface } from "../../../../Employer.interfaces"
import { Container, Text } from "../../../../../../components/molecules"
import { styled } from "styled-components"
import { Colours } from "../../../../../../components/atoms"
import { useNavigate } from "react-router-dom"

interface ViewApplicantInterface {
  selectedJob: JobInterface | null
}

const StyledContainer = styled(Container)`
  border: 1px solid ${Colours.palette.grey200};
  &:hover {
    background: ${Colours.palette.blue100};
  }
`

function ViewApplicant({ selectedJob }: ViewApplicantInterface) {
  const navigate = useNavigate()

  const navigateTo = (user: string) => {
    navigate(`/freelancer/${user}`)
    navigate({
      pathname: `/freelancer/${user}`,
      search: "?viewonly=true",
    })
  }

  return (
    <Container padding="sm">
      {selectedJob && (
        <>
          <Text
            content={selectedJob.companyName}
            color="blue600"
            size="xlg"
            marginBottom="lg"
          />
          <Container marginBottom="lg">
            {selectedJob.applicants?.map((applicant, index) => {
              return (
                <StyledContainer key={index} padding="sm" width="100%">
                  <Text
                    color="blue600"
                    pointer
                    content={`${applicant.name} (${applicant.gitUsername})`}
                    marginBottom="xsm"
                    onClick={() => navigateTo(applicant.gitUsername)}
                  />
                  <Text content={`Skills: ${applicant.skills}`} size="sm" />
                </StyledContainer>
              )
            })}
          </Container>
        </>
      )}
    </Container>
  )
}

export default ViewApplicant

import React, { useContext, useState } from "react"
import { Container, Text } from "../../../../components/molecules"
import { EmployerContext } from "../../Employer.component"
import { HEADER_ROW } from "./ViewJobs.constants"
import { css, styled } from "styled-components"
import { Colours, DeviceSize } from "../../../../components/atoms"
import { Modal } from "../../../../components/organisms"
import ViewApplicant from "./components/view-applicant/ViewApplicant.component"
import { JobInterface } from "../../Employer.interfaces"
import { Device } from "../../../../components/atoms/DeviceSize"

const StyledContainer = styled(Container)``

const StyledRow = styled(Container)<any>`
  width: 100%;
  border-bottom: 1px solid ${Colours.palette.grey200};
  height: fit-content;

  &:hover {
    background-color: ${Colours.palette.blue100};
  }
  ${(p) =>
    p.isHeader &&
    css`
      background: ${Colours.palette.blue200};
    `};
`

const StyledText = styled(Text)<any>`
  display: block;
  padding: 8px;

  ${(p) =>
    p.isHeader &&
    css`
      color: ${Colours.palette.blue600};
    `};

    @media ${Device.Small} {
      width: 40%;
    ${p => p.hideOnSmallScreen && css`
       display: none;
    `}
    }
`

function ViewJobs() {
  const { state } = useContext(EmployerContext)
  const [selectedJob, setSelectedJob] = useState<JobInterface | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedJob(null)
    setIsModalOpen(false)
  }

  const handleModalOpen = (job: JobInterface) => {
    setSelectedJob(job)
    openModal()
  }

  const getRows = () => {
    return [HEADER_ROW, ...state.jobsPosted] as JobInterface[]
  }

  return (
    <StyledContainer marginTop="md">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ViewApplicant selectedJob={selectedJob} />
      </Modal>
      <Text
        content={`Posted Job Details (${state.jobsPosted.length})`}
        color="blue600"
        size="lg"
        marginBottom="sm"
      />
      {getRows().map((job, index) => {
        const isHeader = index === 0

        return (
          <StyledRow padding="sm" display="flex" isHeader={isHeader}>
            <StyledText
              width="15%"
              pointer
              color="blue600"
              content={job.companyName}
              isHeader={isHeader}
              onClick={() => handleModalOpen(job)}
            />
            <StyledText
              width="15%"
              content={job.contactInfo}
              isHeader={isHeader}
            />
            <StyledText width="20%" content={job.tags} isHeader={isHeader} hideOnSmallScreen/>
            <StyledText
              width="30%"
              content={job.jobRequirements}
              isHeader={isHeader}
              hideOnSmallScreen
            />
            <StyledText
              width="10%"
              content={job.jobDescriptionPdf}
              isHeader={isHeader}
            />
            <StyledText
              width="fit-content"
              content={isHeader ? job.applicants : job.applicants?.length}
              isHeader={isHeader}
            />
          </StyledRow>
        )
      })}
    </StyledContainer>
  )
}

export default ViewJobs

import React, { useEffect, useRef, useState } from "react"
import { JobListInterface } from "./JobList.interfaces"
import { Container, Text } from "../../../../../../components/molecules"
import { VirtualList } from "../../../../../../components/organisms"
import JobDetail from "./component/job-detail/JobDetail.component"
import { styled } from "styled-components"
import { Device } from "../../../../../../components/atoms/DeviceSize"

const StyledListWrapper = styled(Container)`
  overflow-y: auto;
  height: 600px;
`

interface JobListProps {
  jobList: JobListInterface[]
  onJobApply: (selectedListId: number) => void
  loading: boolean
  appliedJobCount: number
}

const StyledTextContainer = styled(Container)`
  justify-content: space-between;
  @media ${Device.Small} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
  }
`

const StyledContainer = styled(Container)`
  @media ${Device.Small} {
    width: 100%;
    margin-top: 16px;
  }
`

function JobList({
  jobList,
  onJobApply,
  loading,
  appliedJobCount,
}: JobListProps) {
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(null)

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.getBoundingClientRect().width
      setContainerWidth(width)
    }
  }, [])
  const isSmallScreen = window.innerWidth < 768

  return (
    <StyledContainer width="80%">
      {loading && <Text content="Fetching Jobs..." />}
      {!loading && (
        <StyledTextContainer marginBottom="sm" display="flex" paddingRight="lg">
          <Text
            content={`Companies applied : ${appliedJobCount}`}
            color="blue600"
            size="lg"
            marginRight="md"
          />
          <Text
            content={`Companies Found: ${jobList.length}`}
            color="green600"
          />
        </StyledTextContainer>
      )}

      <StyledListWrapper ref={containerRef}>
        {!loading && jobList.length > 0 && (
          <VirtualList
            data={jobList}
            width={containerWidth}
            rowHeight={isSmallScreen ? 135 : 100}
            renderRow={(props) => (
              <JobDetail {...props} list={jobList} onApply={onJobApply} />
            )}
          />
        )}
      </StyledListWrapper>
    </StyledContainer>
  )
}

export default JobList

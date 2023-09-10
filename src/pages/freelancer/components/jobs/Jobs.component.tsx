import React, { useEffect, useState } from "react"
import { Container } from "../../../../components/molecules"
import JobList from "./components/job-list/JobList.component"
import Filters from "./components/filters/Filters.component"
import { JobListInterface } from "./components/job-list/JobList.interfaces"
import { getJobDetails } from "../../../../services/jobList"
import { styled } from "styled-components"
import { Device } from "../../../../components/atoms/DeviceSize"

const StyledContainer = styled(Container)`
  @media ${Device.Small} {
    width: 100%;
    flex-direction: column;
  }
`

function Jobs() {
  const [jobList, setJobList] = useState<JobListInterface[]>([])
  const [jobFilteredList, setJobFilteredList] = useState<JobListInterface[]>([])
  const [loading, setLoading] = useState(false)
  const [minSalary, setMinSalary] = useState("")
  const [skillsFilters, setSkillsFilter] = useState([])

  async function fetchData() {
    setLoading(true)
    try {
      const { data } = (await getJobDetails()) as { data: JobListInterface[] }
      setJobList(data)
      setJobFilteredList(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const applySalaryFilter = (job: JobListInterface) =>
    job.salary >= (+minSalary || 0)

  const applySkillsFilter = (job: JobListInterface) =>
    job.skills.some(
      (skill) => !skillsFilters.length || skillsFilters.includes(skill)
    )

  const filterJobs = () => {
    const haveSomeFilters = minSalary || skillsFilters.length > 0
    if (haveSomeFilters) {
      let filteredJobs = jobList
        .filter(applySalaryFilter)
        .filter(applySkillsFilter)
      setJobFilteredList(filteredJobs)
    } else {
      setJobFilteredList(jobList)
    }
  }

  useEffect(() => {
    filterJobs()
  }, [jobList, minSalary, skillsFilters])

  const getAppliedJobs = (
    jobList: JobListInterface[],
    selectedListId: number
  ) => {
    return jobList.map((job) => {
      return {
        ...job,
        applied: job.id === selectedListId ? !job.applied : job.applied,
      }
    })
  }

  const handleJobApply = (selectedListId: number) => {
    const jobs = getAppliedJobs(jobList, selectedListId)
    setJobList(jobs)
  }

  const getAppliedJobCount = (list: JobListInterface[]) => {
    return list.filter(({ applied }) => applied).length
  }

  return (
    <StyledContainer padding="md" display="flex">
      <Filters
        jobList={jobFilteredList}
        loading={loading}
        onChangeMinSalary={setMinSalary}
        onChangeSkillsFilters={setSkillsFilter}
      />
      <JobList
        jobList={jobFilteredList}
        appliedJobCount={getAppliedJobCount(jobList)}
        loading={loading}
        onJobApply={handleJobApply}
      />
    </StyledContainer>
  )
}

export default Jobs

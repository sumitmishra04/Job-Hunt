import React, { useContext, useState } from "react"
import { Container } from "../../../../../../components/molecules"
import { JobListInterface } from "../job-list/JobList.interfaces"
import Skills from "../../../userProfile/components/user-details/components/skills/Skills.component"
import { FreelancerContext } from "../../../../Freelancer.component"
import { ACTIONS } from "../../../../Freelancer.constants"
import { Accordion } from "../../../../../../components/molecules"
import MinSalary from "./components/min-salary/MinSalary.component"
import { styled } from "styled-components"
import { Device } from "../../../../../../components/atoms/DeviceSize"

interface FiltersProps {
  jobList: JobListInterface[]
  onChangeMinSalary: (value: number | string) => void
  loading: boolean
  onChangeSkillsFilters: (skills: string[]) => void
}

const StyledContainer = styled(Container)`
  flex-direction: column;
  gap: 16px;

  @media ${Device.Small} {
    width: 100%;
  }
`

function Filters({
  jobList,
  onChangeMinSalary,
  loading,
  onChangeSkillsFilters,
}: FiltersProps) {
  const { state, dispatch } = useContext(FreelancerContext)
  const [showContent, setShowContent] = useState(true)

  const jobsCount = jobList.length

  const onChangeMinSalaryValue = (value: string) => {
    dispatch({
      type: ACTIONS.SET_MIN_SALARY_FILTER,
      data: { minSalary: value },
    })
    onChangeMinSalary(+value)
  }

  const isSkillAlreadyAdded = (selectedSkill: string) =>
    state.filters.skills.some((skill: string) => skill === selectedSkill)

  const setSkillChange = (skills: string[]) => {
    onChangeSkillsFilters(skills)
    dispatch({
      type: ACTIONS.SET_SKILLS_FILTER,
      data: { skills },
    })
  }

  const handleAddSkillFilter = (selectedSkill: string) => {
    if (isSkillAlreadyAdded(selectedSkill)) {
      return
    }

    const newSkills = [...(state.filters.skills || []), selectedSkill]

    setSkillChange(newSkills)
  }

  const handleRemoveSkillFilter = (index: number) => {
    const remainingSkills = state.filters.skills.filter(
      (_, idx) => idx !== index
    )

    setSkillChange(remainingSkills)
  }

  return (
    <StyledContainer display="flex" width="25%" marginRight="sm">
      <Accordion
        content="Apply Filters"
        onToggle={setShowContent}
        show={showContent}
      />

      {showContent && (
        <>
          <Skills
            onAddSkill={handleAddSkillFilter}
            onRemoveSkill={handleRemoveSkillFilter}
            skills={state.filters.skills}
          />
          <MinSalary
            onChange={onChangeMinSalaryValue}
            minSalary={state.filters.minSalary}
          />
        </>
      )}
    </StyledContainer>
  )
}

export default Filters

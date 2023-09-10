import React, { useContext } from "react"
import { Container } from "../../../../components/molecules"
import { FreelancerContext } from "../../Freelancer.component"
import { ACTIONS } from "../../Freelancer.constants"
import ProfileList from "./components/user-details/components/profile-search/components/projectList/ProjectList.component"
import UserDetails from "./components/user-details/components/UserDetails.component"
import { styled } from "styled-components"
import { Device } from "../../../../components/atoms/DeviceSize"

const StyledContainer = styled(Container)`
  @media ${Device.Small} {
    flex-direction: column;
  }
`

function UserProfile() {
  const { state, dispatch } = useContext(FreelancerContext)
  const isSkillAlreadyAdded = (selectedSkill: string) =>
    state.skills.some((skill: string) => skill === selectedSkill)

  const handleAddSkill = (selectedSkill: string) => {
    if (isSkillAlreadyAdded(selectedSkill)) {
      return
    }

    const newSkills = [...(state.skills || []), selectedSkill]

    dispatch({
      type: ACTIONS.SET_USER_SKILLS,
      data: { skills: newSkills },
    })
  }

  const handleRemoveSkill = (index: number) => {
    const remainingSkills = state.skills.filter((_, idx) => idx !== index)

    dispatch({
      type: ACTIONS.SET_USER_SKILLS,
      data: { skills: remainingSkills },
    })
  }

  return (
    <StyledContainer padding="md" display="flex">
      <UserDetails
        onAddSkill={handleAddSkill}
        onRemoveSkill={handleRemoveSkill}
        skills={state.skills}
      />
      <ProfileList gitProjects={state.gitProjects} />
    </StyledContainer>
  )
}

export default UserProfile

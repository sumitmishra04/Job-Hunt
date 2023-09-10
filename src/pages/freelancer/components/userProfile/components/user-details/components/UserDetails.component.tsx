import { useContext, useState } from "react"
import { styled } from "styled-components"
import { Container } from "../../../../../../../components/molecules"
import { Accordion } from "../../../../../../../components/molecules"
import ProfileSearch from "./profile-search/ProfileSearch.component"
import Skills from "./skills/Skills.component"
import { useSearchParams } from "react-router-dom"
import { FreelancerContext } from "../../../../../Freelancer.component"
import { Device } from "../../../../../../../components/atoms/DeviceSize"

interface UserDetailsProps {
  onRemoveSkill: (index: number) => void
  onAddSkill: (selectedSkill: string) => void
  skills: string
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 25%;

  @media ${Device.Small} {
    width: 100%;
  }
`

function UserDetails({ onAddSkill, onRemoveSkill, skills }: UserDetailsProps) {
  const [showContent, setShowContent] = useState(true)
  let [searchParams] = useSearchParams()
  const isViewOnly = searchParams.get("viewonly")
  const { state } = useContext(FreelancerContext)

  return (
    <StyledContainer width="20%" marginRight="sm" marginBottom="md">
      <Accordion
        content={isViewOnly ? state.gitUsername : "Add Profile Information"}
        onToggle={setShowContent}
        show={showContent}
      />

      {showContent && (
        <>
          <Skills
            onAddSkill={onAddSkill}
            onRemoveSkill={onRemoveSkill}
            skills={skills}
            isViewOnly={isViewOnly}
          />
          <ProfileSearch />
        </>
      )}
    </StyledContainer>
  )
}

export default UserDetails

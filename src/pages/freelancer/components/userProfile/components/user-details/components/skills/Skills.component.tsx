import { styled } from "styled-components"
import {
  Container,
  Pills,
  Text,
} from "../../../../../../../../components/molecules"
import { Select } from "../../../../../../../../components/molecules/select"
import { SKILLS } from "./Skills.constants"

const StyledSkillsWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`

const SKILLS_OPTIONS = SKILLS.map((skill) => {
  return { value: skill, label: skill }
})

interface SkillsProps {
  skills: string
  isViewOnly?: boolean
  onRemoveSkill: (index: number) => void
  onAddSkill: (selectedSkill: string) => void
}

function Skills({
  skills,
  onRemoveSkill,
  onAddSkill,
  isViewOnly,
}: SkillsProps) {
  return (
    <Container card paddingHorizontal="sm" paddingTop="sm" paddingBottom="lg">
      {!isViewOnly && (
        <Container display="flex">
          <Text
            noWrap
            content="Select Skills : "
            color="grey700"
            size="md"
            marginRight="sm"
          />
          <Select options={SKILLS_OPTIONS} onOptionSelect={onAddSkill} />
        </Container>
      )}

      <StyledSkillsWrapper marginTop="md">
        <Text
          content={`Skills ${isViewOnly ? "" : "Added"} (${
            skills.length || 0
          }) :`}
          color="blue600"
          size="md"
        />

        {(skills || []).map((skill: string, index: number) => {
          return (
            <Pills
              key={skill}
              value={skill}
              {...(!isViewOnly && { onCancel: () => onRemoveSkill(index) })}
            />
          )
        })}
      </StyledSkillsWrapper>
    </Container>
  )
}

export default Skills

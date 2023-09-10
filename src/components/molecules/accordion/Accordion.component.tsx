import React, { useState } from "react"
import { styled } from "styled-components"
import Container from "../container"
import { Colours } from "../../atoms"
import Text from "../text"
import { ChevronDown, ChevronUp } from "../../atoms/Icons"
import { Device } from "../../atoms/DeviceSize"

const StyledHeader = styled(Container)`
  background: ${Colours.palette.blue100};
  @media ${Device.Small} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const StyledIcon = styled(Text)`
  display: none;
  @media ${Device.Small} {
    display: inline;
  }
`

interface AccordionProps {
  onToggle: (value: boolean) => void
  show: boolean
  content: string
}

function Accordion({ content, onToggle, show }: AccordionProps) {
  const [showContent, setShowContent] = useState(show)

  const handleToggle = () => {
    const toggledState = !showContent
    setShowContent(toggledState)
    onToggle(toggledState)
  }

  return (
    <StyledHeader padding="sm">
      <Text content={content} color="blue600" size="lg" />
      <StyledIcon
        content={showContent ? <ChevronUp /> : <ChevronDown />}
        color="blue600"
        size="lg"
        onClick={handleToggle}
      />
    </StyledHeader>
  )
}

export default Accordion

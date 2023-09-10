import React from "react"
import { styled } from "styled-components"
import { Colours } from "."

const StyledIcon = styled.span`
  color: ${Colours.palette.blue600};
`
function CrossIcon() {
  return <StyledIcon>&#x2715;</StyledIcon>
}

function ChevronDown() {
  return <StyledIcon>&#x2304;</StyledIcon>
}

function ChevronUp() {
  return <StyledIcon>&#x2303;</StyledIcon>
}

export { CrossIcon, ChevronUp, ChevronDown }

function RedirectIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill={Colours.palette.blue600}
        d="M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z"
      />
    </svg>
  )
}

export { RedirectIcon }

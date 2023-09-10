import React from "react"
import { css, styled } from "styled-components"
import { Container, Text } from "../../../../molecules"
import { Colours } from "../../../../atoms"

interface TabItemProps {
  name: string
  onChangeTab: (name: string) => void
  isActive: boolean
}

const StyledTab = styled(Container)<any>`
  cursor: pointer;
  padding-bottom: 5px;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 4px solid ${Colours.palette.blue600};
    `}
`

function TabItem({ name, isActive, onChangeTab }: TabItemProps) {
  return (
    <StyledTab onClick={() => onChangeTab(name)} isActive={isActive}>
      <Text color="blue600" size="lg" content={name} />
    </StyledTab>
  )
}

export default TabItem

import React, { useState } from "react"
import TabItem from "./components/item/TabItem"
import { Container } from "../../molecules"
import { styled } from "styled-components"

interface TabsProps {
  tabItems: string[]
  onChange: (index: number) => void
}

const TabsWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  gap: 30px;
`

function Tabs({ tabItems, onChange }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleOnChangeTab = (index: number) => {
    setActiveTabIndex(index)
    onChange(index)
  }

  return (
    <TabsWrapper marginTop="md">
      {tabItems.map((tabName, index) => {
        return (
          <TabItem
            key={index}
            name={tabName}
            isActive={activeTabIndex === index}
            onChangeTab={() => handleOnChangeTab(index)}
          />
        )
      })}
    </TabsWrapper>
  )
}

export default Tabs

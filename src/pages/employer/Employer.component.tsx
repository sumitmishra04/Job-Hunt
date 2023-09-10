import React, { useState, createContext, useReducer } from "react"
import { styled } from "styled-components"
import Tabs from "../../components/organisms/tabs"
import reducer, { initialState } from "./Employer.reducer"
import JobForm from "./components/job-form/JobForm.component"
import { Container } from "../../components/molecules"
import ViewJobs from "./components/view-jobs/ViewJobs.component"

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`

const TABS = ["Post Job", "View Jobs Posted"]

export const EmployerContext = createContext(null)

function Employer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [currentTab, setCurrentTab] = useState(TABS[0])

  const handleChangeTab = (index: number) => {
    setCurrentTab(TABS[index])
  }

  const getContent = () => {
    switch (currentTab) {
      case TABS[0]: {
        return <JobForm />
      }
      case TABS[1]: {
        return <ViewJobs />
      }
    }
  }

  return (
    <EmployerContext.Provider value={{ state, dispatch }}>
      <StyledContainer padding="sm">
        <Tabs tabItems={TABS} onChange={handleChangeTab} />
        {getContent()}
      </StyledContainer>
    </EmployerContext.Provider>
  )
}

export default Employer

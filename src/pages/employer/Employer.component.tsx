import React, { useState, createContext, useReducer, useEffect, useContext } from "react"
import { styled } from "styled-components"
import Tabs from "../../components/organisms/tabs"
import reducer, { initialState } from "./Employer.reducer"
import JobForm from "./components/job-form/JobForm.component"
import { Container } from "../../components/molecules"
import ViewJobs from "./components/view-jobs/ViewJobs.component"
import { useParams, useSearchParams } from "react-router-dom"
import { ACTIONS as AppActions, AppContext } from "../../app/App"

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`

const TABS = ["Post Job", "View Jobs Posted"]

export const EmployerContext = createContext(null)

function Employer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { dispatch: appDispatch } = useContext(AppContext)

  const [currentTab, setCurrentTab] = useState(TABS[0])
  const [searchParams] = useSearchParams()
  let { id } = useParams()
  const isViewOnly = searchParams.get("viewonly")

  useEffect(() => {
      appDispatch({
        type: AppActions.SET_CURRENT_USER,
        data: { username: id },
      })
  }, [id])


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

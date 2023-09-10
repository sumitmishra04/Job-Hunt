import React, {
  useState,
  createContext,
  useReducer,
  useEffect,
  useContext,
} from "react"
import { styled } from "styled-components"
import Tabs from "../../components/organisms/tabs"
import UserProfile from "./components/userProfile/UserProfile.component"
import Jobs from "./components/jobs/Jobs.component"
import reducer, { initialState } from "./Freelancer.reducer"
import { useParams, useSearchParams } from "react-router-dom"
import { ACTIONS } from "./Freelancer.constants"
import { APPLICANTS } from "../employer/Employer.mock"
import { ACTIONS as AppActions, AppContext } from "../../app/App"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const TABS = ["User Profile"]

export const FreelancerContext = createContext(null)

function Freelancer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { dispatch: appDispatch } = useContext(AppContext)
  const [currentTab, setCurrentTab] = useState(TABS[0])
  let [searchParams] = useSearchParams()
  let { id } = useParams()
  const isViewOnly = searchParams.get("viewonly")
  const tabsToShow = isViewOnly ? TABS : [...TABS, "Jobs"]

  const handleChangeTab = (index: number) => {
    setCurrentTab(TABS[index])
  }

  useEffect(() => {
    if (!isViewOnly) {
      appDispatch({
        type: AppActions.SET_CURRENT_USER,
        data: { username: id },
      })
    }

    if (isViewOnly) {
      dispatch({
        type: ACTIONS.SET_USER_SKILLS,
        data: {
          skills: [
            ...state.skills,
            APPLICANTS.find((user) => user.gitUsername === id)?.skills,
          ],
        },
      })
    }

    dispatch({ type: ACTIONS.SET_USERNAME, data: { username: id } })
  }, [id])

  const getContent = () => {
    switch (currentTab) {
      case TABS[0]: {
        return <UserProfile username={id} />
      }
      case TABS[1]: {
        return <Jobs />
      }
    }
  }

  return (
    <FreelancerContext.Provider value={{ state, dispatch }}>
      <StyledContainer>
        <Tabs tabItems={tabsToShow} onChange={handleChangeTab} />
        {getContent()}
      </StyledContainer>
    </FreelancerContext.Provider>
  )
}

export default Freelancer

import React, { useContext, useEffect, useState } from "react"
import {
  Button,
  Container,
  Input,
  Text,
} from "../../../../../../../../components/molecules"
import { styled } from "styled-components"
import { API } from "../../../../../../../../services/api"
import { FreelancerContext } from "../../../../../../Freelancer.component"
import { ACTIONS } from "../../../../../../Freelancer.constants"
import { GitProjectDataInterface } from "./ProfileSearch.interfaces"
import { useSearchParams } from "react-router-dom"

const SearchWrapper = styled(Container)`
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`

function ProfileSearch() {
  const { state, dispatch } = useContext(FreelancerContext)
  
  const [gitUsername, setGitUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  let [searchParams] = useSearchParams()
  const isViewOnly = searchParams.get("viewonly")

  useEffect(() => {
    setGitUsername(state.gitUsername)
    if(isViewOnly && state.gitUsername) {
      fetchProjects(state.gitUsername)
    }
  }, [state.gitUsername])



  const getGitProjects = (data: GitProjectDataInterface[]) =>
    data.map(({ id, name, html_url }) => ({
      id,
      name,
      url: html_url,
    }))

  const handleResponse = (
    data: { message: string } & GitProjectDataInterface[]
  ) => {
    if (data.message) {
      setError("This profile is not found!! Try with a different username.")
      dispatch({
        type: ACTIONS.SET_USERS_GIT_DETAILS,
        data: {
          gitProjects: [],
        },
      })
    } else {
      setError("")
      dispatch({
        type: ACTIONS.SET_USERS_GIT_DETAILS,
        data: {
          gitProjects: getGitProjects(data),
        },
      })
    }
  }

  const validateFields = () => {
    if (!gitUsername) {
      setError("Enter git username")
      return false
    } else {
      setError("")
      return true
    }
  }

  const fetchProjects = async (username: string) => {
    setLoading(true)
      try {
        const url = `https://api.github.com/users/${username}/repos`
        const result = await API.GET(url)
        const data = await result.json()
        handleResponse(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
  }

  const onClickShowProjects = async () => {
    const isValid = validateFields()

    if (isValid) {
      dispatch({
        type: ACTIONS.SET_USERNAME,
        data: {
          username: gitUsername,
        },
      })
      fetchProjects(gitUsername)
    }
  }

  if(isViewOnly) {
    return null
  }

  return (
    <Container marginTop="xxlg" card padding="sm">
       <SearchWrapper display="flex">
        <Container width="100%">
          <Input
            placeholder="Add git username"
            value={gitUsername}
            onChange={setGitUsername}
          />
        </Container>
        <Container width="fit-content">
          <Button
            value={loading ? "Loading..." : "Show Projects"}
            onClick={onClickShowProjects}
          />
        </Container>
      </SearchWrapper>
      <Text content={error} color="red600" size="sm" />
    </Container>
  )
}

export default ProfileSearch

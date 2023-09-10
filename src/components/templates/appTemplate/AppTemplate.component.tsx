import React, { ReactNode, useContext } from "react"
import { Header } from "../../organisms"
import { styled } from "styled-components"
import { AppLogo } from "../../molecules"
import { ACTIONS, AppContext } from "../../../app/App"
import { useNavigate } from "react-router-dom"

interface AppTemplateProps {
  children: ReactNode
  username?: string
}

const StyledContent = styled.div`
  margin-top: 60px;
`

function AppTemplate({ children, username }: AppTemplateProps) {
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div>
      <Header
        title="Job Hunt"
        logo={<AppLogo />}
        username={username}
        onLogout={() => {
          dispatch({
            type: ACTIONS.ON_LOGOUT,
          })
          navigate("/login")
        }}
      />
      <StyledContent>{children}</StyledContent>
    </div>
  )
}

export default AppTemplate

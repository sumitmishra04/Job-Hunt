import React, { useContext, useState } from "react"
import { Text } from "../../components/molecules"
import { styled } from "styled-components"
import Form from "./components/form"
import IFormData from "./components/form/Form.interfaces"
import { LoginStatusInterface } from "./Login.interface"
import { getUser } from "../../services/loginUser"
import { useNavigate } from "react-router-dom"
import { UserTypes } from "../../utilities/global.interfaces"
import { ACTIONS, AppContext } from "../../app/App"

const StyledWrapper = styled.div`
  background-image: url("https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: calc(100vh - 60px);
`

const StyledContainer = styled.div`
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  flex-direction: column;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function Login() {
  const [isLogging, setIsLogging] = useState(false)
  const [loginStatus, setLoginStatus] = useState<LoginStatusInterface | null>(
    null
  )
  const navigate = useNavigate()
  const { dispatch } = useContext(AppContext)

  const getUrlToNavigate = ({ userType, username }: IFormData) =>
    `/${userType.toLowerCase()}/${username}`

  const handleClickLogin = async (form: IFormData) => {
    setIsLogging(true)
    try {
      await getUser(form)
      dispatch({
        data: form,
        type: ACTIONS.SET_CURRENT_USER,
      })
      navigate(getUrlToNavigate(form))
    } catch (err) {
      setLoginStatus(err as LoginStatusInterface)
    } finally {
      setIsLogging(false)
    }
  }

  return (
    <StyledWrapper>
      <StyledContainer>
        <Text content="Login" color="blue700" size="lg" />
        <Form
          onClickLogin={handleClickLogin}
          isLogging={isLogging}
          loginStatus={loginStatus}
        />
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Login

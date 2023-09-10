import React, { useEffect, useState } from "react"
import {
  Button,
  Input,
  RadioGroup,
  Text,
} from "../../../../components/molecules"
import { styled } from "styled-components"
import { UserTypes } from "../../../../utilities/global.interfaces"
import { IFormData } from "./Form.interfaces"
import { LoginStatusInterface } from "../../Login.interface"

const StyledFormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

interface FormProps {
  onClickLogin: (form: IFormData) => void
  isLogging: boolean
  loginStatus: LoginStatusInterface | null
}

export const InitialFormState: IFormData = {
  username: "paypal",
  password: "admin",
  userType: UserTypes.Freelancer,
}

function Form({ onClickLogin, isLogging, loginStatus }: FormProps) {
  const [form, setForm] = useState(InitialFormState)
  const [error, setError] = useState("")

  const handleFormChange = (key: string, value: string) => {
    const newFormData = { ...form, [key]: value }
    setForm(newFormData)
  }

  const validateFormData = () => {
    const hasEmptyData = Object.values(form).some((value) => !value)
    return hasEmptyData ? "Username/password required" : ""
  }

  const handleClickLogin = () => {
    const error = validateFormData()
    if (error) {
      setError(error)
    } else {
      setError("")
      onClickLogin(form)
    }
  }

  useEffect(() => {
    if (loginStatus) {
      if (loginStatus.status === 400) {
        setError(loginStatus.message)
      } else {
        setError("")
      }
    }
  }, [loginStatus])

  return (
    <>
      <StyledFormWrapper>
        <Input
          placeholder="username"
          value={form.username}
          onChange={(value) => handleFormChange("username", value)}
        />
        <Input
          placeholder="password"
          value={form.password}
          type="password"
          onChange={(value) => handleFormChange("password", value)}
        />
        <RadioGroup
          marginTop="md"
          options={[UserTypes.Freelancer, UserTypes.Employer]}
          selectedOption={form.userType}
          onChange={(value) => handleFormChange("userType", value)}
        />
      </StyledFormWrapper>
      <Text content={error} color="red600" size="sm" />
      <Button
        marginTop="md"
        value={isLogging ? "Login..." : "Login"}
        onClick={handleClickLogin}
      />
    </>
  )
}

export default Form

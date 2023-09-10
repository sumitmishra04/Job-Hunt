import IFormData from "../pages/login/components/form/Form.interfaces"
import { USERS, UserCredentialsInterface } from "../utilities/config"

const validateUserDetails = ({ userType, password, username }: IFormData) => {
  const usersByType = USERS[userType] as UserCredentialsInterface[]
  return usersByType.find(
    (user) => user.username === username && user.password === password
  )
}

export const getUser = (form: IFormData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = validateUserDetails(form)
      if (user) {
        resolve({ status: 200, message: "Successfully logged in." })
      } else {
        reject({ status: 400, message: "Username or password is incorrect" })
      }
    }, 600)
  })
}

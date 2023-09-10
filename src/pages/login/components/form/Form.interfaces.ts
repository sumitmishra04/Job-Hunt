import { UserTypes } from "../../../../utilities/global.interfaces"

export interface IFormData {
  username: string
  password: string
  userType: UserTypes
}

export default IFormData

import { UserTypes } from "./global.interfaces"

export interface UserCredentialsInterface {
  password: string
  username: string
}

export const USERS: Record<UserTypes, UserCredentialsInterface[]> = {
  [UserTypes.Employer]: [
    {
      password: "admin",
      username: "paypal",
    },
  ],
  [UserTypes.Freelancer]: [
    {
      password: "admin",
      username: "sumit",
    },
  ],
}

import { CompanyData } from "../assets/companyData.mock"

export const getJobDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200, data: CompanyData })
    }, 1000)
  })
}

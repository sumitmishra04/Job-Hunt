import { ACTIONS } from "./Employer.constants"

export interface ApplicantInterface {
  name: string
  skills: string
  gitUsername: string
}
export interface JobInterface {
  jobDescriptionPdf: unknown
  jobRequirements?: string
  tags: string
  companyName: string
  contactInfo: string
  applicants?: Array<ApplicantInterface>
}

export interface EmployerStateInterface {
  jobsPosted: JobInterface[]
}

export interface ActionInterface {
  type: ACTIONS
  data: JobInterface
}

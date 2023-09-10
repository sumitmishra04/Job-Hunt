import { ACTIONS } from "./Freelancer.constants"

export interface GitProjectsInterface {
  name: string
  url: string
  id: string
}

export interface FiltersInterface {
  minSalary: number | string
  skills: string[]
}

export interface FreelancerStateInterface {
  skills?: string[]
  gitProjects?: GitProjectsInterface[]
  filters: FiltersInterface
  gitUsername: string
}

export interface ActionInterface {
  type: ACTIONS
  data: {
    skills?: string[]
    gitProjects?: GitProjectsInterface[]
    minSalary?: number
    username?: string
  }
}

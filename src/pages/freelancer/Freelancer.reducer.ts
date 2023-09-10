import { ACTIONS } from "./Freelancer.constants"
import {
  ActionInterface,
  FreelancerStateInterface,
} from "./Freelancer.interfaces"

export const initialState: FreelancerStateInterface = {
  skills: [],
  gitProjects: [],
  gitUsername: "",
  filters: {
    minSalary: "",
    skills: [],
  },
}

function reducer(state = initialState, action: ActionInterface) {
  switch (action.type) {
    case ACTIONS.SET_USER_SKILLS: {
      return {
        ...state,
        skills: action.data.skills,
      }
    }
    case ACTIONS.SET_USERS_GIT_DETAILS: {
      return {
        ...state,
        gitProjects: action.data.gitProjects,
      }
    }
    case ACTIONS.SET_MIN_SALARY_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          minSalary: action.data.minSalary,
        },
      }
    }
    case ACTIONS.SET_SKILLS_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          skills: action.data.skills,
        },
      }
    }
    case ACTIONS.SET_USERNAME: {
      return {
        ...state,
        gitUsername: action.data.username,
      }
    }

    default: {
      return state
    }
  }
}

export default reducer

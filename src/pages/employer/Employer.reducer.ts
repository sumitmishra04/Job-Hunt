import { ACTIONS } from "./Employer.constants"
import {
  ActionInterface,
  ApplicantInterface,
  EmployerStateInterface,
} from "./Employer.interfaces"
import { APPLICANTS, POSTED_JOBS } from "./Employer.mock"

export const initialState: EmployerStateInterface = {
  jobsPosted: POSTED_JOBS,
}

function reducer(
  state: EmployerStateInterface = initialState,
  action: ActionInterface
) {
  switch (action.type) {
    case ACTIONS.ADD_JOB: {
      const count = Math.floor(Math.random() * 5)
      const applicants: ApplicantInterface[] = []

      Array.from(Array(count).keys()).forEach(() => {
        const index = Math.floor(Math.random() * 5)
        applicants.push(APPLICANTS[index])
      })

      return {
        ...state,
        jobsPosted: [...state.jobsPosted, { ...action.data, applicants }],
      }
    }
    default: {
      return initialState
    }
  }
}

export default reducer

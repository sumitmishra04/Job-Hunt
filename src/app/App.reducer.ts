import { ACTIONS, ActionInterface, AppStateInterface } from "./App"

function appReducer(state: AppStateInterface, action: ActionInterface) {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          username: action.data.username,
        },
      }
    }
    case ACTIONS.ON_LOGOUT: {
      return {
        ...state,
        user: null,
      }
    }
    default: {
      return state
    }
  }
}

export default appReducer

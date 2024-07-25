import { useRoutes } from "react-router-dom"
import "./App.css"
import ROUTES from "./app-routes/routes"
import { AppTemplate } from "../components/templates"
import { Suspense, createContext, useReducer } from "react"
import appReducer from "./App.reducer"
import { withErrorBoundary } from "../components/organisms/error-boundary/ErrorBoundary.component"

export interface AppStateInterface {
  user: { username: string } | null
}

export enum ACTIONS {
  SET_CURRENT_USER = "SET_CURRENT_USER",
  ON_LOGOUT = "ON_LOGOUT",
}

export interface ActionInterface {
  type: ACTIONS
  data: {
    username?: string
  }
}

const initialState = {
  user: null,
}
interface AppContextInterface {
  state: AppStateInterface
  dispatch: (prevState: AppStateInterface, action: ActionInterface) => any
}

export const AppContext = createContext<AppContextInterface | null>(null)

function App() {
  console.log('App restarted')
  console.log(timer2)
  const routes = useRoutes(ROUTES)
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppTemplate username={state.user?.username}>
        <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
      </AppTemplate>
    </AppContext.Provider>
  )
}

export default withErrorBoundary(App)

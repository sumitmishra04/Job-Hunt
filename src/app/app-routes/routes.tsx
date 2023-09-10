import React, { lazy } from "react"

const LoginPage = lazy(
  () =>
    import(
      /* webpackChunkName: "LoginPage" */ "../../pages/login/Login.component"
    )
)

const FreelancerPage = lazy(
  () =>
    import(
      /* webpackChunkName: "FreelancerPage" */ "../../pages/freelancer/Freelancer.component"
    )
)

const EmployerPage = lazy(
  () =>
    import(
      /* webpackChunkName: "EmployerPage" */ "../../pages/employer/Employer.component"
    )
)

const ROUTES = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/freelancer/:id",
    element: <FreelancerPage />,
  },
  {
    path: "/employer/:id",
    element: <EmployerPage />,
  },
]

export default ROUTES

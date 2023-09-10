import React from "react"
import { Colours } from "../../atoms"

function AppLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <circle cx="20" cy="20" r="18" fill={Colours.palette.monoWhite} />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={Colours.palette.blue700}
        fontSize="16"
        fontWeight="bold"
      >
        JH
      </text>
    </svg>
  )
}

export default AppLogo

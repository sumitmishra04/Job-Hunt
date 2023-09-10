import { createGlobalStyle } from "styled-components"
import * as color from "./Colours"

export default createGlobalStyle`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: sans-serif;
    color: ${color.palette.grey800};
    background-color: ${color.palette.monoWhite};
    
    * {
      outline: none;
    }
  }
`

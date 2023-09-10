import { css, styled } from "styled-components"
import { CommonInterface, commonCSS } from "../../atoms/Utilities"
import { Colours } from "../../atoms"

interface ContainerProps {
  card?: boolean
}

export default styled.div<CommonInterface & ContainerProps>`
  ${(p) => commonCSS(p)};
  ${(p) =>
    p.card &&
    css`
      box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      border: 1px solid ${Colours.palette.grey200};
    `}
`

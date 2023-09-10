import * as space from "./Space"
import { css } from "styled-components"

export interface CommonInterface {
  zindex?: number

  margin?: space.Type
  marginTop?: space.Type
  marginRight?: space.Type
  marginBottom?: space.Type
  marginLeft?: space.Type
  marginHorizontal?: space.Type
  marginVertical?: space.Type

  padding?: space.Type
  paddingTop?: space.Type
  paddingRight?: space.Type
  paddingBottom?: space.Type
  paddingLeft?: space.Type
  paddingHorizontal?: space.Type
  paddingVertical?: space.Type

  width?: string
  height?: string

  display?: string

  cursor?: string
  pointer?: boolean
  // commonAttrs
  onClick?: Function
  onBlur?: Function
  onFocus?: Function
  onMouseDown?: Function
}

const cursor = (p: CommonInterface) => {
  let cursor
  if (p.pointer) cursor = "pointer"
  if (p.cursor) cursor = p.cursor
  return cursor
}

const gaps = (p: CommonInterface) => {
  if (p.margin) return { margins: space[p.margin].px }
  if (p.padding) return { paddings: space[p.padding].px }

  const margins: any = { top: 0, right: 0, bottom: 0, left: 0 }
  const paddings: any = { top: 0, right: 0, bottom: 0, left: 0 }

  if (p.paddingHorizontal) {
    paddings.left = space[p.paddingHorizontal].px
    paddings.right = space[p.paddingHorizontal].px
  }
  if (p.paddingVertical) {
    paddings.top = space[p.paddingVertical].px
    paddings.bottom = space[p.paddingVertical].px
  }
  if (p.marginHorizontal) {
    margins.left = space[p.marginHorizontal].px
    margins.right = space[p.marginHorizontal].px
  }
  if (p.marginVertical) {
    margins.top = space[p.marginVertical].px
    margins.bottom = space[p.marginVertical].px
  }

  const sideNames = ["Top", "Right", "Bottom", "Left"]
  sideNames.forEach((s) => {
    if (p[`margin${s}`]) {
      margins[s.toLowerCase()] = space[p[`margin${s}`]].px
    }
    if (p[`padding${s}`]) {
      paddings[s.toLowerCase()] = space[p[`padding${s}`]].px
    }
  })

  return {
    margins: `${margins.top} ${margins.right} ${margins.bottom} ${margins.left}`,
    paddings: `${paddings.top} ${paddings.right} ${paddings.bottom} ${paddings.left}`,
  }
}

export const commonCSS = (p: CommonInterface) => {
  return css<CommonInterface>`
    box-sizing: border-box;
    cursor: ${cursor(p)};
    ${(p) =>
      css`
        margin: ${gaps(p).margins};
      `};
    ${(p) =>
      css`
        display: ${p.display};
      `};
    ${(p) =>
      css`
        width: ${p.width};
      `};
    ${(p) =>
      css`
        height: ${p.height};
      `};
    ${(p) =>
      css`
        padding: ${gaps(p).paddings};
      `};
    ${(p) =>
      p.zindex &&
      css`
        z-index: ${p.zindex};
      `};
  `
}

export const commonAttrs = (p: CommonInterface) => ({
  onClick: p.onClick && p.onClick,
  onBlur: p.onBlur && p.onBlur,
  onFocus: p.onFocus && p.onFocus,
})

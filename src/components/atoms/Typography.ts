const base = {
  xxxsm: 7.72,
  xxsm: 9.26,
  xsm: 11.11,
  sm: 13.33,
  md: 16,
  lg: 19.2,
  xlg: 23.04,
  xxlg: 27.65,
  xxxlg: 33.18,
}

export type Type = keyof typeof base

export const xxxsm = { int: base.xxxsm, px: base.xxxsm + "px" }
export const xxsm = { int: base.xxsm, px: base.xxsm + "px" }
export const xsm = { int: base.xsm, px: base.xsm + "px" }
export const sm = { int: base.sm, px: base.sm + "px" }
export const md = { int: base.md, px: base.md + "px" }
export const lg = { int: base.lg, px: base.lg + "px" }
export const xlg = { int: base.xlg, px: base.xlg + "px" }
export const xxlg = { int: base.xxlg, px: base.xxlg + "px" }
export const xxxlg = { int: base.xxxlg, px: base.xxxlg + "px" }

export type alignment = "right" | "left" | "center"
export type size = "xsm" | "sm" | "md" | "lg" | "xlg"

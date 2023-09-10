const base = {
  xxxsm: 3,
  xxsm: 5,
  xsm: 8,
  sm: 11,
  md: 16,
  lg: 21,
  xlg: 31,
  xxlg: 45,
  xxxlg: 63,
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

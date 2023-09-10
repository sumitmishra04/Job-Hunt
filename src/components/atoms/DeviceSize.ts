enum BreakPoint {
  Small = "768px",
}

export enum Device {
  Small = `(max-width: ${BreakPoint.Small})`,
  Large = `(min-width: ${BreakPoint.Small})`,
}

import React, { ReactNode } from "react"
import { List } from "react-virtualized"

interface VirtualListProps {
  data: unknown[]
  width: number
  rowHeight: number
  renderRow: ({
    data,
    index,
    key,
  }: {
    data: unknown
    index: number
    key: string
  }) => ReactNode
}

const VirtualList = ({
  data,
  renderRow,
  width,
  rowHeight,
}: VirtualListProps) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <List
        height={1000}
        width={width}
        rowHeight={rowHeight || 100}
        rowRenderer={renderRow}
        rowCount={data.length}
        overscanRowCount={3}
      />
    </div>
  )
}

export default VirtualList

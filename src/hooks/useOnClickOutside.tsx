import React from "react"
import { useEffect } from "react"

function useOnClickOutside(
  ref: React.RefObject<any>,
  handler: Function,
  deps: Array<any> = []
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target) || !handler) {
        return
      }
      handler(event)
    }
    window.addEventListener("mousedown", listener)
    return () => {
      window.removeEventListener("mousedown", listener)
    }
  }, deps)
}

export default useOnClickOutside

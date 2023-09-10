import React, { Component } from "react"
import { Container, Text } from "../../molecules"

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <Container>
          <Text content="Something went wrong" color="blue600" size="lg" />
        </Container>
      )
    }
    return children
  }
}

export default ErrorBoundary

export function withErrorBoundary(ReactNode) {
  return function Wrapper(props) {
    return (
      <ErrorBoundary>
        <ReactNode {...props} />
      </ErrorBoundary>
    )
  }
}

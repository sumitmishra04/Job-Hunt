import React, { ReactNode } from "react"
import { Container, Text } from "../../molecules"
import { styled } from "styled-components"
import { Colours, Typography } from "../../atoms"

interface HeaderProps {
  logo?: ReactNode
  title: string
  username?: string
  onLogout?: () => void
}

const StyledHeaderWrapper = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${Colours.palette.blue700};
  color: ${Colours.palette.monoWhite};
  padding: 10px;
  font-size: ${Typography.xlg.px};
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  z-index: 2;
`

const StyledBrand = styled(Container)`
  display: flex;
  align-items: center;
  gap: 5px;
`

const StyledInfo = styled(Container)`
  display: flex;
  align-items: center;
  gap: 10px;
`

function Header({ logo, title, username, onLogout }: HeaderProps) {
  return (
    <StyledHeaderWrapper>
      <StyledBrand>
        {logo}
        <Text content={title} color="monoWhite" size="xlg" />
      </StyledBrand>
      <StyledInfo>
        <Text content={username} color="monoWhite" size="lg" />
        {username && (
          <Text
            content="Logout"
            color="monoWhite"
            size="lg"
            onClick={onLogout}
            pointer
          />
        )}
      </StyledInfo>
    </StyledHeaderWrapper>
  )
}

export default Header

import React, { ReactNode } from "react"
import styled from "styled-components"
import { Button, Container } from "../../molecules"
import { createPortal } from "react-dom"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Backdrop = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContainer = styled(Container)`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  min-height: 60%;
  min-width: 60%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return createPortal(
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
        <Button value="Close" onClick={onClose} />
      </ModalContainer>
    </Backdrop>,
    document.getElementById("root")
  )
}

export default Modal

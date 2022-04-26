import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'
const Modal = ({open,children,onClose}) => {
  if(!open)
    return null

  return createPortal(
    <>
        <div className="overlay"></div>
        <div className="modal">
            {children}
        </div>
    </>
    ,document.getElementById('modal')
  )
}

export default Modal
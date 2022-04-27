import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'
import {AiOutlineCloseCircle} from "react-icons/ai"
// const closebtn = {
//   position:'fixed',
//   zIndex: 1000,
//   top:'10%',
//   right:'23%',
//   cursor: 'pointer',
// }
const Modal = ({open,children,onClose}) => {
  if(!open)
    return null

  return createPortal(
    <>
        <div className="overlay" ></div>
        {children}
        <div className="closebtn" onClick={onClose}>
        <AiOutlineCloseCircle />
        </div>
    </>
    ,document.getElementById('modal')
  )
}

export default Modal
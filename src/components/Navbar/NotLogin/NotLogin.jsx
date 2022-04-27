import React from 'react'
import {AiFillCaretDown} from "react-icons/ai"
const NotLogin = ({handleClick}) => {
  return (
    <h4>
        Create account.
        <a href="#" onClick={handleClick}>It's free! </a>
        <span className="downarrow">
              <AiFillCaretDown/>
        </span>
    </h4>
  )
}

export default NotLogin
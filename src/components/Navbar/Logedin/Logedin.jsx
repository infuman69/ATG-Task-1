import React from 'react'
import {AiFillCaretDown} from "react-icons/ai"

const Logedin = () => {
  return (
    <h4>
        <div className="profile-img">
            <img src="https://images.unsplash.com/photo-1576630135961-259d1b5b20a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80" alt="" srcset="" />
        </div>
        <div className="username">
            Siddharth Goyal
        </div>
        <div className="down-icon">
            <AiFillCaretDown/>
        </div>
    </h4>
  )
}

export default Logedin
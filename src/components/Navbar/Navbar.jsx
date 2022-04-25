import React from 'react'
import './Navbar.css'
import {AiOutlineSearch,AiFillCaretDown} from "react-icons/ai"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-cont">
        <div className="logo">
          <h1>
            <span className="greenh">
              ATG.
            </span>
            W
            <span className="oletter">
              O
            </span>
            RLD
          </h1>
        </div>
        <div className="search-bar">
          <AiOutlineSearch style={{"color":"#7A7A7A"}}/>
          <input type="text" name="" id="" placeholder='Search for your favourite groups in ATG'/>
        </div>
        <div className="accdetail">
          <h4>
            Create account.<a href="#">It's free! </a>
            <span className="downarrow">
              <AiFillCaretDown/>
            </span>
          </h4>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
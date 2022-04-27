import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineSearch,AiFillCaretDown} from "react-icons/ai"
import Modal from '../Modals/Modal/Modal'
import Signin from '../Modals/Signin/Signin'
import Signup from '../Modals/Signup/Signup'




const Navbar = () => {
  const [isOpen,setisOpen] = useState(false)
  const [modaltype,setmodaltype] = useState('signup')
  const handleClick = () => {
    setisOpen(true)
  }
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
            Create account.<a href="#" onClick={handleClick}>It's free! </a>
            <span className="downarrow">
              <AiFillCaretDown/>
            </span>
          </h4>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setisOpen(false)}>
        {
          modaltype === 'signup' ? <Signup clickSignin={()=>setmodaltype('signin')}/>:<Signin clickSignup={()=>setmodaltype('signup')}/>
        }
      </Modal>
    </nav>
  )
}

export default Navbar
import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineSearch,AiFillCaretDown} from "react-icons/ai"
import Modal from '../Modals/Modal/Modal'
import Signin from '../Modals/Signin/Signin'
import Signup from '../Modals/Signup/Signup'
import NotLogin from './NotLogin/NotLogin'
import Logedin from './Logedin/Logedin'




const Navbar = () => {
  const [isOpen,setisOpen] = useState(false)
  const [modaltype,setmodaltype] = useState('signup')
  const [onLogin,setLogin] = useState(false)
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
          {!onLogin ? <NotLogin handleClick={handleClick} />:<Logedin/>}
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setisOpen(false)}>
        {
          modaltype === 'signup' ? <Signup clickSignin={()=>setmodaltype('signin')}/>:<Signin clickSignup={()=>setmodaltype('signup')} setlogin={()=>{setLogin(true)}} onClose={() => setisOpen(false)}/>
        }
      </Modal>
    </nav>
  )
}

export default Navbar
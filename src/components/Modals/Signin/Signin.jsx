import React from 'react'
import ficon from "../../../Assets/facebook-logo.png"
import signupimg from "../../../Assets/signup.svg"
import {FcGoogle} from "react-icons/fc"
import "./Signin.css"

const Signin = () => {
  return (
    <section className="signin">
        <div className="some-text">
            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        </div>
        <div className="create-acc">
            <h1>Sign In</h1>
            <p>Don't have an account yet?<span>Create new for free!</span></p>
        </div>
        <div className="form-cont-img">
            <div className="signinform">
                <form action="">
                    <div className="email">
                        <input type="email" name="" id="" placeholder='Email'  className='input-style'/>
                    </div>
                    <div className="password">
                        <input type="password" name="" id="" placeholder='Password' className='input-style' />
                    </div>
                    <button type="submit" className='signupbtn'>
                        Sign In
                    </button>
                </form>
                <button type="submit" className='mediabtn'>
                   <img src={ficon} alt="" srcset="" /> Sign up with Facebook
                </button>
                <button type="submit" className='mediabtn'>
                   <FcGoogle/> Sign up with Google
                </button>
                <p className='forgot-password'>Forgot Password?</p>
            </div>
            <div className="some-img">
                <img src={signupimg} alt="" srcset="" />
                
            </div>
        </div>
    </section>
  )
}

export default Signin
import React from 'react'
import {FcGoogle} from "react-icons/fc"
import ficon from "../../../Assets/facebook-logo.png"
import './Signup.css'
import signupimg from "../../../Assets/signup.svg"


// TODO: GOOGLE AND FACEBOOK BUTTONS REMAINING ,SIGNIN REMAINING , LOGIN UI REMAINING, RESPONSIVE REMAINING
const Signup = () => {
  return (
    <section className="signup">
        <div className="some-text">
            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        </div>
        <div className="create-acc">
            <h1>Create Account</h1>
            <p>Already have an account?<span>Sign In</span></p>
        </div>
        <div className="form-cont-img">
            <div className="signupform">
                <form action="">
                    <div className="name">
                        <input type="text" name="" id="" placeholder='First Name' className='input-style'/>
                        <input type="text" name="" id="" placeholder='Last Name'  className='input-style'/>
                    </div>
                    <div className="email">
                        <input type="email" name="" id="" placeholder='Email'  className='input-style'/>
                    </div>
                    <div className="password">
                        <input type="password" name="" id="" placeholder='Password' className='input-style' />
                    </div>
                    <div className="confirm-password">
                        <input type="password" name="" id="" placeholder='Confirm Password'  className='input-style'/>
                    </div>
                    <button type="submit" className='signupbtn'>
                        Create Account
                    </button>
                </form>
                <button type="submit" className='mediabtn'>
                   <img src={ficon} alt="" srcset="" /> Sign up with Facebook
                </button>
                <button type="submit" className='mediabtn'>
                   <FcGoogle/> Sign up with Google
                </button>
            </div>
            <div className="some-img">
                <img src={signupimg} alt="" srcset="" />
                <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
        </div>
    </section>
  )
}

export default Signup
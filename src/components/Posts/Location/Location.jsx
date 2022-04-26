import React from 'react'
import {GoLocation} from "react-icons/go"
import {MdModeEditOutline} from "react-icons/md"
import {AiOutlineExclamationCircle} from "react-icons/ai"
import './Location.css'
const Location = () => {
  return (
    <section className="location">
        <div className="locinput">
            <GoLocation/>
            <input type="text" name="" id="" placeholder='Enter a location' />
            <MdModeEditOutline/>
            <hr />
        </div>
        <div className="loctext">
          <AiOutlineExclamationCircle style={{"marginRight":"3px"}}/>
          <p> 
            Your location will help us serve better and extend a personalised experience.
          </p>
        </div>
    </section>
 )
}

export default Location
import React from 'react'
import {GoLocation} from "react-icons/gd"
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
        </div>
        <p> <AiOutlineExclamationCircle/>Your location will help us serve better and extend a personalised experience.</p>
    </section>
 )
}

export default Location
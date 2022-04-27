import React from 'react'
import './GroupHead.css'
import {AiOutlineArrowLeft} from "react-icons/ai"
const GroupHead = () => {
  return (
    <section className="group_head">
      <div className="equal-spacing">
        <div className="arrow-join-group">
          <AiOutlineArrowLeft/>
          <button>
            Join Group
          </button>
        </div>
      </div>
       <div className="group_info">
           <h1>Computer Engineering</h1>
           <p>142,765 Computer Engineers follow this</p>
       </div> 
    </section>
  )
}

export default GroupHead
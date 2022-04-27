import React from 'react'
import {GoLocation} from "react-icons/go"
import {MdModeEditOutline} from "react-icons/md"
import {AiOutlineExclamationCircle,AiTwotoneLike} from "react-icons/ai"
import './Location.css'
const Location = ({joined}) => {
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
        {
          !joined ?  null:
        <div className="rec-groups">
            <h4>
              <AiTwotoneLike style={{"marginRight":"3px"}}/>
              RECOMMENDED GROUPS
            </h4>
            <ul className="rec-group-list">
              <li className="rec-group">
                <div className="user">
                  <img src="https://images.unsplash.com/photo-1445307806294-bff7f67ff225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" />
                  <span>Leisure</span>
                </div>
                <button className="follow">
                  Follow
                </button>
              </li>
              <li className="rec-group">
                <div className="user">
                  <img src="https://images.unsplash.com/photo-1553242072-345b34e7b55b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80" alt="" />
                  <span>Activism</span>
                </div>
                <button className="follow">
                  Follow
                </button>
              </li>
              <li className="rec-group">
                <div className="user">
                  <img src="https://images.unsplash.com/photo-1603086360919-8b8eacad64bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                  <span>MBA</span>
                </div>
                <button className="follow">
                  Follow
                </button>
              </li>
              <li className="rec-group">
                <div className="user">
                  <img src="https://images.unsplash.com/photo-1514837658567-d5a3ad893d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBoaWxvc29waHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                  <span>Philosophy</span>
                </div>
                <button className="follow">
                  Follow
                </button>
              </li>
            </ul>
        </div>
        }
    </section>
 )
}

export default Location
import React from 'react'
import postData from '../../../postsdata'
import PostCard from '../PostCard/PostCard'
import './PostContainer.css'
import {BsThreeDots} from "react-icons/bs"
import {FiEye} from "react-icons/fi"
import {GiShare} from "react-icons/gi"
import {BsCalendar4Event} from "react-icons/bs"
import {GoLocation} from "react-icons/go"




const PostContainer = () => {
  return (
    <div className="PostContainer">
      {
        postData.map((item) => {
          return <PostCard key={item.id} {...item}/>
        })
      }
      <div className="card1">
        <div className="cardimg">
            <img src="https://images.unsplash.com/photo-1494496015175-16a1c8eddfb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80" alt=""/>
        </div>
        <div className="card-event-type">
            <div className="event-emoji">
                📅
            </div>
            <div className="event-type">
                <h3>
                    Meetup
                </h3>
            </div>
        </div>
        <div className="event-title">
            <h2>
            Finance & Investment Elite Social Mixer @Lujiazui
            </h2>
            <div className="options-icon">
                <BsThreeDots style={{"cursor":"pointer"}}/>
            </div>
        </div>
        <div className="date-location">
          <div className="date">
            <BsCalendar4Event/>
            <p>Fri, 12 Oct, 2018</p>
          </div>
          <div className="location">
            <GoLocation/>
            <p>Ahmedabad, India</p>
          </div>
        </div> 
        <div className="visit-website">
          <button className='visit-web'>Visit Website</button>
        </div>
        <div className="event-author-details">
            <div className="author-details">
                <img src="https://images.unsplash.com/photo-1490989784684-1f18ac10ffad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" />
                <h3>
                Ronal Jones
                </h3>
            </div>
            <div className="views-share-icon">
                <FiEye/>
                <p>1.4k</p>
                <div className="share-icon">
                    <GiShare style={{"cursor":"pointer"}} />
                </div>
            </div>
        </div>
    </div>
      <div className="card2">
        <div className="card-event-type">
            <div className="event-emoji">
                🏢
            </div>
            <div className="event-type">
                <h3>
                    Job
                </h3>
            </div>
        </div>
        <div className="event-title">
            <h2>
            Software Developer
            </h2>
            <div className="options-icon">
                <BsThreeDots style={{"cursor":"pointer"}}/>
            </div>
        </div>
        <div className="date-location">
          <div className="date">
            <BsCalendar4Event/>
            <p>Innovaccer Analytics Private Ltd.</p>
          </div>
          <div className="location">
            <GoLocation/>
            <p>Noida, India</p>
          </div>
        </div> 
        <div className="apply-jobs">
          <button className='apply-job'>Apply on Timejobs</button>
        </div>
        <div className="event-author-details">
            <div className="author-details">
                <img src="https://images.unsplash.com/photo-1565552056232-577871c7688e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" />
                <h3>
                Joseph Gray
                </h3>
            </div>
            <div className="views-share-icon">
                <FiEye/>
                <p>1.4k</p>
                <div className="share-icon">
                    <GiShare style={{"cursor":"pointer"}} />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PostContainer
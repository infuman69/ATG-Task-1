import React from 'react'
import './PostCard.css'
import {BsThreeDots} from "react-icons/bs"
import {FiEye} from "react-icons/fi"
import {GiShare} from "react-icons/gi"

const PostCard = ({id,img,eventemoji,eventtype,eventtitle,eventtext,author,authorimg,views}) => {
  return (
    <div className="card">
        <div className="cardimg">
            <img src={img} alt=""/>
        </div>
        <div className="card-event-type">
            <div className="event-emoji">
                {eventemoji}
            </div>
            <div className="event-type">
                <h3>
                    {eventtype}
                </h3>
            </div>
        </div>
        <div className="event-title">
            <h2>
                {eventtitle}
            </h2>
            <div className="options-icon">
                <BsThreeDots style={{"cursor":"pointer"}}/>
            </div>
        </div>
        <div className="event-text">
            <p>
                {eventtext}
            </p>
        </div>
        <div className="event-author-details">
            <div className="author-details">
                <img src={authorimg} alt="" />
                <h3>
                    {author}
                </h3>
            </div>
            <div className="views-share-icon">
                <FiEye/>
                <p>{views}</p>
                <div className="share-icon">
                    <GiShare style={{"cursor":"pointer"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard
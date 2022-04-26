import React from 'react'
import './PostCard.css'
import {BsThreeDots} from "react-icons/bs"
import {FiEye} from "react-icons/fi"
import {GiShare} from "react-icons/gi"

const PostCard = () => {
  return (
    <div className="card">
        <div className="cardimg">
            <img src="https://images.unsplash.com/photo-1529328151084-b6c91c457637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        <div className="card-event-type">
            <div className="event-emoji">
                ✍
            </div>
            <div className="event-type">
                <h3>
                    Article
                </h3>
            </div>
        </div>
        <div className="event-title">
            <h2>
            What if famous brands had regular fonts? Meet RegulaBrands!
            </h2>
            <div className="options-icon">
                <BsThreeDots style={{"cursor":"pointer"}}/>
            </div>
        </div>
        <div className="event-text">
            <p>
            I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
            </p>
        </div>
        <div className="event-author-details">
            <div className="author-details">
                <img src="https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                <h3>
                    Sarthak Kamra
                </h3>
            </div>
            <div className="views-share-icon">
                <FiEye/>
                <p>1.4kviews</p>
                <div className="share-icon">
                    <GiShare style={{"cursor":"pointer"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard
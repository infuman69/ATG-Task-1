import React from 'react'
import Location from '../Location/Location'
import PostContainer from '../PostContainer/PostContainer'
import './Post.css'

const Post = ({joined}) => {
  return (
    <div className="posts-cont">
      <div className="post-cont">
        <PostContainer/>
        <Location joined={joined}/>
      </div>
    </div>
  )
}

export default Post
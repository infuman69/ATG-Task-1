import React from 'react'
import Location from '../Location/Location'
import PostContainer from '../PostContainer/PostContainer'
import './Post.css'

const Post = () => {
  return (
    <div className="posts-cont">
      <div className="post-cont">
        <PostContainer/>
        <Location/>
      </div>
    </div>
  )
}

export default Post
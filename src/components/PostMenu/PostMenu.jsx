import React from 'react'
import './PostMenu.css'
import {AiFillCaretDown} from "react-icons/ai"
import {MdGroupAdd} from "react-icons/md"

const PostMenu = () => {
  return (
    <section className="postmenucont">
        <section className="postmenu">
            <div className="posts">
                <ul className="types">
                    <li className="type clicked">All Posts(32)</li>
                    <li className="type">Article</li>
                    <li className="type">Event</li>
                    <li className="type">Education</li>
                    <li className="type">Job</li>
                </ul>            
            </div>
            <div className="postbtns">
                <button className='writepost'>
                    <span>    
                        Write a Post 
                    </span> 
                    <AiFillCaretDown style={{"margin-left":"9px"}} />
                </button>
                <button className="joingroup">
                    <MdGroupAdd style={{"margin-right":"4px"}} size={20}/>
                    <span>
                        Join a Group
                    </span>
                </button>
            </div>
        </section>
    </section>
 )
}

export default PostMenu
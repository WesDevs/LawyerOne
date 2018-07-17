import React from 'react';
const Posts = (props) => {
    console.log(props)
    return ( 
        <li className = "posts"> 
            <a href = {props.url}>
                <img src={props.postSrc} alt="" className = "post-image"/>
                <div className = 'profile-info'>
                    <img src = {props.src} />
                    <p><span>{props.date}</span>{props.name}</p>
                </div>
                <p className = "posts-title">
                {props.title}
                <span><i className="fas fa-heart"></i>{props.likes}</span>
                </p>
            </a>
        </li>
    )
}

export default Posts;
import React from 'react';
const Posts = (props) => {
    console.log(props)
    return ( 
        <li> 
            <div>
                <img src={props.src} alt=""/>
                <div className = 'profile-info'>
                    <div className = 'imageContainer'></div>
                        <p><span>{props.date}</span>{props.name}</p>
                </div>
                <p>{props.title}</p>
            </div>
        </li>
    )
}

export default Posts;
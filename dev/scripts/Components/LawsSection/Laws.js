import React from 'react';

const Laws = (props) => {
    return ( 
        <li>
            <i className={props.icon}></i>
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
            <a href="#">Know More</a>
        </li>
    )
}

export default Laws;
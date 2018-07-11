import React from 'react';

const MenuItem = (props) => {
    console.log(props.hasOwnProperty('image'))
    return ( 
        <li>

            {props.image ? < img src = {props.image}/> : ''}

            {props.icon ? <i className = {props.icon}></i> : ''}

            {props.h1 ? <h1>{props.h1}</h1> : ''}

            {props.h2 ? <h2>{props.h2}</h2> : ''}

            {props.h3 ? <h3>{props.h3}</h3> : ''}

            {props.h4 ? <h4>{props.h4}</h4> : ''}

            {props.h5 ? <h5>{props.h5}</h5> : ''}

            {props.h6 ? <h6>{props.h6}</h6> : ''}

            {props.p ? <p>{props.p}</p> : ''}

        </li>
    )
}

export default MenuItem;
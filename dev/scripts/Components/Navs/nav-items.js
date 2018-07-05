import React from 'react';

const NavItems = (props) => {
    return ( 
        <li className = {`nav-list-items ${props.style}`}>
            <a href="#">
                {props.text !== ''? <p>{props.text}</p> : ''}
            </a>
        </li>
    )
}

export default NavItems;
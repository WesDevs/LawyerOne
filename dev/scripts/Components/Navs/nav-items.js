import React from 'react';

const NavItems = (props) => {
    return ( 
        <li className = "nav-list-items">
            <a href="#">
                <p>{props.text}</p>
            </a>
        </li>
    )
}

export default NavItems;
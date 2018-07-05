import React from 'react';

const NavItems = (props) => {
    console.log(props);
    return ( 
        <li>
            <p>{props.text}</p>
        </li>
    )
}

export default NavItems;
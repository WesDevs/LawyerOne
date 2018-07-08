import React from 'react';
import NavItems from './nav-items';

class NavBar extends React.Component {

    render() {
        return (
        <ul className="menu">
            {
               this.props.menuItems.map((items, i) => {
                   return <NavItems text = {items} key = {i}/>
               })
            }
        </ul>
        )
    }
}

export default NavBar;
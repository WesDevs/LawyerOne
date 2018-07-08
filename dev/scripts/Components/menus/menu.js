import React from 'react';
import MenuItem from './menu-items';

class Menu extends React.Component {

    constructor() {
        super();
        this.x = 'Object.keys(this.props)[0]';
    }

    render() {
        console.log(this.props)
        return (
            <ul className = {this.props.statList.style}>
                {
                    this.props.statList.data.map((items) => {
                        return <MenuItem 
                        icon = {items.icon}
                        h1 = {items.h1} 
                        h2 = {items.h2} 
                        h3 = {items.h3} 
                        h4 = {items.h4} 
                        h5 = {items.h5} 
                        h6 = {items.h6} 
                        p = {items.p} /> 
                    })
                }
            </ul>
        )
    }
}

export default Menu;
import React from 'react';
import MenuItem from './menu-items';

class Menu extends React.Component {

    constructor() {
        super();
        this.x = this.props
    }

    render() {
        console.log(this.x)
        return (
            <ul className = {this.props.statList.style}>
                {
                    this.props.statList.data.map((items, i) => {
                        return <MenuItem 
                        icon = {items.icon}
                        h1 = {items.h1} 
                        h2 = {items.h2} 
                        h3 = {items.h3} 
                        h4 = {items.h4} 
                        h5 = {items.h5} 
                        h6 = {items.h6} 
                        p = {items.p} 
                        key = {i}/> 
                        
                    })
                }
            </ul>
        )
    }
}

export default Menu;
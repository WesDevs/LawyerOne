import React from 'react';
import MenuItem from './menu-items';

class Menu extends React.Component {

    render() {
        console.log(this.props)
        return (
            <ul className = {this.props.data.style}>
                {
                    this.props.data.data.map((items, i) => {
                        return <MenuItem 
                        image = {items.image}
                        icon = {items.icon}
                        h1 = {items.h1} 
                        h2 = {items.h2} 
                        h3 = {items.h3} 
                        h4 = {items.h4} 
                        h5 = {items.h5} 
                        h6 = {items.h6} 
                        p = {items.p} 
                        a = {items.a}
                        href = {items.href}
                        key = {i}
                        button = {items.button}
                        buttonId = {items.buttonId}
                        listId = {items.listId}
                        listClass = {items.listClass}
                        /> 
                    })
                }
            </ul>
        )
    }
}

export default Menu;
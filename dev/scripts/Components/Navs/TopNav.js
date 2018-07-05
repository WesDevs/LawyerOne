import React from 'react';
import NavBar from './navBar';

class TopNav extends React.Component {

    render() {
        console.log(this.props.menuItems);
        return (
            <div className="top-nav">
                <img src="public/assets/logo.png" alt="Site Logo"/>
                <h2>Law Practice</h2>
                <NavBar menuItems = {this.props.menuItems}/>
            </div>
        )
    }
}

export default TopNav;
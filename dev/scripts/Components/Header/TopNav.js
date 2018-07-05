import React from 'react';
import NavBar from '../Navs/navBar';
import SocialNav from '../Navs/socialMediaNav';
import SearchForm from '../Forms/SearchForm';

class TopNav extends React.Component {

    render() {
        return (
            <div className="top-nav">
                <img src="public/assets/logo.png" alt="Site Logo"/>
                <h2>Law Practice</h2>
                <NavBar menuItems = {this.props.menuItems}/>
                <SocialNav socialMedias = {this.props.socialMedias}/>
                <SearchForm />
            </div>
        )
    }
}

export default TopNav;
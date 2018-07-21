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
                <button className = 'nav-button'><i class="fas fa-bars"></i></button>
                <div className = "nav-container">
                    <NavBar menuItems = {this.props.menuItems}/>
                    <SocialNav socialMedias = {this.props.socialMedias}/>
                    <SearchForm />
                </div>
            </div>
        )
    }
}

export default TopNav;
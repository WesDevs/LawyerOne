import React from 'react';
import Menu from '../menus/menu';

class Services extends React.Component {

    render() {
        return (
            <div className = "services-section">
                <h1>Services</h1>
                <div className = "services-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, optio. Aperiam voluptatum delectus sit consequuntur, autem qui asperiores aut, voluptate temporibus architecto omnis vel mollitia dignissimos nostrum a sapiente quis.</p>
                    <Menu data = {this.props.data}/>
                </div>
            </div>
        )
    }
}

export default Services;
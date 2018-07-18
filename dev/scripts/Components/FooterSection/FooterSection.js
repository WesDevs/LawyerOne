import React from 'react';
import Menu from '../menus/menu';

class FooterSection extends React.Component {

    render() {
        console.log(this.props.data.tweet);
        return (
            <section className = "footer-section">
                <div className = "wrapper">
                    <Menu data = {this.props.data}/>
                </div>
            </section>
        )
    }
}

export default FooterSection;
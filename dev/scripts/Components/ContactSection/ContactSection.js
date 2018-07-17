import React from 'react';
import Menu from '../menus/menu';

class ContactSection extends React.Component {

    render() {
        return (
            <section className = "contact-section">
                <div className = "wrapper">
                    <Menu data = {this.props.data} />
                </div>
            </section>
        )
    }
}

export default ContactSection;
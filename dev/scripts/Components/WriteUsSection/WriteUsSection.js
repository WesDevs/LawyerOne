import React from 'react';
import Form from '../Forms/Form'

class WriteUsSection extends React.Component {

    render() {
        return (
            <section className = "writeus-section">
                <div className = "wrapper">
                    <h1>{this.props.data.title}</h1>
                    <h3>{this.props.data.subheading}</h3>      
                    <Form 
                    fullName = {this.props.data.fullName} 
                    email = {this.props.data.email}
                    phone = {this.props.data.phone}
                    text = {this.props.data.text}
                    subject = {this.props.data.subject}
                    />
                </div>
            </section>
        )
    }
}

export default WriteUsSection;
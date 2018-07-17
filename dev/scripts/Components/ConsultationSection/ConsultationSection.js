import React from 'react';
import Form from '../Forms/Form'

class ConsultationSection extends React.Component {

    render() {
        return (
            <section className = "consultation-section">
                <div className = "wrapper">
                    <h1><span>Get </span>Free Consultation!</h1>
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

export default ConsultationSection;
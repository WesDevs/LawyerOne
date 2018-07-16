import React from 'react';
import ConsultationForm from '../Forms/ConsultationForm'

class ConsultationSection extends React.Component {

    render() {
        return (
            <section className = "consultation-section">
                <ConsultationForm />
            </section>
        )
    }
}

export default ConsultationSection;
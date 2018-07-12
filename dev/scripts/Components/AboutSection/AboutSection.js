import React from 'react';
import WhyUs from './WhyUs';
// import Services from './Services';
// import Advantages from './Advantages';



class AboutSection extends React.Component {

    render() {
        return (
            <section className = "about-section">
                <div className = "wrapper">
                    <WhyUs data = {this.props.whyus} onClick = {this.props.onClick}/>
                </div>
            </section>
        )
    }
}

export default AboutSection;
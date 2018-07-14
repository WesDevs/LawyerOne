import React from 'react';
import WhyUs from './WhyUs';
import Services from './Services';
import Advantages from './Advantages';



class AboutSection extends React.Component {

    render() {
        return (
            <section className = "about-section">
                <div className = "wrapper">
                    <WhyUs 
                    data = {this.props.whyus} 
                    onClick = {this.props.onClick}
                    />
                    <Services 
                    data = {this.props.services}
                    />
                    <Advantages 
                    data1 = {this.props.advantages.headings} 
                    data2 = {this.props.advantages.content}
                    onClick = {this.props.advantagesOnClick}
                    />
                </div>
            </section>
        )
    }
}

export default AboutSection;
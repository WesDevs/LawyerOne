import React from 'react';
import Menu from '../menus/menu';

class LawSection extends React.Component {


    render() {
        return (
            <section className = "laws-section">
                <div className = "wrapper">
                    <Menu data = {this.props.data} />
                </div>
            </section>
        )
    }
}

export default LawSection;
import React from 'react';
import Menu from '../menus/menu';

class ProcessSection extends React.Component {

    render() {
        return (
            <section className = "process-section">
                <Menu data = {this.props.data}/>
            </section>
        )
    }
}

export default ProcessSection;
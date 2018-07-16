import React from 'react';
import Menu from '../menus/menu';

class AttorneysSection extends React.Component {

    render() {
        return (
            <section className = "attorneys-section">
            <div className = "wrapper">
                <h1>{this.props.data.title}</h1>
                <h3>{this.props.data.h3}</h3>
                <Menu data = {this.props.data}/>
            </div>
            </section>
        )
    }
}

export default AttorneysSection;
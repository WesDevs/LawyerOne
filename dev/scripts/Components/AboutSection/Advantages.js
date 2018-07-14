import React from 'react';
import Menu from '../menus/menu';

class Advantages extends React.Component {

    render() {
        return (
            <div className = "advantages-section">
                <h1>Advantages</h1>
                <div className = "advantages-content">
                    <Menu data = {this.props.data1}/>
                    <Menu data = {this.props.data2}/>
                </div>
            </div>
        )
    }
}

export default Advantages;
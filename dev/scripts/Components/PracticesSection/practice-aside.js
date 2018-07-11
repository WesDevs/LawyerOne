import React from 'react';
import Menu from '../menus/menu';
class PracticeAside extends React.Component {

    render() {
        return (
            <div className="practice-aside">
                <h3>Practices</h3>
                <Menu data = {this.props.data}/>
            </div>
        )
    }
}

export default PracticeAside;
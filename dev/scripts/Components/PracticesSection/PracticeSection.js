import React from 'react';
import Menu from '../menus/menu';
import PracticeAside from './practice-aside';

class PracticeSection extends React.Component {

    render() {
        return (
            <section className = "practice-section">
                <div className = "wrapper">
                    <PracticeAside data = {this.props.aside} />
                    <div className = "practice-main">
                        <img src="public/assets/ipad.png" alt="Image of Ipad"/>
                        <h4>Consectetur adipisicing elit. Quo, obcaecati voluptatum porro optio dicta quasi assumenda illum labore sequi impedit eius, tenetur minus neque aliquid placeat nam deserunt accusamus veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem forum make 'em or break 'em.</h4>
                        <Menu data = {this.props.main} />
                    </div>
                </div>

            </section>
        )
    }
}

export default PracticeSection;
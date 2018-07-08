import React from 'react';
import MenuItem from '../menus/menu-items';

class LawSection extends React.Component {


    render() {
        return (
            <section className = "laws-section">
                <ul className = "wrapper">
                    {
                        this.props.laws.map((laws) => {
                            return < MenuItem
                                h3 = {laws.h3}
                                p = {laws.p}
                                icon = {laws.icon}
                            />
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default LawSection;
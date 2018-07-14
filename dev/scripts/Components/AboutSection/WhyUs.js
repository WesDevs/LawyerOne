import React from 'react';

class WhyUs extends React.Component {

    render() {
        return (
            < div className = "whyus-section" >
                <h1>Why Us</h1>
                <ul>

                    {
                        this.props.data.map((items, i) => {
                            return <li key={i} >
                                <div className = 'secondary-title'>
                                    <h6>{items.title}</h6>
                                    <button id = {items.buttonId} className = "whyus-buttons" onClick = {this.props.onClick} data-key = {i}>{items.button}</button>
                                </div>
                                <div id = {items.textId} className = {items.appear} >
                                    <img src={items.img} alt=""/>
                                    <p>{items.text}</p>
                                </div>
                            </li>
                        })    
                    }

                </ul>
            </div>
        )
    }
}

export default WhyUs;
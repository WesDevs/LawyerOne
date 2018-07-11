import React from 'react';

class WhyUs extends React.Component {

    render() {
        console.log(this.props.data)
        return (
            <div className = "whyus">
                <h1>Why Us</h1>
                <ul>

                    {
                        this.props.data.map((items, i) => {
                            return <li key={i}>
                                <div>
                                    <h6>{items.title}</h6>
                                    <button>{items.button}</button>
                                </div>
                                <div>
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
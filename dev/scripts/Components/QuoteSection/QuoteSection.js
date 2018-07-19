import React from 'react';

const QuoteSection = (props) => {
    return ( 
        <section className= "quote-section">
            < div className= "wrapper ">
                <h1>{props.data.h1a}<span>{props.data.span}</span> {props.data.h1b}</h1>
                <p>{props.data.p1}</p>
                <p>{props.data.p2}</p>
            </div>
        </section>
    )
}

export default QuoteSection;
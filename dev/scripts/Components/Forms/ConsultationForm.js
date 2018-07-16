import React from 'react';

class ConsultationForm extends React.Component {

    render() {
        return (
            <form action="#">
                <label htmlFor="searchInput" className="visuallyhidden"></label>
                <input type="text" id="searchInput" placeholder="search"/>
                <label htmlFor="searchButton" className="visuallyhidden"></label>
                <button id="searchButton"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

export default ConsultationForm;
import React from 'react';

class SearchForm extends React.Component {

    render() {
        console.log(this.props);
        return (
            <form action="#">
                <label htmlFor="searchInput" className="visuallyhidden"></label>
                <input type="text" id="searchInput" placeholder="search"/>
                <label htmlFor="searchButton" className="visuallyhidden"></label>
                <button id="searchButton"><i class="fas fa-search"></i></button>
            </form>
        )
    }
}

export default SearchForm;
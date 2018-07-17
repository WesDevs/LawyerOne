import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form action="#">
                <div className="inputs">
                {
                    this.props.fullName ?                 
                    <div>
                        <label htmlFor="fullNameInput" className="visuallyhidden"></label>
                        <input type="text" id="fullNameInput" placeholder="Full Name" required/>
                    </div> : ''
                }
                {
                    this.props.email ? 
                    <div>
                        <label htmlFor="emailInput" className="visuallyhidden"></label>
                        <input type="email" id="emailInput" placeholder = "Email" required/>
                    </div> : ''
                }
                {
                    this.props.phone ? 
                    <div>
                        <label htmlFor="phoneInput" className="visuallyhidden"></label>
                        <input type="tel" id="phoneInput" placeholder ="Phone Number" required/>
                    </div> : ''
                }
                {
                    this.props.subject ? 
                    <div>
                        <label htmlFor="subjectInput" className="visuallyhidden"></label>
                        <input type="text" id="subjectInput" required/>
                    </div> : ''
                }
                {
                    this.props.text ? 
                    <div>
                        <label htmlFor="textInput" className="visuallyhidden"></label>
                        <textarea id="textInput" placeholder ="Message...."></textarea>
                    </div> : ''
                }
            </div>
            <label htmlFor="submit" className="visuallyhidden"></label>
            <input type="submit" value = "Submit"/>
            </form>
        )
    }
}

export default Form;
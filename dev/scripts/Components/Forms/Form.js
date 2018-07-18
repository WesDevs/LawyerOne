import React from 'react';

const Form = (props) => {
        return (
            <form action="#">
                <div className="inputs">
                {
                    props.formData.fullName ?                 
                    <div>
                        <label htmlFor="fullNameInput" className="visuallyhidden"></label>
                        <input type="text" id="fullNameInput" placeholder="Full Name" required/>
                    </div> : ''
                }
                {
                    props.formData.email ? 
                    <div>
                        <label htmlFor="emailInput" className="visuallyhidden"></label>
                        <input type="email" id="emailInput" placeholder = "Email" required/>
                    </div> : ''
                }
                {
                    props.formData.phone ? 
                    <div>
                        <label htmlFor="phoneInput" className="visuallyhidden"></label>
                        <input type="tel" id="phoneInput" placeholder ="Phone Number" required/>
                    </div> : ''
                }
                {
                    props.formData.subject ? 
                    <div>
                        <label htmlFor="subjectInput" className="visuallyhidden"></label>
                        <input type="text" id="subjectInput" required placeholder = "Subject"/>
                    </div> : ''
                }
                {
                    props.formData.text ? 
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
    

export default Form;
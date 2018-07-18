import React from 'react';
import Menu from '../menus/menu';
import Form from '../Forms/Form';

class Section extends React.Component {

    render() {
        return (
            <section className = {this.props.data.sectionClass}>
                <div className = "wrapper">
                    {
                        this.props.data.h1 ? <h1><span>{this.props.data.span}</span>{this.props.data.h1}</h1> : ''
                    }
                    {
                        this.props.data.h3 ? <h3>{this.props.data.h3}</h3> : ''
                    }
                    {
                        this.props.data.p ? <p>{this.props.data.p}</p> : ''
                    }
                    {
                        this.props.data.data ? <Menu data = {this.props.data} /> : ''
                    }
                    {
                        this.props.data.form ? <Form formData = {this.props.data.form}/> : ''
                    }
                </div>
            </section>
        )
    }
}

export default Section;
import React from 'react';
import Menu from '../menus/menu';

class ImageGallery extends React.Component {

    render() {
        return (
            <section className = 'image-gallery'> 
                <Menu data = {this.props.data}/>
            </section>
        )
    }
}

export default ImageGallery;
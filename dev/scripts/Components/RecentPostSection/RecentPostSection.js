import React from 'react';
import Posts from './Posts'
import Menu from '../menus/menu'

class RecentPostSection extends React.Component {

    render() {
        console.log(this.props)
        return (
            <section className = "recent-post-section">
                <div className = "wrapper">
                    <h1>Recent Posts</h1>
                    <div className = "button-container">
                        <button id = "leftButton" className = "button left">&lt;</button>
                        <button id = "rightButton" className = "button right">&gt;</button>
                    </div>
                    <ul className = "posts-list">
                        {
                            this.props.data.map((post, i) => {
                                return <Posts
                                    src = {post.src}
                                    date = {post.date}
                                    name = {post.name}
                                    title = {post.title}
                                    key = {i}
                                    postSrc = {post.postSrc}
                                    likes = {post.likes}
                                    url = {post.url}
                                />
                            })
                        }
                    </ul>
                    <a href = "#" className ="blog-link">Blog Page</a>

                    <Menu data = {this.props.sponsorList}/>

                </div>
           </section>
        )
    }
}

export default RecentPostSection;
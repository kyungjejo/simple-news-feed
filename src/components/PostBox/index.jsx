import React from 'react';
import './index.css';
import LikeButton from '../LikeButton';

class PostBox extends React.Component {
    render() {
        const { index, username, post } = this.props;
        return (
            <div class="post-container">
                <div class="post">
                    <p>Post #{index}</p>
                    <p>Username: {username}</p>
                    <p>Post: {post}</p>
                    <LikeButton />
                </div>
            </div>
        )
    }
}

export default PostBox;
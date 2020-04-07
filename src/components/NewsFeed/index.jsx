import React from 'react';
import PostBox from '../PostBox'

class NewsFeed extends React.Component {
    render() {
        const { usernames, posts } = this.props;
        return (
            usernames.map((val, idx) => {
                return <PostBox index={idx+1} username={usernames[idx]} post={posts[idx]} />
            })
        )
    }
}

export default NewsFeed;
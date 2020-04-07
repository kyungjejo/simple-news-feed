import React from 'react';
import logo from './logo.svg';
import './App.css';

import InputBox from './components/InputBox';
import NewsFeed from './components/NewsFeed';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      usernames: [],
      posts: [],
    }
    this.onPostSubmit = this.onPostSubmit.bind(this);
  }

  onPostSubmit(username, post) {
    console.log(username, post);
    this.setState(prevState => ({
      usernames: [...prevState.usernames, username],
      posts: [...prevState.posts, post],
    }))
  }

  render() {
    const { usernames, posts } = this.state;

    return (
      <div className="App">
        Hello, world!
        {/* 1. Implement InputBox */}
        {/* 2. Implement PostBox */}
        {/* 3. Implement LikeButton */}
        {/* 4. Implement NewsFeed */}
        <InputBox onPostSubmit={this.onPostSubmit}/>
        <NewsFeed usernames={usernames} posts={posts}/>
      </div>
    );
  }
}

export default App;

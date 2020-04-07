import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
          }))
    }

    render() {
        const { count } = this.state;
        return (
            <button onClick={this.updateCount}>
                {
                    count === 0 ? "LIKE" :
                    `LIKED ${count} times`
                }
            </button>
        )
    }
}

export default LikeButton;
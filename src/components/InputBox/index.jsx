import React from 'react';
import './index.css';

function InputBox(props){

    function onSubmit() {
        const { onPostSubmit } = props;
        const username = document.getElementById('username').value;
        const post = document.getElementById('post').value;
        // console.log(username, post);

        onPostSubmit(username, post);
    }

    return (
        <div id="input-box-container">
            <div id="input-box">
                <p>Username: <input id='username'/></p>
                <p>Post: <textarea id='post'/></p>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

// class InputBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     onSubmit() {
//         const { onPostSubmit } = this.props;
//         const username = document.getElementById('username').value;
//         const post = document.getElementById('post').value;
//         // console.log(username, post);

//         onPostSubmit(username, post);
//     }

//     render() {
//         return (
//             <div id="input-box-container">
//                 <div id="input-box">
//                     <p>Username: <input id='username'/></p>
//                     <p>Post: <textarea id='post'/></p>
//                     <button onClick={this.onSubmit}>Submit</button>
//                 </div>
//             </div>
//         )
//     }
// }

export default InputBox;
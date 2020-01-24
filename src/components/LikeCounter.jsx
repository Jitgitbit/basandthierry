import React from "react";

export default class LikeCounter extends React.Component {
  state = {
    numLikes: 0
  };
  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>Like this quote</button>
        <p>This post has <b>{ this.state.numLikes }</b> likes!</p>
      </div>
    );
  }
};
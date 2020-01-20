import React, { Component } from "react";

export default class RandomQuote extends Component {
  render() {
    return (
      <div className="randomQuote">
        <img className="images" src={this.props.src} />
      </div>
    )
  }
};
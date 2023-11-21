import React, { Component } from "react";

export default class Card extends Component {
  // this.props : object chứa data truyềnt từ component cha
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Card</h2>
        <p>{this.props.title}</p>
        <h1 className="text-danger">{this.props.name}</h1>
        <button onClick={this.props.handleClick} className="btn btn-success">
          Change name
        </button>
      </div>
    );
  }
}

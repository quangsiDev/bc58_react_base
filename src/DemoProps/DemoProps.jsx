import React, { Component } from "react";
import Card from "./Card";

export default class DemoProps extends Component {
  state = {
    user: "alice",
  };
  handleChangeName = () => {
    // toggle
    let value = this.state.user == "tommy" ? "alice" : "tommy";
    this.setState({ user: value });
  };
  render() {
    return (
      <div>
        <h2>DemoProps</h2>
        <Card handleClick={this.handleChangeName} name={this.state.user} title="Profile user" />
      </div>
    );
  }
}

// slice buổi 32

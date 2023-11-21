import React, { Component } from "react";

export default class Ex_Car extends Component {
  state = {
    color: "red",
  };
  render() {
    return (
      <div>
        <img
          src={`./imgEx/CarBasic/products/${this.state.color}-car.jpg`}
          alt=""
          className="w-25"
        />

        <div>
          <button className="btn btn-danger">Red</button>
          <button className="btn btn-dark">Black</button>
          <button className="btn btn-secondary">Silver </button>
        </div>
      </div>
    );
  }
}

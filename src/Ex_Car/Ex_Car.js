import React, { Component } from "react";

export default class Ex_Car extends Component {
  state = {
    color: "red",
  };
  handleChangeColor = (value) => {
    this.setState({ color: value });
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
          <button
            onClick={() => {
              this.handleChangeColor("red");
            }}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.handleChangeColor("black");
            }}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={() => {
              this.handleChangeColor("silver");
            }}
            className="btn btn-secondary"
          >
            Silver{" "}
          </button>
        </div>
      </div>
    );
  }
}

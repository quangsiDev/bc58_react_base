import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
  };
  // hàm ko tham số
  handleTang = () => {
    // this.state.soLuong++; //error
    // update data trong state => 1 cách duy  nhất => dùng setState
    this.setState({ soLuong: this.state.soLuong + 1 });
  };
  // hàm có tham số => bọc thêm bằng arrow function
  handleGiam = (soLuong) => {
    this.setState({ soLuong: this.state.soLuong - soLuong });
  };
  render() {
    return (
      <div>
        <h4>DemoState</h4>
        <button
          onClick={() => {
            this.handleGiam(10);
          }}
          className="btn btn-dark"
        >
          -
        </button>
        <strong> {this.state.soLuong} </strong>
        <button onClick={this.handleTang} className="btn btn-danger">
          +
        </button>
      </div>
    );
  }
}

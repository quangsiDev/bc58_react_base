import React, { Component } from "react";

export default class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-4">
        <img className="w-100" src={this.props.data.hinhAnh} alt="" />
        <h4>{this.props.data.tenSP}</h4>
        <button className="btn btn-primary">Xem</button>
      </div>
    );
  }
}

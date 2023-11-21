import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div className="row">
        <img src={this.props.detail.hinhAnh} alt="" className="col-2" />
        <h2 className="col-10">{this.props.detail.tenSP}</h2>
      </div>
    );
  }
}

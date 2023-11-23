import React, { Component } from "react";
import Item from "./Item";
export default class List extends Component {
  renderListPhone = () => {
    return this.props.listPhone.map((item) => {
      return <Item handleClick={this.props.handleViewDetail} data={item} />;
    });
  };
  render() {
    // map
    return <div className="row container mx-auto">{this.renderListPhone()}</div>;
  }
}
// ex chuyền cho list, list nhận,list truyền cho item, item nhận và gắn vào onclick

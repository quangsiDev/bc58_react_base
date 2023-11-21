import React, { Component } from "react";
import Item from "./Item";
export default class List extends Component {
  renderListPhone = () => {
    return this.props.listPhone.map((item) => {
      return <Item data={item} />;
    });
  };
  render() {
    // map
    return <div className="row container mx-auto">{this.renderListPhone()}</div>;
  }
}

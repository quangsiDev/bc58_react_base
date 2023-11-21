import React, { Component } from "react";
import List from "./List";
import Detail from "./Detail";
import { phoneArr } from "./data";

export default class Ex_Phone extends Component {
  state = {
    listPhone: phoneArr,
    detail: phoneArr[0],
  };
  // state ở đâu viết setState tại đó
  // viết function thay đổi detail khi user click button Xem => hàm có tham số
  render() {
    return (
      <div>
        <List listPhone={this.state.listPhone} />
        <Detail detail={this.state.detail} />
      </div>
    );
  }
}

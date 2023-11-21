import React, { Component } from "react";
import { movieArr } from "./data";
import "./style.css";
export default class RenderWithMap extends Component {
  renderMovieList = () => {
    return movieArr.map((item) => {
      return (
        <div className="col-3 p-3 item">
          {/*  style nhận object */}
          <img src={item.hinhAnh} className="w-100" alt="" />
          <h1 style={{ backgroundColor: "black", color: "white", textAlign: "left" }}>
            {item.tenPhim}
          </h1>
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderMovieList()}</div>;
  }
}
// array map js

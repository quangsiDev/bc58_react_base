import React, { Component } from "react";
import Header from "./Header";
import Navigate from "./Navigate";
import Content from "./Content";
import Footer from "./Footer";

export default class Ex_Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-6">
            <Navigate />
          </div>
          <div className="col-6">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// rcc

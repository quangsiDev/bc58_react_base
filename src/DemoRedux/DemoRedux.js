import React, { Component } from "react";
import { connect } from "react-redux";
class DemoRedux extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleGiam} className="btn btn-danger">
          -
        </button>
        <strong className="display-4">{this.props.number}</strong>
        <button onClick={this.props.handleTang} className="btn btn-success">
          +
        </button>
      </div>
    );
  }
}
// lấy về
let mapStateToProps = (state) => {
  return {
    number: state.soLuong,
  };
};
// đẩy lên
let mapDispatchToProps = (dispatch) => {
  return {
    handleTang: () => {
      let action = {
        type: "TANG",
        payload: 5,
      };
      dispatch(action);
    },
    handleGiam: () => {
      let action = {
        type: "GIAM",
        payload: 1,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);

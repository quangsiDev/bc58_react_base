import React, { Component } from "react";
import { connect } from "react-redux";
import { LUA_CHON } from "./redux/contant";

class XucXac extends Component {
  render() {
    return (
      <div className=" d-flex align-items-center justify-content-between container">
        <button className="btn btn-dark p-5">Tài</button>
        <div>
          {this.props.mangXucXac.map((item, index) => {
            return <img key={index} src={item.img} alt="" />;
          })}
        </div>
        <button className="btn btn-danger p-5">Xỉu</button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    mangXucXac: state.mangXucXac,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleLuaChon: (luaChon) => {
      let action = {
        type: LUA_CHON,
        payload: luaChon,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);

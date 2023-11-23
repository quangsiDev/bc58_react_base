import React, { Component } from "react";
import { shoeArr } from "./data";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";

export default class Ex_Shoe_Redux extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
  };
  //   viết function thêm sp vào giỏ hàng (cart )

  handleAddToCart = (shoe) => {
    // 2 trường hợp : sp đã có trong giỏi hàng , sp chưa có trong giỏ hàng
    // kiểm tra sp đã có trong giỏ hàng hay chưa => findIndex : trả về vị trí nếu tìm thấy, nếu ko tìm thấy thì trả về -1
    let cloneCart = [...this.state.cart]; //copy
    let index = cloneCart.findIndex((item) => item.id == shoe.id); // tìm vị trí của shoe nằm trong cloneCart
    if (index == -1) {
      // th1: sp chưa có trong giỏi hàng
      //   tạo object mới có thêm key soLuong:1
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      // th2 : sp đã có trong giỏ hàng => update trường số lượng
      cloneCart[index].soLuong++;
    }

    this.setState({ cart: cloneCart });
  };
  handleDelete = (id) => {
    // filter : lọc sp

    let newCart = this.state.cart.filter((item) => item.id != id);
    this.setState({ cart: newCart });
  };

  render() {
    return (
      <div className="row">
        <CartShoe handleDelete={this.handleDelete} cart={this.state.cart} />
        <ListShoe />
      </div>
    );
  }
}

let a = 2;

let b = a;
let c = b;

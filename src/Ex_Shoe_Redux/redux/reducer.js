import { shoeArr } from "../data";

const initialState = {
  shoeArr: shoeArr,
  cart: [],
};

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD": {
      let cloneCart = [...state.cart];
      cloneCart.push(payload);
      state.cart = cloneCart;
      return { ...state };
    }
    default:
      return state;
  }
};

// rxreducer

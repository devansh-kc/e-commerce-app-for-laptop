import { createSlice } from "@reduxjs/toolkit";
const initalState = {
  cart: [],
};

export const cartSlice = {
  name: "Cart",
  initalState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({...action.payload,quantity :1})
    },
    removeToCart: () => {},
    increaseQuantity: {},
    decreaseQuantity: {},
  },
};

export const { addToCart, removeToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducers;

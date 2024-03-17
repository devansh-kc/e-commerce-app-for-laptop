import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },

    removeToCart: (state, action) => {
      return state.filter((item) => action.payload !== item.id);
    },
    increaseQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decreaseQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeToCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;

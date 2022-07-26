import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    clearProducts: (state, action) => {
      let index = state.products.indexOf(action.payload);
      state.quantity -= action.payload
      state.products.splice()
      state.products = [...state.products]
  },
    clearCart: (state) => {
      return { ...state, products:[],quantity:0,total:0}
    },
  },
});

export const { addProduct,clearProducts, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  products: [
    {
      id: "123",
      name: "Macbook",
      price: 1000,
      color: "red",
    },
    {
      id: "124",
      name: "Macbook Pro",
      price: 1500,
      color: "black",
    },
  ],
  taxPercent: 10,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(cartStore, { payload }) {
      cartStore.products.push(payload.product);
    },
    deleteProduct(cartStore, { payload }) {
      // ...
    },
    changeAmountProduct(cartStore, { payload }) {
      // ...
    },
  },
});

export const { addProduct, deleteProduct, changeAmountProduct } = slice.actions;

export default slice.reducer;

// selectors
export const getProducts = (store) => store.cart.products;
export const getTaxPercent = (store) => store.cart.taxPercent * 0.01;

export const getSubTotal = createSelector(getProducts, (products) =>
  products.reduce((subtotal, product) => subtotal + product.price, 0)
);

export const getTotal = createSelector(
  getSubTotal,
  getTaxPercent,
  (subtotal, percent) => subtotal * (1 + percent)
);

/**
 * store = {
 *   auth: {},
     entities: {
       cart: {}
       product: {},
    },
     ui: {modal1: true,isLoading: true}
 * }
 */

/**
      * store = {
      *    auth: {}
      *    cart: {}
           product: {},
      * }
      *
      */

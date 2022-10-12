import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    123: {
      id: "123",
      name: "Macbook",
      price: 1000,
      color: "red",
      isLiked: false,
    },
    124: {
      id: "124",
      name: "Macbook Pro",
      price: 1500,
      color: "black",
      isLiked: false,
    },
  },
  allIds: ["123", "124"],
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(productStore, { payload }) {
      productStore.products.push(payload.product);
    },
    deleteProduct(productStore, { payload }) {
      // ...
    },
    changePriceProduct(productStore, { payload }) {
      // ...
    },
  },
});

export const { addProduct, deleteProduct, changeAmountProduct } = slice.actions;

export default slice.reducer;

/**
 * store = {
 *   auth: {},
 *   cart: {}
 *   product: {},
 * }
 */

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  accessToken: "",
};
// reducer && actions && actionTypes
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(authStore, { payload }) {
      authStore.firstName = payload.firstName; // arslonbek
      authStore.lastName = payload.lastName;
      authStore.email = payload.email;
      authStore.phone = payload.phone;
      authStore.accessToken = payload.accessToken;
    },
    logout(authStore) {
      authStore.firstName = "";
      authStore.lastName = "";
      authStore.email = "";
      authStore.phone = "";
      authStore.accessToken = "";
    },
    changeToken() {},
    changeData() {},
  },
});

export const { login, logout, changeData, changeToken } = slice.actions;

export default slice.reducer;

// selectors

export const getAccessToken = (store) => store.auth.accessToken;
/**
 * store = {
 *   auth: {},
 *   product: {},
 *   cart: {}
 * }
 */

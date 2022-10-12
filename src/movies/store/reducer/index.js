import { combineReducers } from "@reduxjs/toolkit";
import product from "./product";
import auth from "./auth";
import cart from "./cart";

export default combineReducers({ auth, product, cart });

export * from "./product";
export * from "./auth";
export * from "./cart";

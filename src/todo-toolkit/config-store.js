import reducer from "./todo";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer });

export default store;

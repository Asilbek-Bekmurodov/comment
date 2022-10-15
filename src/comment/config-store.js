import reducer from "./comment";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer });

export default store;

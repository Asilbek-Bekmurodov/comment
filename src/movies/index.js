import store, { login, logout, getTotal, getSubTotal } from "./store";
const subtotal = getSubTotal(store.getState());
const total = getTotal(store.getState());

console.log("subtotal = ", subtotal);
console.log("total = ", total);

import store from "./config-store";
import { addAmount, decrement, increment } from "./counter";

// DOM ELEMENTS
const counter = document.getElementById("counter");
const textbox = document.getElementById("textbox");
const incrementBtn = document.getElementById("increment_btn");
const decrementBtn = document.getElementById("decrement_btn");
const asyncBtn = document.getElementById("async_btn");
const amountBtn = document.getElementById("amount_btn");
const oddBtn = document.getElementById("odd_btn");

incrementBtn.onclick = () => store.dispatch(increment()); // 
decrementBtn.onclick = () => store.dispatch(decrement());
amountBtn.onclick = () => store.dispatch(addAmount(+textbox.value));
asyncBtn.onclick = () =>
  setTimeout(() => store.dispatch(addAmount(+textbox.value)), 1000);

oddBtn.onclick = () => {
  const { count } = store.getState();
  if (count % 2 === 1) store.dispatch(addAmount(+textbox.value));
};

store.subscribe(() => (counter.innerText = store.getState().count)); // dom

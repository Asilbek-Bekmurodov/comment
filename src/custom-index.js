import { generate } from "shortid";

import { createStore } from "redux";
import reducer from "./reducer";
import { addTodo, toggleTodo } from "./actions";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

store.subscribe(() => {
  console.log("sub-1 = ", store.getState());
});

const data = { id: generate(), description: "todo-1" };
store.dispatch(addTodo(data));
store.dispatch(toggleTodo({ id: data.id }));

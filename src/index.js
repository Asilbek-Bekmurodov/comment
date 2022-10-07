import { generate } from "shortid";
import store from "./store";

const todoForm = document.getElementById("todo_form");
const todoInput = document.getElementById("todo_input");
const todosElm = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = todoInput.value;
  store.dispatch({ type: "addTodo", payload: { description, id: generate() } });
  renderTodo();
  todoInput.value = "";
});

function renderTodo() {
  const { todos } = store.getState();

  const todo = todos[todos.length - 1];

  const li = document.createElement("li");
  li.innerText = todo.description;

  const deleteBtn = createBtn("Delete", () => {
    store.dispatch({ type: "deleteTodo", payload: todo.id });
    li.remove();
  });

  const toggleBtn = createBtn("Toggle", () => {
    console.log(`todo = ${todo.id}`);
  });

  li.append(deleteBtn, toggleBtn);
  todosElm.appendChild(li);
}

function createBtn(text, callback) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.addEventListener("click", callback);
  return btn;
}

import store from "./store";
import { addTodo, editTodo, deleteTodo, toggleTodo } from "./todo";
import { generate } from "shortid";

const todoForm = document.getElementById("todo_form");
const todoInput = document.getElementById("todo_input");
const todosElm = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = todoInput.value;
  store.dispatch(addTodo({ description, id: generate() }));
  renderTodo();
  todoInput.value = "";
});

function renderTodo() {
  const { todos } = store.getState();

  const todo = todos[todos.length - 1];

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo.description;

  const deleteBtn = createBtn("Delete", () => {
    store.dispatch(deleteTodo({ id: todo.id }));
    li.remove();
  });

  const editBtn = createBtn("Edit", () => {
    if (editBtn.innerText === "Edit") {
      span.contentEditable = true;
      editBtn.innerText = "Done";
    } else {
      span.contentEditable = false;
      editBtn.innerText = "Edit";
      store.dispatch(editTodo({ description: span.innerText, id: todo.id }));
    }
  });

  const toggleBtn = createBtn("Toggle", () => {
    store.dispatch(toggleTodo({ id: todo.id }));
    editBtn.disabled = todo.isCompleted;
    span.style.setProperty(
      "text-decoration",
      todo.isCompleted ? "line-through" : "none"
    );
  });

  li.append(span, deleteBtn, editBtn, toggleBtn);
  todosElm.appendChild(li);
}

function createBtn(text, callback) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.addEventListener("click", callback);
  return btn;
}

store.subscribe(() => {
  console.log("store = ", store.getState());
});

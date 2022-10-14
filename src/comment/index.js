import store from "./config-store";
import { addTodo } from "./todo";
import { generate } from "shortid";

const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentBox = document.getElementById("comments_box");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const comment = commentInput.value;
  commentInput.value = "";

  store.dispatch(addTodo({ comment, id: generate() }));
  renderComment();
});

function renderComment() {
  const { todos } = store.getState();

  const todo = todos[todos.length - 1];

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo.description;

  li.append(span, deleteBtn, editBtn, toggleBtn);
  todosElm.appendChild(li);
}

store.subscribe(() => {
  console.log("store = ", store.getState());
});

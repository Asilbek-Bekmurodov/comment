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

  commentBox.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="comment">
    <div class="comment-top">
      <img src=${"../src/assets/profile.png"} alt="" />
      <h3 class="name">Maude Hall</h3>
      <div class="date">14 min</div>
    </div>
    <p class="text">
      ${todo.comment}
    </p>
    <div class="comment-footer">
      <div class="wrapper">
        <span>2 Likes</span>
        <span> Reply</span>
      </div>
      <i class="fa-regular fa-thumbs-up"></i>
    </div>
    <div class="comment-wrapper"></div>
</div>`
  );
}

store.subscribe(() => {
  console.log("store = ", store.getState());
});

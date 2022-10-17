import store from "./config-store";
import { addComment } from "./comment";
import { generate } from "shortid";
import { Like } from "../assets/like";
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentBox = document.getElementById("comments_box");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  commentBox.scrollTop = 0;

  const comment = commentInput.value;
  commentInput.value = "";

  store.dispatch(addComment({ comment, id: generate() }));
  renderComment();
});//toggle activity bar

function renderComment() {
  const { comments } = store.getState();


  const oneComment = comments[comments.length - 1];

  commentBox.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="comment">
    <div class="comment-top">
      <img class="profile-img" src="https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
      <h3 class="name">Maude Hall</h3>
      <div class="date">14 min</div>
    </div>
    <p class="text">
      ${oneComment.comment}
    </p>
    <div class="comment-footer">
      <div class="wrapper">
        <span>2 Likes</span>
        <span>Reply</span>
      </div>
    
        
      
    </div>
    <div class="comment-wrapper"></div>
</div>`
  );
}

store.subscribe(() => {
  console.log("store = ", store.getState());
});

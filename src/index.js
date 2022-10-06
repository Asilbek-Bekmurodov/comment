import store from "./store";

const todoForm = document.getElementById("todo_form");
const todoInput = document.getElementById("todo_input");
const todosElm = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = todoInput.value;
  store.dispatch({ type: "addTodo", payload: { description, id: 1 } });
});

const unsubscribe = store.subscribe(renderTodos);

function renderTodos() {
  const { todos } = store.getState();

  let items = "";

  for (let todo of todos) {
    items += `<li>${todo.description}<button>Delete</button><button>Toggle</button></li>`;
  }

  todosElm.innerHTML = items;
  unsubscribe();
}

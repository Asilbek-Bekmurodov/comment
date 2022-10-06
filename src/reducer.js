const state = {
  todos: [{ id: "1", description: "todo desc", isCompleted: false }],
};
import { generate } from "shortid";

export default function reducer(state, action) {
  switch (action.type) {
    case "addTodo": {
      const todo = {
        id: action.payload.id,
        description: action.payload.description,
        isCompleted: false,
      };
      const todos = state ? [...state.todos, todo] : [todo];
      return { todos };
    }

    case "deleteTodo": {
      const todos = [...state.todos];
      const deleteIdx = todos.findIndex((todo) => todo.id === action.payload); // {type: "deleteTodo", payload: 0}
      todos.splice(deleteIdx, 1);
      return { todos };
    }
    case "toggleTodo":
      break;
    default:
      return state;
  }
}

import { generate } from "shortid";
import * as actionsTypes from "./action-types";

export default function reducer(state = { todos: [] }, { payload = {}, type }) {
  switch (type) {
    case actionsTypes.ADD_TODO: {
      const todo = {
        id: payload.id,
        description: payload.description,
        isCompleted: false,
      };
      const todos = state ? [...state.todos, todo] : [todo];
      return { todos };
    }

    case actionsTypes.DELETE_TODO: {
      const todos = [...state.todos];
      const deleteIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos.splice(deleteIdx, 1);
      return { todos };
    }

    case actionsTypes.TOGGLE_TODO: {
      const todos = [...state.todos];
      const toggleIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos[toggleIdx].isCompleted = !todos[toggleIdx].isCompleted;
      return { todos };
    }

    case actionsTypes.EDIT_TODO: {
      const todos = [...state.todos];
      const editIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos[editIdx].description = payload.description;
      return { todos };
    }

    default:
      return state;
  }
}

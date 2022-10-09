import { generate } from "shortid";

// actions types
const ADD_TODO = "todo/add";
const DELETE_TODO = "todo/delete";
const TOGGLE_TODO = "todo/toggle";
const EDIT_TODO = "todo/edit";

// action creators

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
export const editTodo = (payload) => ({ type: EDIT_TODO, payload });
export const toggleTodo = (payload) => ({ type: TOGGLE_TODO, payload });

const initialState = { todos: [] };

// reducer
export default function reducer(state = initialState, { payload = {}, type }) {
  switch (type) {
    case ADD_TODO: {
      const todo = {
        id: payload.id,
        description: payload.description,
        isCompleted: false,
      };
      const todos = state ? [...state.todos, todo] : [todo];
      return { todos };
    }

    case DELETE_TODO: {
      const todos = [...state.todos];
      const deleteIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos.splice(deleteIdx, 1);
      return { todos };
    }

    case TOGGLE_TODO: {
      const todos = [...state.todos];
      const toggleIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos[toggleIdx].isCompleted = !todos[toggleIdx].isCompleted;
      return { todos };
    }

    case EDIT_TODO: {
      const todos = [...state.todos];
      const editIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos[editIdx].description = payload.description;
      return { todos };
    }

    default:
      return state;
  }
}

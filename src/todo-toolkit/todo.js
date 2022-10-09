import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTodo = createAction("addTodo");
export const deleteTodo = createAction("deleteTodo");
export const editTodo = createAction("editTodo");
export const toggleTodo = createAction("toggleTodo");

const initialState = { todos: [] };

export default createReducer(initialState, {
  [addTodo.type]: ({ todos }, { payload }) => {
    todos.push({
      id: payload.id,
      description: payload.description,
      isCompleted: false,
    });
  },
  [deleteTodo.type]: ({ todos }, { payload }) => {
    const deleteIdx = todos.findIndex((todo) => todo.id === payload.id);
    todos.splice(deleteIdx, 1);
  },
  [toggleTodo.type]: ({ todos }, { payload }) => {
    const toggleIdx = todos.findIndex((todo) => todo.id === payload.id);
    todos[toggleIdx].isCompleted = !todos[toggleIdx].isCompleted;
  },
  [editTodo.type]: ({ todos }, { payload }) => {
    const editIdx = todos.findIndex((todo) => todo.id === payload.id);
    todos[editIdx].description = payload.description;
  },
});

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo({ todos }, { payload }) {
      todos.push({
        id: payload.id,
        description: payload.description,
        isCompleted: false,
      });
    },
    deleteTodo({ todos }, { payload }) {
      const deleteIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos.splice(deleteIdx, 1);
    },
    toggleTodo({ todos }, { payload }) {
      const toggleIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos[toggleIdx].isCompleted = !todos[toggleIdx].isCompleted;
    },
    editTodo({ todos }, { payload }) {
      const editIdx = todos.findIndex((todo) => todo.id === payload.id);
      todos[editIdx].description = payload.description;
    },
  },
});

export const { addTodo, editTodo, toggleTodo, deleteTodo } = slice.actions;

export default slice.reducer;

//  add({description: 'todo-1', id:'abc123'}) // { type: 'todo/add', payload: {description: 'todo-1', id:'abc123'} }
/**
 *
 *  const store = {
 *    todos: [{id: 1, description: "test"}, {id: 2, description: "test"}],
 *    products: []
 * }
 */

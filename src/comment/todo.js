import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo({ todos }, { payload }) {
      todos.push({
        id: payload.id,
        comment: payload.comment,
      });
    },
  },
});

export const { addTodo } = slice.actions;

export default slice.reducer;

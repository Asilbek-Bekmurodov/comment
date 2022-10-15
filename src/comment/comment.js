import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "comment",
  initialState: { comments: [] },
  reducers: {
    addComment({ comments }, { payload }) {
      comments.push({
        id: payload.id,
        comment: payload.comment,
      });
    },
  },
});

export const { addComment } = slice.actions;

export default slice.reducer;

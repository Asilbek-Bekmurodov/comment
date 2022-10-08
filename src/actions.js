import * as types from "./action-types";
import { generate } from "shortid";

export const addTodo = (payload) => ({ type: types.ADD_TODO, payload });

export const deleteTodo = (payload) => ({ type: types.DELETE_TODO, payload });

export const editTodo = (payload) => ({ type: types.EDIT_TODO, payload });

export const toggleTodo = (payload) => ({ type: types.TOGGLE_TODO, payload });

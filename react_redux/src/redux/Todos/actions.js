import {
  ADD_TODO,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};

export const addTodoSuccess = () => {
  return {
    type: ADD_TODO_SUCCESS,
  };
};

export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};

export const getTodoSuccess = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
};

export const getTodos = () => (dispatch) => {
  dispatch(getTodoLoading());
  axios
    .get("http://localhost:3001/todos")
    .then(({ data }) => {
      dispatch(getTodoSuccess(data));
    })
    .catch(() => {
      // dispath error
    });
};

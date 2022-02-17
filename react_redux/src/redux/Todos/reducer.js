import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionTypes";

const init = {
  loading: false,
  error: false,
  data: [],
};

export const todoReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...store,
        // ...store.todos,
        loading: true,
      };

    case ADD_TODO_SUCCESS:
      return {
        ...store,
        // ...store.todos,
        loading: false,
      };

    case GET_TODO_LOADING:
      return {
        ...store,
        loading: true,
      };

    case GET_TODO_SUCCESS:
      return {
        ...store,
        loading: false,
        data: payload,
      };

    default:
      return { ...store };
  }
};

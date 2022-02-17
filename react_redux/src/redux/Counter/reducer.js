import { INC_COUNT, DEC_COUNT } from "./actionTypes";

export const counterReducer = (store = { count: 0 }, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return { ...store, count: store.count + payload };
    case DEC_COUNT:
      return { ...store, count: store.count - payload };
    default:
      return store;
  }
};

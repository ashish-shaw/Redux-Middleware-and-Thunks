import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { todoReducer } from "./Todos/reducer";
import { counterReducer } from "./Counter/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("enter action");
  next(action);
  console.log("existing action");
};

const asyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action);
};

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  //
);

const unsub = store.subscribe(() => {});

unsub();
console.log("entire store:", store.getState());

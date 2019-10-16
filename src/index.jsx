import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const reducer = (store = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...store, todos: store.todos.concat(action.todo) };
    default:
      return store;
  }
};

const store = createStore(combineReducers({ reducer }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

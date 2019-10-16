import React from "react";
import { connect } from "react-redux";

const App = ({ todos, addTodo }) => {
  const [value, setValue] = React.useState("");

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
      >
        Add Todo
      </button>

      {todos.map((todo, index) => (
        <h1 key={index}>{todo}</h1>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state:::", state);
  return { todos: state.reducer.todos };
};

const mapDispatchToProps = dispatch => {
  return { addTodo: todo => dispatch({ type: "ADD_TODO", todo: todo }) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

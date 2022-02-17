import "./App.css";
import { Counter } from "./components/Counter";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Todos />
    </div>
  );
}

export default App;

// actionTypes
// actions
// reducer
// store

// useSelector - get Data
// useDipatch - dispatch an action

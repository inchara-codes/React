import { useReducer } from "react";
import "./App.css";

//Reducer function
function reducer(state, action) {

  if (action.type === "increment") {
    return {
      count: state.count + 1
    };
  }

  if (action.type === "decrement") {
    return {
      count: state.count - 1
    };
  }

  if (action.type === "reset") {
    return {
      count: 0
    };
  }

  return state;
}

export default function App() {

  //useReducer
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });

  return (
    <div className="container">

      <h1>Counter App</h1>

      <h2>{state.count}</h2>

      {/* Dispatch actions */}

      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrease
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

    </div>
  );
}
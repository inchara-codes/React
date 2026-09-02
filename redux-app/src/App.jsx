import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, million } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => {console.log(state); return state.counter.value});

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increase
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrease
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

      <button onClick={() => dispatch(million())}>
        Million
      </button>
    </div>
  );
}

export default App;
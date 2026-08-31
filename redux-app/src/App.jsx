import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

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
    </div>
  );
}

export default App;
import { useSelector, useDispatch } from "react-redux";
import { Australia, India, UK, USA, Reset } from "./redux/coversionSlice";

function App() {
  const conversion = useSelector((state) => {console.log(state); return state.conversion.value});

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Currency conversion to Indian rupee: {conversion}</h1>

      <button onClick={() => dispatch(USA())}>
        USA currency
      </button> <br />

      <button onClick={() => dispatch(Australia())}>
        Australia currency
      </button> <br />

      <button onClick={() => dispatch(India())}>
        Indian currency
      </button> <br />

      <button onClick={() => dispatch(UK())}>
        UK currency
      </button> <br />

      <button onClick={() => dispatch(Reset())}>
        Reset
      </button>
    </div>
  );
}

export default App;
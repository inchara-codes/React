import { useRef } from "react";

export default function App() {
  const nameRef = useRef();

  function handleSubmit() {
    console.log(nameRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={nameRef} />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
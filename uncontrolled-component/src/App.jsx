import { useRef } from "react";

export default function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  function handleSubmit() {
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  }

  return (
    <div>
      <label> Name: 
      <input type="text" ref={nameRef} />
      </label> <br />

      <label>  Email: 
      <input type="text" ref={emailRef} />
      </label> <br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
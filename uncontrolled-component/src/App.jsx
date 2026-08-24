// import { useRef } from "react";
// export default function App() {
//   const nameRef = useRef();
//   const emailRef = useRef();

//   function handleSubmit() {
//     console.log(nameRef.current.value);
//     console.log(emailRef.current.value);
//   }

//   return (
//     <div>
//       <label> Name: 
//       <input type="text" ref={nameRef} />
//       </label> <br />

//       <label>  Email: 
//       <input type="text" ref={emailRef} />
//       </label> <br />

//       <button onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

export default function App(){
  const name="Inchara";
  const role="Frontend Developer"

  return(
    <div className="container">
      <h1>{name}</h1>

      <p>{role}</p>

      <button>Follow</button>
    </div>
  )
}
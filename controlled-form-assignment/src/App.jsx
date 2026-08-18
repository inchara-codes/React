import { useState } from "react";

export default function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleReset() {
    setName("");
    setEmail("");
  }
  return (
    <div>
      <h2>Controlled component</h2>
      <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> <br />
    

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button> <br />
        <button type="submit" onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}
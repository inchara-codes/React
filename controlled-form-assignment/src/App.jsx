import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [agree, setAgree] = useState("")
  const [course, setCourse] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Gender:", gender);
    console.log("Agree:", agree);
    console.log("Course:", course);
  }

  function handleReset() {
    setName("");
    setEmail("");
    setGender("");
    setAgree("");
    setCourse("");
  }
  return (
    <div className="container">
      <h2>Controlled component</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> <br />
        </div>

        <div className="form-row">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        </div>

        <div className="form-row">
        <p>Gender: </p>
        <label>
        <input 
        type="radio"
        name="gender"
        value="Male"
        checked={gender==="Male"}
        onChange={(e) => setGender(e.target.value)}
         />
        Male </label> 

        <label>
        <input 
        type="radio"
        name="gender"
        value="Female"
        checked={gender==="Female"}
        onChange={(e) => setGender(e.target.value)}
         />
        Female </label> <br />
        </div>

        <div className="form-row">
        <p>
          <input 
          type="checkbox"
          checked ={agree}
          onChange={(e) => setAgree(e.target.checked)}
           />
           I agree to all terms and conditions.
        </p>
        </div>

        <div className="form-row">
        <p>Course: </p>
        <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}>
        <option value="">Select Course</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="React">React</option>
        <option value="SQL">SQL</option>
        <option value="Angular">Angular</option>
        </select> <br /> <br />
        </div>

        <button type="submit">Submit</button> 
        <button type="submit" onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}
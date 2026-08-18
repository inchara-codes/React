import { useState } from "react";

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
        /><br />


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

        <p>
          <input 
          type="checkbox"
          checked ={agree}
          onChange={(e) => setAgree(e.target.value)}
           />
           I agree to all terms and conditions.
        </p>

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

        <button type="submit">Submit</button> <br />
        <button type="submit" onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}
import { useState } from "react";
// import "./App.css";

export default function StudentForm() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [agree, setAgree] = useState("")
  const [course, setCourse] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("Gender:", gender);
    console.log("Agree:", agree);
    console.log("Course:", course);
  }

//   function handleReset() {
//     setName("");
//     setAge("");
//     setEmail("");
//     setGender("");
//     setAgree("");
//     setCourse("");
//   }
  return (
    <div className="container">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> <br />
        </div>

        <input
        type="number"
        min="18"
        max="100"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        />

        <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        </div>

        <div>
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

        <div>
        <p>
          <input 
          type="checkbox"
          checked ={agree}
          onChange={(e) => setAgree(e.target.checked)}
           />
           I agree to all terms and conditions.
        </p>
        </div>

        <div>
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
        {/* <button type="submit" onClick={handleReset}>Reset</button> */}
      </form>
    </div>
  )
}
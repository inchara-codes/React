import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [agree, setAgree] = useState(false)
  const [course, setCourse] = useState("")

  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    if(validate()){

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Gender:", gender);
    console.log("Agree:", agree);
    console.log("Course:", course);

    
      alert("Form submitted successfully!")
    }
  };
  
  
  const validate = () => {
    let newErrors = {};

    if(name.trim() === ""){
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if(gender.trim() ===""){
      newErrors.gender = "Please select gender"
    }

    if(!agree){
      newErrors.agree = "Agree to the terms and conditions";
    }

    if(course.trim() ===""){
      newErrors.course = "Please select a course"
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleReset() {
    setName("");
    setEmail("");
    setGender("");
    setAgree(false);
    setCourse("");
    setErrors({});
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
        /> 
        {errors.name && <p className="error">{errors.name}</p>}
        <br />
        
        </div>

        <div className="form-row">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <br />
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
         /> Female </label> 
        {errors.gender && <p className="error">{errors.gender}</p>}
        <br />
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
        {errors.agree && <p className="error">{errors.agree}</p>}
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
        </select> 
        {errors.course && <p className="error">{errors.course}</p>}
        <br /> <br />
        </div>

        <button type="submit">Submit</button> 
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}
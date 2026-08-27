import { useState } from "react";
import './App.css'

export default function App(){
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getUsers(){
    try{
      setLoading(true);
      setError("");
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      if(!response.ok){
        throw new Error("Failed to fetch users")
      }
      const data = await response.json();
      setUser(data);
    }

    catch(error){
      setError(error.message);
    }

    finally{
      setLoading(false);
    }
  }
  return(
    <>
    <h1>User List</h1>
    <button onClick={getUsers} className="btn"> Get Uers</button>
    <div className="card-container">
      {loading && <p>Loading Users</p>}
      {error && <p>{error}</p>}
      {user.map((user) =>(
        <div key={user.id} className="card">
          <h2>{user.name}</h2>
          <p>email: {user.email}</p>
          <p>mobile: {user.phone}</p>
        </div> 
        
      ) )}
    </div>
    </>
  )
}
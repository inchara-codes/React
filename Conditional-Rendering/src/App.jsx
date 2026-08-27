import { createRoot } from "react-dom/client";
import './App.css'

export default function App() {

  const isLoggedIn = true;
  
  return(
    <h1>{isLoggedIn ? "Welcome!" : "Please login"}</h1>
  )
}

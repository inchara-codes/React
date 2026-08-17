import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

export default function App() {

  // null = logged out
  // object = logged in
  const [user, setUser] = useState(null);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (true) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  // Login function
  const login = (username) => {
    setUser({
      name: username,
      email: `${username}@gmail.com`
    });
      
    localStorage.setItem("user", JSON.stringify({
      name: username,
      email: `${username}@gmail.com`
    }));

  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div style={{ fontFamily: "serif", padding: "21px" }}>
        <Navbar />
        <Dashboard />
      </div>
    </AuthContext.Provider>
  );
}
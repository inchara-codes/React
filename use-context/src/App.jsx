// App.js
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

export default function App() {
  // null means the user is logged out. An object means they are logged in.
  const [user, setUser] = useState(null);

  const login = (username) => {
    // Simulate logging in a user
    setUser({ name: username, email: `${username}@gmail.com` });
    localStorage.setItem('user', JSON.stringify({ name: username, email: `${username}@gmail.com` }))

  };

  useEffect(( )=> {
    setUser(JSON.parse(localStorage.getItem("user")))
  },[]) 

  

  const logout = () => {
    // Clear the user state to log them out
    setUser(null);
  };

  return (
    <AuthContext value={{ user, login, logout }}>
      <div style={{ fontFamily: 'serif', padding: '21px' }}>
        <Navbar />
        <Dashboard />
      </div>
    </AuthContext>
  );
}

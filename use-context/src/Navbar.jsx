// Navbar.js
import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  const [nameInput, setNameInput] = useState('');

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <h2>My App Logo</h2>
      
      {user ? (
        <div>
          <span>Welcome, <strong>{user.name}</strong>! </span>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div>
          <input 
            type="text" 
            placeholder="Enter username" 
            value={nameInput} 
            onChange={(e) => setNameInput(e.target.value)} 
          />
          <button onClick={() => { if(nameInput) login(nameInput) }}>Log In</button>
        </div>
      )}
    </nav>
  );
}

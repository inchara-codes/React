// Dashboard.js
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p style={{ color: 'red' }}>Please log in to see your dashboard.</p>;
  }

  return (
    <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h3>Dashboard</h3>
      <p>Your email is: {user.email}</p>
      <p>This information is secured by React Context!</p>
    </div>
  );
}

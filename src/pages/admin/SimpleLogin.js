import React, { useState } from 'react';

const SimpleLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminPassword = 'your-secure-password'; // Replace with your password
    if (password === adminPassword) {
      onLogin();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SimpleLogin;
import React from 'react';
import { auth, googleProvider } from '../database/firebase';
import { signInWithPopup } from 'firebase/auth';

const GoogleLogin = ({ onLogin }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in: ", result.user.uid);
      onLogin(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleLogin;
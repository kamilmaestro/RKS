import React, { useState, useEffect } from 'react';
import AddArticle from './AddArticle';
import SimpleLogin from './SimpleLogin';
import GoogleLogin from '../../auth/GoogleLogin';
import { auth } from '../../database/firebase';

const AdminPanel = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <AddArticle />
      ) : (
        <GoogleLogin onLogin={(user) => setUser(user)} />
      )}
    </div>
  );
};

export default AdminPanel;
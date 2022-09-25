import React from 'react';
import { Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ signedIn, children }) => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('jwt')) {
      setAuth(false);
    }
  }, []);

  return (
    signedIn || auth ? children : <Redirect exact to='/' />
  )
};

export default ProtectedRoute;
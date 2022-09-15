import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useState, useEffect } from 'react';


const ProtectedRoute = ({ children }) => {
  const [signedIn, setSignedIn] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('jwt')) {
      setSignedIn(false);
    }
  }, []);

  return (
    <Route>
      {() => signedIn ? children : <Redirect exact to="/" />}
    </Route>
  )
};

export default ProtectedRoute;
import React from 'react';
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ signedIn, children }) => {
  return ( 
    signedIn ? children : <Redirect exact to="/" />
  )
};

export default ProtectedRoute;
// import React from 'react';
// import { Redirect, Route } from "react-router-dom";
// import { useState, useEffect } from 'react';


// const ProtectedRoute = ({ children }) => {
//   const [signedIn, setSignedIn] = useState(true);

//   useEffect(() => {
//     if (!localStorage.getItem("jwt")) {
//       setSignedIn(false);
//     }
//   }, []);

//   return (
//     <Route>
//       {() => signedIn ? children : <Redirect to="/" />}
//     </Route>
//   )
// };

// export default ProtectedRoute;

// return (
//   <Route>
//     {() => (signedIn ? children : <Redirect to="/" />)}
//   </Route>
// );

  // const [isJwt, setIsJwt] = useState(false);


import React from 'react';
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ signedIn, children }) => {
  return (
    signedIn ? children : <Redirect exact to="/" />
  )
};

export default ProtectedRoute;
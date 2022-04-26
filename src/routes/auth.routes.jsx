import React, { useEffect } from 'react';

import {  Routes, Route  } from "react-router-dom";
import {SignIn} from '../pages';

const AuthRoutes = () => {

  return (
    <Routes>
        
        <Route exact path="/login" element={<SignIn/>} />
        
    </Routes>
  );
};



export default AuthRoutes;


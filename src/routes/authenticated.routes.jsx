import React, { useEffect } from 'react';

import {  Routes, Route  } from "react-router-dom";
import {Colaboradores,Equipamentos, Movimentacoes} from '../pages';


// export const PrivateRoute = ({ component: Component, ...rest }) => {

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         1 == 1 ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// };



 const AuthenticatedRoutes = () => {

  return (
    <Routes>
        {/* Login */}
        {/* <Route element={} exact path="/" /> */}

        <Route exact path="/" element={<Colaboradores/>} />
        <Route exact path="/equipamentos" element={<Equipamentos/>} />
        <Route exact path="/movimentacoes" element={<Movimentacoes/>} />
        {/* Page not found */}
        {/* <PrivateRoute path="*" element={Error404} /> */}

    </Routes>
  );
};



export default AuthenticatedRoutes;


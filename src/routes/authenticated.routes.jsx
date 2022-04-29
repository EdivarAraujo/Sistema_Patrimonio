import React from 'react';

import { Routes, Route } from "react-router-dom";
import { Colaboradores, Equipamentos, Movimentacoes, Setores, Unidades, Funcao, } from '../pages';



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
      <Route exact path="/" element={<Colaboradores />} />
      <Route exact path="/equipamentos" element={<Equipamentos />} />
      <Route exact path="/movimentacoes" element={<Movimentacoes />} />
      <Route exact path="/unidades" element={<Unidades />} />
      <Route exact path="/setores" element={<Setores />} />
      <Route exact path="/funcao" element={<Funcao />} />
    </Routes>
  );
};



export default AuthenticatedRoutes;


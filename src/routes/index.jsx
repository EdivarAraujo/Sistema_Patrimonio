import React from 'react'
import AuthenticatedRoutes from "./authenticated.routes";
import SingIn from './auth.routes'


export default function Routes() {
  return 1 == 1 ? <AuthenticatedRoutes/> : <SingIn/> 
    
}

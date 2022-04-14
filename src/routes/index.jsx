import AuthRoutes from './auth.routes'
import SignInRoutes from './signin.routes'

import React from 'react'

export default function Routes() {

  return 1==2 ? <AuthRoutes/> : <SignInRoutes/>

}

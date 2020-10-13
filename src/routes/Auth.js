import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/Login'
import React from 'react'

const Auth = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route component={Login} />
    </Switch>
  </HashRouter>
)

export default Auth
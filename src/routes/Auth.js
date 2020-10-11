import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../views/Login'
import React from 'react'

const Auth = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Auth
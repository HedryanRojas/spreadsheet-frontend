import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Layout from '../views/components/Layout'
import NotFound from '../views/NotFound'
import React from 'react'
import SpreadSheet from '../views/SpreadSheet'

const App = () => (
  <HashRouter basename='/'>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/spreadsheet/:id' component={SpreadSheet} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </HashRouter>
)

export default App
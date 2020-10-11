import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Layout from '../views/components/Layout'
import NotFound from '../views/NotFound'
import React from 'react'
import SpreadSheet from '../views/SpreadSheet'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/spreadsheet/:id' component={SpreadSheet} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
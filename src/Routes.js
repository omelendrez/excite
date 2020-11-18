import React from 'react'
import { Route, Switch } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

import Home from './components/Home'

const Routes = () => {

  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Routes
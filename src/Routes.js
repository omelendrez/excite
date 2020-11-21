import React from 'react'
import { Route, Switch } from "react-router-dom"

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import NotFound from './components/common/NotFound'

import Home from './components/common/Home'

import Ajustes from './components/ajustes/Ajustes'
import Clientes from './components/clientes/Clientes'

const Routes = () => {

  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ajustes" exact component={Ajustes} />
          <Route path="/clientes" exact component={Clientes} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Routes
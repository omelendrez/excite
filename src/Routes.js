import React from 'react'
import { Route, Switch } from "react-router-dom"

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import NotFound from './components/common/NotFound'
import Component from './components/common/Component'

import Home from './components/common/Home'

const Routes = () => {

  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ajustes" exact component={() => <Component title="Ajustes" model="ajustes" />} />
          <Route path="/clientes" exact component={() => <Component title="Clientes" model="clientes" />} />
          <Route path="/iva" exact component={() => <Component title="IVA" model="iva" />} />
          <Route path="/porciva" exact component={() => <Component title="% IVA" model="porciva" />} />
          <Route path="/remitos" exact component={() => <Component title="Remitos" model="remitos" />} />
          <Route path="/vendedores" exact component={() => <Component title="Vendedores" model="vendedores" />} />
          <Route path="/conceptos" exact component={() => <Component title="Conceptos" model="conceptos" />} />
          <Route path="/numeros" exact component={() => <Component title="Números" model="numeros" />} />
          <Route path="/pagos" exact component={() => <Component title="Pagos" model="pagos" />} />
          <Route path="/tipos" exact component={() => <Component title="Tipos" model="tipos" />} />
          <Route path="/subtipos" exact component={() => <Component title="Subtipos" model="subtipos" />} />
          <Route path="/productos" exact component={() => <Component title="Productos" model="productos" />} />
          <Route path="/transportes" exact component={() => <Component title="Transportes" model="transportes" />} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  )
}

export default Routes
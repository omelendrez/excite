import React from 'react'
import { Route, Switch } from "react-router-dom"

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import NotFound from './components/common/NotFound'

import Home from './components/common/Home'

import Ajustes from './components/ajustes/Ajustes'
import Clientes from './components/clientes/Clientes'
import Iva from './components/iva/Iva'
import PorcIva from './components/porcIva/PorcIva'
import Remitos from './components/remitos/Remitos'
import Vendedores from './components/vendedores/Vendedores'
import Conceptos from './components/conceptos/Conceptos'
import Numeros from './components/numeros/Numeros'
import Pagos from './components/pagos/Pagos'
import Tipos from './components/tipos/Tipos'
import Subtipos from './components/subtipos/Subtipos'
import Productos from './components/productos/Productos'
import Transportes from './components/transportes/Transportes'

const Routes = () => {

  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ajustes" exact component={Ajustes} />
          <Route path="/clientes" exact component={Clientes} />
          <Route path="/iva" exact component={Iva} />
          <Route path="/porciva" exact component={PorcIva} />
          <Route path="/remitos" exact component={Remitos} />
          <Route path="/vendedores" exact component={Vendedores} />
          <Route path="/conceptos" exact component={Conceptos} />
          <Route path="/numeros" exact component={Numeros} />
          <Route path="/pagos" exact component={Pagos} />
          <Route path="/tipos" exact component={Tipos} />
          <Route path="/subtipos" exact component={Subtipos} />
          <Route path="/productos" exact component={Productos} />
          <Route path="/transportes" exact component={Transportes} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  )
}

export default Routes
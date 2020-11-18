import React from 'react'
import { NavLink } from "react-router-dom"

const Notfound = () => {

  return (
    <div className="container text-center p-5">
      <h1 className="text-danger my-5">OOPS!</h1>
      <p className="lead my-5">La página que está buscando aún no ha sido creada</p>
      <NavLink className="btn btn-danger" to="/">
        <i className="fas fa-home"></i> Volver a la Home Page
      </NavLink>
    </div>
  )
}

export default Notfound
import React from "react"
import { NavLink } from "react-router-dom"
// Acá vamos a usar los estilos de bootstrap para crear la barra de navegación
// Usamos 'Link' para crear los links (equivale a: <a href='/'>Home</a>)
const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li
            className="nav-item active"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <React.Fragment>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/ajustes">
                Ajustes
                </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/clientes">
                Clientes
                </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/conceptos">
                Conceptos
                </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/facturas">
                Facturas
                </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/pagos">
                Pagos
                </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/productos">
                Productos
                </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/transportes">
                Transportes
                </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/vendedores">
                Vendedores
                </NavLink>
            </li>

          </React.Fragment>
        </ul>

      </div>
    </nav>
  )
}

export default Header

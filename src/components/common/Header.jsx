import React from "react"
import { NavLink } from "react-router-dom"
import menuOptions from './menuOptions.json'

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
          <React.Fragment>
            {
              menuOptions.map((option, key) =>
                <li key={key} className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show" >
                  <NavLink className="nav-link" to={option.url}>
                    {option.label}
                  </NavLink>
                </li>
              )
            }
          </React.Fragment>
        </ul>

      </div>
    </nav>
  )
}

export default Header

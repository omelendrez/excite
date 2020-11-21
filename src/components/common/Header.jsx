import React from "react"
import { NavLink } from "react-router-dom"
const menuOptions = require('./menuOptions.json')

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
      <div className='navbar-menu' aria-label='menu' aria-expanded='false' >

        {menuOptions.map((option, index) =>
          <div key={index} className="btn-group">
            {option.options ?
              <button type="button" className="nav-item btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {option.label}
              </button>
              :
              <NavLink type="button" className="nav-link btn" to={option.url}>
                {option.label}
              </NavLink>
            }
            <div key={index} className="dropdown-menu">
              {option.options && option.options.map((option, index) =>
                option.divider ? <div key={index} className="dropdown-divider"></div> :
                  <NavLink key={index} className="dropdown-item nav-item btn" to={option.url}>{option.label}</NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header

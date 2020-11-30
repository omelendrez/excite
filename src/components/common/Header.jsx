import React, { useState } from "react"
import { NavLink } from "react-router-dom"
const menuOptions = require('./menuOptions.json')

const Header = props => {
  const [active, setActive] = useState(0)
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
              <button type="button" className={`nav-item btn ${active === index ? 'active' : ''}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {option.label}
              </button>
              :
              <NavLink type="button" className="nav-link btn" to={option.url} onClick={() => setActive(index)}>
                {option.label}
              </NavLink>
            }
            <div key={index} className="dropdown-menu">
              {option.options && option.options.map((option, idx) =>
                option.divider ? <div key={idx} className="dropdown-divider"></div> :
                  <NavLink key={idx} className="dropdown-item nav-item btn" to={option.url} onClick={() => setActive(index)}>{option.label}</NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header

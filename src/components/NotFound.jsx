import React from 'react'

const Notfound = () => {
  const goHome = e => {
    e.preventDefault()
    window.location.href = '/'
  }
  return (
    <div className="container text-center p-5">
      <h1 className="text-danger my-5">OOPS!</h1>
      <p className="lead my-5">La página que está buscando aún no ha sido creada</p>
      <button className="btn btn-danger" onClick={e => goHome(e)}>
        <i className="fas fa-home"></i> Volver a la Home Page
      </button>
    </div>
  )
}

export default Notfound
import React from 'react'
import Button from '@material-ui/core/Button'

const Notfound = () => {
  const goHome = e => {
    e.preventDefault()
    window.location.href = '/'
  }
  return (
    <div className="container text-center p-5">
      <h1 className="text-danger my-5">OOPS!</h1>
      <p className="lead my-5">La página que está buscando no existe</p>
      <Button className="btn btn-danger btn-lg" onClick={e => goHome(e)}>
        <i className="fas fa-home"></i> Volver a Home
      </Button>
    </div>
  )
}

export default Notfound
import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getProductos } from '../../services/productos'

import { columns } from '../productos/columns'

const Productos = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
      .then(productos => setProductos(productos))
  }, [])

  return (
    <Table
      title="Productos"
      columns={columns}
      rows={productos}
      fieldId="ID"
    />
  )
}

export default Productos
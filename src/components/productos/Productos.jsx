import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getProductos } from '../../services/productos'

import { columns } from './columns'
import { fields } from './fields'

const Productos = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
      .then(productos => setProductos(productos))
  }, [])

  return (
    <Table
      title="Productos"
      model="productos"
      columns={columns}
      fields={fields}
      rows={productos}
      fieldId="ID"
    />
  )
}

export default Productos
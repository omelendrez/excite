import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Productos = () => {
  const [productos, setProductos] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('productos')
      .then(productos => setProductos(productos))
  }, [update])

  return (
    <Table
      title="Productos"
      model="productos"
      columns={columns}
      fields={fields}
      rows={productos}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Productos
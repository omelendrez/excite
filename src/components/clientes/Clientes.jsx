import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Clientes = () => {
  const [clientes, setClientes] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('clientes')
      .then(clientes => setClientes(clientes))
  }, [update])

  return (
    <Table
      title="Clientes"
      model="clientes"
      columns={columns}
      fields={fields}
      rows={clientes}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Clientes
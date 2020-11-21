import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getClientes } from '../../services/clientes'

import { columns } from './columns'

const Clientes = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    getClientes()
      .then(clientes => setClientes(clientes))
  }, [])

  return (
    <Table
      title="Clientes"
      columns={columns}
      rows={clientes}
      fieldId="ID"
    />
  )
}

export default Clientes
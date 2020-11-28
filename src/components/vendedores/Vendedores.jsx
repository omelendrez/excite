import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getVendedores } from '../../services/vendedores'

import { columns } from './columns'

const Vendedores = () => {
  const [vendedores, setVendedores] = useState([])

  useEffect(() => {
    getVendedores()
      .then(vendedores => setVendedores(vendedores))
  }, [])

  return (
    <Table
      title="Vendedores"
      model="vendedores"
      columns={columns}
      rows={vendedores}
      fieldId="ID"
    />
  )
}

export default Vendedores
import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'

const Vendedores = () => {
  const [vendedores, setVendedores] = useState([])

  useEffect(() => {
    getRecords('vendedores')
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
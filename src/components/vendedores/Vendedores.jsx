import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'

const Vendedores = () => {
  const [vendedores, setVendedores] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('vendedores')
      .then(vendedores => setVendedores(vendedores))
  }, [update])

  return (
    <Table
      title="Vendedores"
      model="vendedores"
      columns={columns}
      rows={vendedores}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Vendedores
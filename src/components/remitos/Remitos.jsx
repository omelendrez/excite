import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'

const Remitos = () => {
  const [remitos, setRemitos] = useState([])

  useEffect(() => {
    getRecords('remitos')
      .then(remitos => setRemitos(remitos))
  }, [])

  return (
    <Table
      title="Remitos"
      model="remitos"
      columns={columns}
      rows={remitos}
      fieldId="ID"
    />
  )
}

export default Remitos
import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Transportes = () => {
  const [transportes, setTransportes] = useState([])

  useEffect(() => {
    getRecords('transportes')
      .then(transportes => setTransportes(transportes))
  }, [])

  return (
    <Table
      title="Transportes"
      model="transportes"
      columns={columns}
      fields={fields}
      rows={transportes}
      fieldId="ID"
    />
  )
}

export default Transportes
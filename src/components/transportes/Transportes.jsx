import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Transportes = () => {
  const [transportes, setTransportes] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('transportes')
      .then(transportes => setTransportes(transportes))
  }, [update])

  return (
    <Table
      title="Transportes"
      model="transportes"
      columns={columns}
      fields={fields}
      rows={transportes}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Transportes
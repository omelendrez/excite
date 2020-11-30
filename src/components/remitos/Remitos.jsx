import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Remitos = () => {
  const [remitos, setRemitos] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('remitos')
      .then(remitos => setRemitos(remitos))
  }, [update])

  return (
    <Table
      title="Remitos"
      model="remitos"
      columns={columns}
      fields={fields}
      rows={remitos}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Remitos
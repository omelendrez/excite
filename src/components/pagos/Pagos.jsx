import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Pagos = () => {
  const [pagos, setPagos] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('pagos')
      .then(pagos => setPagos(pagos))
  }, [update])

  return (
    <Table
      title="Pagos"
      model="pagos"
      columns={columns}
      fields={fields}
      rows={pagos}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Pagos
import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Pagos = () => {
  const [pagos, setPagos] = useState([])

  useEffect(() => {
    getRecords('pagos')
      .then(pagos => setPagos(pagos))
  }, [])

  return (
    <Table
      title="Pagos"
      model="pagos"
      columns={columns}
      fields={fields}
      rows={pagos}
      fieldId="ID"
    />
  )
}

export default Pagos
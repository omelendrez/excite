import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Iva = () => {
  const [iva, setIva] = useState([])

  useEffect(() => {
    getRecords('iva')
      .then(iva => setIva(iva))
  }, [])

  return (
    <Table
      title="Condición de IVA"
      model="iva"
      columns={columns}
      fields={fields}
      rows={iva}
      fieldId="ID"
    />
  )
}

export default Iva
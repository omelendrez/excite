import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Iva = () => {
  const [iva, setIva] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('iva')
      .then(iva => setIva(iva))
  }, [update])

  return (
    <Table
      title="Condición de IVA"
      model="iva"
      columns={columns}
      fields={fields}
      rows={iva}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Iva
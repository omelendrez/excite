import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const PorcIva = () => {
  const [porcIva, setPorcIva] = useState([])

  useEffect(() => {
    getRecords('porciva')
      .then(porcIva => setPorcIva(porcIva))
  }, [])

  return (
    <Table
      title="IVA"
      model="porciva"
      columns={columns}
      fields={fields}
      rows={porcIva}
      fieldId="ID"
    />
  )
}

export default PorcIva
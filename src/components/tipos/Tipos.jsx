import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { fields } from './fields'
import { columns } from './columns'

const Tipos = () => {
  const [tipos, setTipos] = useState([])

  useEffect(() => {
    getRecords('tipos')
      .then(tipos => setTipos(tipos))
  }, [])

  return (
    <Table
      title="Tipos"
      model="tipos"
      columns={columns}
      fields={fields}
      rows={tipos}
      fieldId="ID"
    />
  )
}

export default Tipos
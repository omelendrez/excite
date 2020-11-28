import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Ajustes = () => {
  const [ajustes, setAjustes] = useState([])

  useEffect(() => {
    getRecords('ajustes')
      .then(ajustes => setAjustes(ajustes))
  }, [])

  return (
    <Table
      title="Ajustes"
      model="ajustes"
      columns={columns}
      fields={fields}
      rows={ajustes}
      fieldId="ID"
    />
  )
}

export default Ajustes
import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Conceptos = () => {
  const [conceptos, setConceptos] = useState([])

  useEffect(() => {
    getRecords('conceptos')
      .then(conceptos => setConceptos(conceptos))
  }, [])

  return (
    <Table
      title="Conceptos"
      model="conceptos"
      columns={columns}
      fields={fields}
      rows={conceptos}
      fieldId="ID"
    />
  )
}

export default Conceptos
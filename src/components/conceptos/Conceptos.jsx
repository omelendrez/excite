import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Conceptos = () => {
  const [conceptos, setConceptos] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('conceptos')
      .then(conceptos => setConceptos(conceptos))
  }, [update])

  return (
    <Table
      title="Conceptos"
      model="conceptos"
      columns={columns}
      fields={fields}
      rows={conceptos}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Conceptos
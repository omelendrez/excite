import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Ajustes = () => {
  const [ajustes, setAjustes] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('ajustes')
      .then(ajustes => setAjustes(ajustes))
  }, [update])

  return (
    <Table
      title="Ajustes"
      model="ajustes"
      columns={columns}
      fields={fields}
      rows={ajustes}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Ajustes
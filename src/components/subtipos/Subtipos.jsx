import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Subtipos = () => {
  const [subtipos, setSubtipos] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    getRecords('subtipos')
      .then(subtipos => setSubtipos(subtipos))
  }, [update])

  return (
    <Table
      title="Subtipos"
      model="subtipos"
      columns={columns}
      fields={fields}
      rows={subtipos}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Subtipos
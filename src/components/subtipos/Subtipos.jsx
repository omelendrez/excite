import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Subtipos = () => {
  const [subtipos, setSubtipos] = useState([])

  useEffect(() => {
    getRecords('subtipos')
      .then(subtipos => setSubtipos(subtipos))
  }, [])

  return (
    <Table
      title="Subtipos"
      model="subtipos"
      columns={columns}
      fields={fields}
      rows={subtipos}
      fieldId="ID"
    />
  )
}

export default Subtipos
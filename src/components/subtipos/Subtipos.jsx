import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getSubtipos } from '../../services/subtipos'

import { columns } from './columns'
import { fields } from './fields'

const Subtipos = () => {
  const [subtipos, setSubtipos] = useState([])

  useEffect(() => {
    getSubtipos()
      .then(subtipos => setSubtipos(subtipos))
  }, [])

  return (
    <Table
      title="Subtipos"
      columns={columns}
      fields={fields}
      rows={subtipos}
      fieldId="ID"
    />
  )
}

export default Subtipos
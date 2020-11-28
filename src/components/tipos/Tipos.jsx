import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getTipos } from '../../services/tipos'
import { fields } from './fields'

import { columns } from './columns'

const Tipos = () => {
  const [tipos, setTipos] = useState([])

  useEffect(() => {
    getTipos()
      .then(tipos => setTipos(tipos))
  }, [])

  return (
    <Table
      title="Tipos"
      columns={columns}
      fields={fields}
      rows={tipos}
      fieldId="ID"
    />
  )
}

export default Tipos
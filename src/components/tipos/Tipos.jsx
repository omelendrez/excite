import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getTipos } from '../../services/tipos'

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
      rows={tipos}
      fieldId="ID"
    />
  )
}

export default Tipos
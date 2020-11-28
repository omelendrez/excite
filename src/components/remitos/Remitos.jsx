import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRemitos } from '../../services/remitos'

import { columns } from './columns'

const Remitos = () => {
  const [remitos, setRemitos] = useState([])

  useEffect(() => {
    getRemitos()
      .then(remitos => setRemitos(remitos))
  }, [])

  return (
    <Table
      title="Remitos"
      model="remitos"
      columns={columns}
      rows={remitos}
      fieldId="ID"
    />
  )
}

export default Remitos
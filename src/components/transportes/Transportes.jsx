import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getTransportes } from '../../services/transportes'

import { columns } from './columns'

const Transportes = () => {
  const [transportes, setTransportes] = useState([])

  useEffect(() => {
    getTransportes()
      .then(transportes => setTransportes(transportes))
  }, [])

  return (
    <Table
      title="Transportes"
      columns={columns}
      rows={transportes}
      fieldId="ID"
    />
  )
}

export default Transportes
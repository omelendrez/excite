import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getPagos } from '../../services/pagos'

import { columns } from './columns'

const Pagos = () => {
  const [pagos, setPagos] = useState([])

  useEffect(() => {
    getPagos()
      .then(pagos => setPagos(pagos))
  }, [])

  return (
    <Table
      title="Pagos"
      columns={columns}
      rows={pagos}
      fieldId="ID"
    />
  )
}

export default Pagos
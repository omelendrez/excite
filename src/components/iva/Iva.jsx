import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getIva } from '../../services/iva'

import { columns } from './columns'
import { fields } from './fields'

const Iva = () => {
  const [iva, setIva] = useState([])

  useEffect(() => {
    getIva()
      .then(iva => setIva(iva))
  }, [])

  return (
    <Table
      title="Iva"
      columns={columns}
      fields={fields}
      rows={iva}
      fieldId="ID"
    />
  )
}

export default Iva
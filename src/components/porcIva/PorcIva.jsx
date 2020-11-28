import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getPorcIva } from '../../services/porcIva'
import { columns } from './columns'

const PorcIva = () => {
  const [porcIva, setPorcIva] = useState([])

  useEffect(() => {
    getPorcIva()
      .then(porcIva => setPorcIva(porcIva))
  }, [])

  return (
    <Table
      title="PorcIva"
      columns={columns}
      rows={porcIva}
      fieldId="ID"
    />
  )
}

export default PorcIva
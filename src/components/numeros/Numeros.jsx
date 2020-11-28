import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getNumeros } from '../../services/numeros'

import { columns } from './columns'
import { fields } from './fields'

const Numeros = () => {
  const [numeros, setNumeros] = useState([])

  useEffect(() => {
    getNumeros()
      .then(numeros => setNumeros(numeros))
  }, [])

  return (
    <Table
      title="Numeros"
      columns={columns}
      fields={fields}
      rows={numeros}
      fieldId="ID"
    />
  )
}

export default Numeros
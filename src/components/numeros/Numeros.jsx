import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getNumeros } from '../../services/numeros'

import { columns } from './columns'

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
      rows={numeros}
      fieldId="ID"
    />
  )
}

export default Numeros
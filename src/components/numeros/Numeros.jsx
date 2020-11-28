import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Numeros = () => {
  const [numeros, setNumeros] = useState([])

  useEffect(() => {
    getRecords('numeros')
      .then(numeros => setNumeros(numeros))
  }, [])

  return (
    <Table
      title="Numeros"
      model="numeros"
      columns={columns}
      fields={fields}
      rows={numeros}
      fieldId="ID"
    />
  )
}

export default Numeros
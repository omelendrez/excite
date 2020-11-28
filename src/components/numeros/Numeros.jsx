import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Numeros = () => {
  const [numeros, setNumeros] = useState([])
  const [update, setUpdate] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }


  useEffect(() => {
    getRecords('numeros')
      .then(numeros => setNumeros(numeros))
  }, [update])

  return (
    <Table
      title="Numeros"
      model="numeros"
      columns={columns}
      fields={fields}
      rows={numeros}
      fieldId="ID"
      setUpdate={updateData}
    />
  )
}

export default Numeros
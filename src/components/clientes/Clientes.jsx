import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getRecords } from '../../services'
import { columns } from './columns'
import { fields } from './fields'

const Clientes = () => {
  const [clientes, setClientes] = useState([])
  const [update, setUpdate] = useState(false)
  const [search, setSearch] = useState('')

  const updateData = () => {
    setUpdate(!update)
  }

  const handleSearch = search => {
    setSearch(search.search)
  }

  useEffect(() => {
    getRecords(`clientes${search ? '?search=' + search : ''}`)
      .then(clientes => setClientes(clientes))
  }, [update, search])

  return (
    <Table
      title="Clientes"
      model="clientes"
      columns={columns}
      fields={fields}
      rows={clientes}
      fieldId="ID"
      setUpdate={updateData}
      doSearch={handleSearch}
    />
  )
}

export default Clientes
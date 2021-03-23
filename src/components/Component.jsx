import React, { useEffect, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Table from './Table'
import { getRecords } from '../services'

const Component = ({ model, title }) => {
  const { columns } = require(`../data/${model}/columns`)
  const { fields } = require(`../data/${model}/fields`)
  const [records, setRecords] = useState([])
  const [update, setUpdate] = useState(false)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const updateData = () => {
    setUpdate(!update)
  }

  const handleSearch = search => {
    setSearch(search.search)
  }

  useEffect(() => {
    setLoading(true)
    getRecords(`${model}${search ? '?search=' + search : ''}`)
      .then(clientes => {
        setRecords(clientes)
        setLoading(false)
      })
  }, [model, update, search])

  if (loading) return <LinearProgress disableShrink />
  return (
    <Table
      title={title}
      model={model}
      columns={columns}
      fields={fields}
      rows={records}
      fieldId="ID"
      setUpdate={updateData}
      doSearch={handleSearch}
    />
  )
}

export default Component
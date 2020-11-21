import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getAjustes } from '../../services/ajustes'

import { columns } from './columns'

const Ajustes = () => {
  const [ajustes, setAjustes] = useState([])

  useEffect(() => {
    getAjustes()
      .then(ajustes => setAjustes(ajustes))
  }, [])

  return (
    <Table
      title="Ajustes"
      columns={columns}
      rows={ajustes}
      fieldId="ID"
    />
  )
}

export default Ajustes
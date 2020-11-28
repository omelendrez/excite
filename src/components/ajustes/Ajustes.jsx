import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getAjustes } from '../../services/ajustes'

import { columns } from './columns'
import { fields } from './fields'

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
      fields={fields}
      rows={ajustes}
      fieldId="ID"
    />
  )
}

export default Ajustes
import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getConceptos } from '../../services/conceptos'

import { columns } from './columns'
import { fields } from './fields'

const Conceptos = () => {
  const [conceptos, setConceptos] = useState([])

  useEffect(() => {
    getConceptos()
      .then(conceptos => setConceptos(conceptos))
  }, [])

  return (
    <Table
      title="Conceptos"
      model="conceptos"
      columns={columns}
      fields={fields}
      rows={conceptos}
      fieldId="ID"
    />
  )
}

export default Conceptos
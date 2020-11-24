import React, { useEffect, useState } from 'react'
import Table from '../common/Table'
import { getConceptos } from '../../services/conceptos'

import { columns } from './columns'

const Conceptos = () => {
  const [conceptos, setConceptos] = useState([])

  useEffect(() => {
    getConceptos()
      .then(conceptos => setConceptos(conceptos))
  }, [])

  return (
    <Table
      title="Conceptos"
      columns={columns}
      rows={conceptos}
      fieldId="ID"
    />
  )
}

export default Conceptos
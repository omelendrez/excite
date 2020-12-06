export const fields = [
  {
    name: 'CONNUM',
    label: 'Número de concepto',
    type: 'text',
    readOnly: true
  },
  {
    name: 'CONFEC',
    label: 'Fecha concepto',
    type: 'date'
  },
  {
    name: 'CONDES',
    label: 'Descripción del concepto',
    type: 'text',
    length: 20
  },
  {
    name: 'CONCLI',
    label: 'Cliente',
    type: 'select'
  },
  {
    name: 'CONCANDEB',
    label: 'Importe al Debe',
    type: 'number',
    default: 0
  },
  {
    name: 'CONCANHAB',
    label: 'Importe al Haber',
    type: 'number',
    default: 0
  }
]
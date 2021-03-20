export const fields = [
  {
    name: 'PRODCOD',
    label: 'Código',
    type: 'text'
  },
  {
    name: 'PRODDES',
    label: 'Descripción',
    type: 'text',
    length: 60
  },
  {
    name: 'PRODPRE',
    label: 'Precio',
    type: 'number',
    default: 0
  },
  {
    name: 'TIPCOD',
    label: 'Tipo',
    type: 'select'
  },
  {
    name: 'SUBTIPCOD',
    label: 'Subtipo',
    type: 'select'
  },
  {
    name: 'PRODSEX',
    label: 'Sexo',
    type: 'select'
  },
  {
    name: 'PRODSTO',
    label: 'Stock',
    type: 'number',
    default: 0
  },
  {
    name: 'PRODSINI',
    label: 'Stock inicial',
    type: 'number',
    default: 0
  },
  {
    name: 'PRODEST',
    label: 'Status',
    type: 'select'
  },
  {
    name: 'PRODCOM',
    label: 'PRODCOM',
    type: 'text',
    length: 1
  }
]
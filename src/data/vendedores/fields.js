export const fields = [
  {
    name: 'VENCOD',
    label: 'Código',
    type: 'number',
    readOnly: true
  },
  {
    name: 'VENNOM',
    label: 'Nombre',
    type: 'text',
    length: 60
  },
  {
    name: 'VENDOM',
    label: 'Domicilio',
    type: 'text',
    length: 60
  },
  {
    name: 'VENLOC',
    label: 'Localidad',
    type: 'text',
    length: 60
  },
  {
    name: 'VENCP',
    label: 'C.P.',
    type: 'text',
    length: 8
  },
  {
    name: 'PROCOD',
    label: 'Provincia',
    type: 'select'
  },
  {
    name: 'VENINT',
    label: 'Zona',
    type: 'select'
  },
  {
    name: 'VENTEL',
    label: 'Teléfono',
    type: 'text',
    length: 20
  },
  {
    name: 'VENCEL',
    label: 'Celular',
    type: 'text',
    length: 20
  },
  {
    name: 'VENOBS',
    label: 'Observaciones',
    type: 'text',
    rows: 4
  }
]
export const fields = [
  {
    name: 'TRACOD',
    label: 'Codigo',
    type: 'number',
    readOnly: true
  },
  {
    name: 'TRANOM',
    label: 'Nombre',
    type: 'text',
    length: 60
  },
  {
    name: 'TRADOM',
    label: 'Domicilio',
    type: 'text',
    length: 60
  },
  {
    name: 'TRALOC',
    label: 'Localidad',
    type: 'text',
    length: 60
  },
  {
    name: 'TRATEL',
    label: 'Telefono',
    type: 'text',
    length: 20
  },
  {
    name: 'TRAOBS',
    label: 'Observaciones',
    type: 'text',
    rows: 4
  },
  {
    name: 'TRAPROCOD',
    label: 'Provincia',
    type: 'select'
  },
  {
    name: 'TRACUIT',
    label: 'CUIT',
    type: 'text',
    length: 20
  }
]
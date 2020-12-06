export const fields = [
  {
    name: 'CLICOD',
    label: 'Código',
    type: 'number',
    readOnly: true
  },
  {
    name: 'CLINOM',
    label: 'Nombre',
    type: 'text',
    length: 60
  },
  {
    name: 'CLIDOM',
    label: 'Domicilio',
    type: 'text',
    length: 60,
    default: 'Su casa'
  },
  {
    name: 'CLILOC',
    label: 'Localidad',
    type: 'text',
    length: 60
  },
  {
    name: 'CLICP',
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
    name: 'CLIINT',
    label: 'Zona',
    type: 'select'
  },
  {
    name: 'CLITEL',
    label: 'Teléfono',
    type: 'text',
    length: 20
  },
  {
    name: 'CLICEL',
    label: 'Celular',
    type: 'text',
    length: 20
  },
  {
    name: 'CLIFAN',
    label: 'CLIFAN',
    type: 'text',
    length: 60
  },
  {
    name: 'CLIFP',
    label: 'Forma de Pago',
    type: 'text',
    length: 60
  },
  {
    name: 'CLICUIT',
    label: 'CUIT',
    type: 'text',
    length: 20
  },
  {
    name: 'IVACOD',
    label: 'Tipo de IVA',
    type: 'select'
  },
  {
    name: 'TRACOD',
    label: 'Transporte',
    type: 'select'
  }
]
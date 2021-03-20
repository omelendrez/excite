export const fields = [
  {
    name: 'AJUNUM',
    label: 'Número de ajuste',
    type: 'number',
    readOnly: true
  },
  {
    name: 'AJUFEC',
    label: 'Fecha de ajuste',
    type: 'date'
  },
  {
    name: 'PRODCOD',
    label: 'Producto',
    type: 'select'
  },
  {
    name: 'AJUCAN',
    label: 'Cantidad a ajustar',
    type: 'number',
    default: 0,
    helperText: 'Puede ingresar valores positivos o negativos para incrementar o disminuir el stock'
  }
]
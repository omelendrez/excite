export const fields = [
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
    helperText: 'Puede ingresar valores positivos o negativos para incrementar o disminuir el stock'
  }
]
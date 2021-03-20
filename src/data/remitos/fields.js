export const fields = [
  {
    name: 'REMNUM',
    label: 'Número de Remito',
    type: 'number',
    readOnly: true
  },
  {
    name: 'REMFEC',
    label: 'Fecha',
    type: 'date'
  },
  {
    name: 'CLICOD',
    label: 'Cliente',
    type: 'select'
  },
  {
    name: 'ESTCOD',
    label: 'Estado',
    type: 'select'
  },
  {
    name: 'VENCOD',
    label: 'Vendedor',
    type: 'select'
  },
  /*  
  {
    name: 'REMPED',
    label: 'Nro. de Pedido',
    type: 'number'
  },
    */
  {
    name: 'REMFACNUM',
    label: 'Nro. de Factura',
    type: 'number'
  },
  {
    name: 'REMPAGNUM',
    label: 'Nro. de Pago',
    type: 'number'
  },
  /*
  {
    name: 'REMLIQNUM',
    label: 'Nro. de Liq.',
    type: 'number'
  },
  */
  {
    name: 'REMDES',
    label: 'Desc.',
    type: 'number',
    length: 60
  },
  {
    name: 'REMFACLET',
    label: 'REMFACLET',
    type: 'text',
    length: 1
  },
  {
    name: 'REMEMI',
    label: 'Emitido',
    type: 'select'
  }
  /*
  ,
  {
    name: 'REMFACPV',
    label: 'REMFACPV',
    type: 'number'
  }
  */
]
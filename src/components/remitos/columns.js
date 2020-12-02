import { formatDate, formatAmount } from '../../helpers'

export const columns = [
  {
    id: "REMNUM",
    label: "Número",
    numeric: true,
    align: "right",
    disablePadding: true
  },
  {
    id: "REMFEC",
    label: "Fecha",
    numeric: false,
    minWidth: 60,
    format: value => formatDate(value)
  },
  {
    id: "ESTDES",
    label: "Estado",
    numeric: false
  },
  {
    id: "VENCOD",
    label: "Cód. Ven.",
    numeric: true,
    align: "right",
    minWidth: 60
  },
  {
    id: "VENNOM",
    label: "Vendedor",
    numeric: false
  },
  {
    id: "CLICOD",
    label: "Cód. Cli.",
    numeric: true,
    align: "right",
    minWidth: 60
  },
  {
    id: "CLINOM",
    label: "Cliente",
    numeric: false,
    format: value => formatDate(value)
  },
  {
    id: "REMFACNUM",
    label: "Factura Nro.",
    numeric: true,
    align: "right",
    minWidth: 60
  },
  {
    id: "REMPAGNUM",
    label: "Pago Nro.",
    numeric: true,
    align: "right",
    minWidth: 60
  },
  {
    id: "REMDES",
    label: "Descuento",
    numeric: true,
    align: "right",
    minWidth: 60,
    format: value => formatAmount(value)
  }
]
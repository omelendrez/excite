import { formatDate, formatAmount } from '../../helpers'

export const columns = [
  {
    id: "PAGNUM",
    label: "Número",
    numeric: true,
    disablePadding: true,
    align: "right"
  },
  {
    id: "PAGFEC",
    label: "Fecha",
    numeric: false,
    format: value => formatDate(value)
  },
  {
    id: "CLICOD",
    label: "Código",
    numeric: true,
    align: "right"
  },
  {
    id: "CLINOM",
    label: "Cliente",
    numeric: false,
    minWidth: 260
  },
  {
    id: "TOTAL",
    label: "Total",
    numeric: true,
    align: "right",
    format: value => formatAmount(value)
  }
]
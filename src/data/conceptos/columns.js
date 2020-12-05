import { formatDate, formatAmount } from '../../helpers'

export const columns = [
  {
    id: "CONNUM",
    label: "Número",
    numeric: true,
    align: "right",
    disablePadding: true
  },
  {
    id: "CONFEC",
    label: "Fecha",
    numeric: false,
    format: value => formatDate(value)
  },
  {
    id: "CONDES",
    label: "Descripción",
    numeric: false,
  },
  {
    id: "CONCLI",
    label: "Cliente",
    numeric: true,
    align: "right"
  },
  {
    id: "CLINOM",
    label: "Nombre",
    numeric: false,
  },
  {
    id: "CONCANDEB",
    label: "Débito",
    numeric: true,
    align: "right",
    format: value => formatAmount(value)
  },
  {
    id: "CONCANHAB",
    label: "Crédito",
    numeric: true,
    align: "right",
    format: value => formatAmount(value)
  }

]
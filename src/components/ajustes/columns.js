import { formatDate } from '../../helpers'

export const columns = [
  {
    id: "AJUNUM",
    label: "Número",
    numeric: false,
    disablePadding: true
  },
  {
    id: "AJUFEC",
    label: "Fecha",
    numeric: false,
    disablePadding: false,
    format: value => formatDate(value)
  },
  {
    id: "PRODCOD",
    label: "Código",
    numeric: false,
    disablePadding: false
  },
  {
    id: "PRODDES",
    label: "Producto",
    numeric: false,
    disablePadding: false,
    minWidth: 300
  },
  {
    id: "AJUCAN",
    label: "Ajuste",
    align: "right",
    numeric: true,
    disablePadding: false
  }
]
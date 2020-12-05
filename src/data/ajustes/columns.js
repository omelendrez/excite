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
    format: value => formatDate(value)
  },
  {
    id: "PRODCOD",
    label: "Código",
    numeric: false
  },
  {
    id: "PRODDES",
    label: "Producto",
    numeric: false,
    minWidth: 300
  },
  {
    id: "AJUCAN",
    label: "Ajuste",
    align: "right",
    numeric: true
  }
]
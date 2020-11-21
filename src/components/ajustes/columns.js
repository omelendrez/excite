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
    label: "Prroducto",
    numeric: false,
    disablePadding: false
  },
  {
    id: "AJUCAN",
    label: "Ajuste",
    minWidth: 60,
    align: "right",
    numeric: true,
    disablePadding: false,
    format: (value) => value.toLocaleString('es-AR')
  }
]
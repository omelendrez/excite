import { formatDate } from '../../helpers'

export const columns = [
  {
    id: "IVAFEC",
    label: "Fecha",
    numeric: false,
    disablePadding: true,
    format: value => formatDate(value)
  },
  {
    id: "IVAPOR",
    label: "Porcentaje",
    numeric: true,
    align: "right"
  }
]
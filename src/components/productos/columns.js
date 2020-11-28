import { formatAmount } from '../../helpers'

export const columns = [
  {
    id: "PRODCOD",
    label: "Código",
    numeric: false,
    disablePadding: true
  },
  {
    id: "PRODDES",
    label: "Descripción",
    numeric: false
  },
  {
    id: "TIPCOD",
    label: "Tipo",
    numeric: false
  },
  {
    id: "TIPDES",
    label: "Desc. Tipo",
    numeric: false
  },
  {
    id: "SUBTIPCOD",
    label: "Subtipo",
    numeric: false
  },
  {
    id: "SUBTIPDES",
    label: "Desc. Subtipo",
    numeric: false
  },
  {
    id: "PRODPRE",
    label: "Precio",
    numeric: true,
    align: "right",
    minWidth: 60,
    format: value => formatAmount(value)
  },
  {
    id: "PRODSEX",
    label: "Sexo",
    numeric: false
  },
  {
    id: "PRODSTO",
    label: "Stock",
    numeric: true,
    align: "right",
    minWidth: 60
  },
  {
    id: "PRODSINI",
    label: "Stock inicial",
    numeric: true,
    align: "right",
    minWidth: 60
  },
  {
    id: "PRODEST",
    label: "Estado",
    numeric: false,
    filter: true
  }
]
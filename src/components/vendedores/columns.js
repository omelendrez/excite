import { formatDate, formatAmount } from '../../helpers'

export const columns = [
  {
    id: "VENCOD",
    label: "Código",
    numeric: true,
    minWidth: 60,
    align: "right",
    disablePadding: true
  },
  {
    id: "VENNOM",
    label: "Nombre",
    numeric: false
  },
  {
    id: "VENDOM",
    label: "Domicilio",
    numeric: false
  },
  {
    id: "VENLOC",
    label: "Localidad",
    numeric: false
  },
  {
    id: "VENTEL",
    label: "Teléfono",
    numeric: false
  },
  {
    id: "VENCEL",
    label: "Celular",
    numeric: false
  },
  {
    id: "VENOBS",
    label: "Observaciones",
    numeric: false
  },
  {
    id: "VENINT",
    label: "Interior",
    numeric: false
  },
  {
    id: "VENCP",
    label: "C.P.",
    numeric: false
  },
  {
    id: "PROCOD",
    label: "Cód. Producto",
    numeric: false
  },
  {
    id: "VENFECSAL",
    label: "Fecha Saldo",
    numeric: false,
    format: value => formatDate(value)
  },
  {
    id: "VENSALDEB",
    label: "Saldo Deudor",
    minWidth: 60,
    align: "right",
    numeric: true,
    format: value => formatAmount(value)
  },
  {
    id: "VENSALHAB",
    label: "Saldo Acreedor",
    minWidth: 60,
    align: "right",
    numeric: true,
    format: value => formatAmount(value)
  },
  {
    id: "VENSALIMP",
    label: "Saldo",
    minWidth: 60,
    align: "right",
    numeric: true,
    format: value => formatAmount(value)
  }
]
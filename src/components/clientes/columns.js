import { formatAmount } from '../../helpers'

export const columns = [
  {
    id: "CLICOD",
    label: "Código",
    numeric: false,
    disablePadding: true
  },
  {
    id: "CLINOM",
    label: "Nombre",
    numeric: false
  },
  {
    id: "CLIDOM",
    label: "Domicilio",
    numeric: false
  },
  {
    id: "CLILOC",
    label: "Localidad",
    numeric: false
  },
  {
    id: "CLICP",
    label: "C.P.",
    numeric: false
  },
  {
    id: "CLITEL",
    label: "Teléfono",
    numeric: false
  },
  {
    id: "CLICEL",
    label: "Celular",
    numeric: false
  },
  {
    id: "CLICUIT",
    label: "CUIT",
    numeric: false
  },
  {
    id: "CLIINT",
    label: "Región",
    numeric: false
  },
  {
    id: "IVACOD",
    label: "IVA",
    numeric: false
  },
  {
    id: "CLISALDEB",
    label: "Débito",
    minWidth: 60,
    align: "right",
    numeric: true,
    format: (value) => formatAmount(value)
  },
  {
    id: "CLISALHAB",
    label: "Crédito",
    minWidth: 60,
    align: "right",
    numeric: true,
    format: (value) => formatAmount(value)
  },
  {
    id: "CLISALIMP",
    label: "Saldo",
    minWidth: 60,
    align: "right",
    numeric: true,
    format: (value) => formatAmount(value)
  },
  {
    id: "CLITIPO",
    label: "Tipo",
    numeric: false
  }
]
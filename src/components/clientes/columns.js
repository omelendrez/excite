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
    numeric: false,
    minWidth: 300
  },
  {
    id: "CLIDOM",
    label: "Domicilio",
    numeric: false,
    minWidth: 300
  },
  {
    id: "CLILOC",
    label: "Localidad",
    numeric: false,
    minWidth: 260
  },
  {
    id: "CLICP",
    label: "C.P.",
    numeric: false,
    minWidth: 100
  },
  {
    id: "CLITEL",
    label: "Teléfono",
    numeric: false,
    minWidth: 180
  },
  {
    id: "CLICEL",
    label: "Celular",
    numeric: false,
    minWidth: 300
  },
  {
    id: "CLICUIT",
    label: "CUIT",
    numeric: false,
    minWidth: 180
  },
  {
    id: "IVACOD",
    label: "IVA",
    numeric: false
  }
]
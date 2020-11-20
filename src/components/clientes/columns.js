exports.columns = [
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
    disablePadding: false
  },
  {
    id: "CLIDOM",
    label: "Domicilio",
    numeric: false,
    disablePadding: false
  },
  {
    id: "CLILOC",
    label: "Localidad",
    numeric: false,
    disablePadding: false
  },
  {
    id: "CLICP",
    label: "C.P.",
    numeric: false,
    disablePadding: false
  },
  {
    id: "CLITEL",
    label: "Teléfono",
    numeric: false,
    disablePadding: false
  },
  {
    id: "CLICEL",
    label: "Celular",
    numeric: false,
    disablePadding: false
  },
  {
    id: "CLICUIT",
    label: "CUIT",
    numeric: false,
    disablePadding: false
  },
  {
    id: "CLIINT",
    label: "Región",
    numeric: false,
    disablePadding: false
  },
  {
    id: "IVACOD",
    label: "IVA",
    numeric: false,
    disablePadding: false
  },
  {
    id: "CLISALDEB",
    label: "Débito",
    "minWidth": 60,
    "align": "right",
    numeric: true,
    disablePadding: false,
    format: (value) => value.toLocaleString('es-AR')
  },
  {
    id: "CLISALHAB",
    label: "Crédito",
    "minWidth": 60,
    "align": "right",
    numeric: true,
    disablePadding: false,
    format: (value) => value.toLocaleString('es-AR')
  },
  {
    id: "CLISALIMP",
    label: "Saldo",
    "minWidth": 60,
    "align": "right",
    numeric: true,
    disablePadding: false,
    format: (value) => value.toLocaleString('es-AR')
  },
  {
    id: "CLITIPO",
    label: "Tipo",
    numeric: false,
    disablePadding: false
  }
]
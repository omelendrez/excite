export const handleError = error => {
  window.navigator.vibrate(200)
  if (error.response && error.response.data && error.response.data.error && error.response.data.error.code === 'ER_DUP_ENTRY') {
    return { message: 'Registro duplicado' }
  }
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data
  }
  if (error.response.data) {
    if (error.response.data.error && error.response.data.error.sqlMessage) {
      return ({ message: error.response.data.error.sqlMessage })
    }
  }
  return ({ message: 'Error interno del servidor' })
}

export const formatDate = date => date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4)

export const formatAmount = amount => amount.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2, maximumFractionDigits: 2 })

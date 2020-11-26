const appLocale = 'es-AR'

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

export const formatDate = date => date ? date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4) : ''

export const formatAmount = amount => amount.toLocaleString(appLocale, { style: 'currency', currency: 'ARS', minimumFractionDigits: 2, maximumFractionDigits: 2 })

export const objectChanged = (obj1, obj2) => {
  const keys = Object.keys(obj1)
  for (const key of keys) {
    if (obj1[key] !== obj2[key]) {
      return true
    }
  }
  return false
}

export const padLeft = (value, size, char) => {
  if (value) {
    while (value.toLocaleString().length < size) {
      value = char + value
    }
    return value
  }
}

export const inputFormatDate = (date) => {
  if (date) {
    let [d, m, y] = new Date(date).toLocaleDateString(appLocale).split("/")
    return `${padLeft(y, 4, '0')}-${padLeft(m, 2, '0')}-${padLeft(d, 2, '0')} 03:00`
  }
  return null
}
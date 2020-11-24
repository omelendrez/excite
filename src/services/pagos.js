import api from "./api"
import { handleError } from "../helpers"

export const getPagos = () => {
  return new Promise((resolve, reject) => {
    api
      .get("pagos")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addPago = (pago) => {
  return new Promise((resolve, reject) => {
    api
      .post("pagos", pago)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const savePago = (pago) => {
  return new Promise((resolve, reject) => {
    api
      .put(`pagos/${pago.id}`, pago)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deletePago = (pago) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`pagos/${pago.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

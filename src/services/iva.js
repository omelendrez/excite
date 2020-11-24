import api from "./api"
import { handleError } from "../helpers"

export const getIva = () => {
  return new Promise((resolve, reject) => {
    api
      .get("iva")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addIva = (iva) => {
  return new Promise((resolve, reject) => {
    api
      .post("iva", iva)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveIva = (iva) => {
  return new Promise((resolve, reject) => {
    api
      .put(`iva/${iva.id}`, iva)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteIva = (iva) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`iva/${iva.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

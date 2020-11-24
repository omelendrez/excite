import api from "./api"
import { handleError } from "../helpers"

export const getPorcIva = () => {
  return new Promise((resolve, reject) => {
    api
      .get("porciva")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addPorcIva = (porcIva) => {
  return new Promise((resolve, reject) => {
    api
      .post("porciva", porcIva)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const savePorcIva = (porcIva) => {
  return new Promise((resolve, reject) => {
    api
      .put(`porciva/${porcIva.id}`, porcIva)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deletePorcIva = (porcIva) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`porciva/${porcIva.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

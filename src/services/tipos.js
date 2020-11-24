import api from "./api"
import { handleError } from "../helpers"

export const getTipos = () => {
  return new Promise((resolve, reject) => {
    api
      .get("tipos")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addTipos = (tipo) => {
  return new Promise((resolve, reject) => {
    api
      .post("tipos", tipo)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveTipos = (tipo) => {
  return new Promise((resolve, reject) => {
    api
      .put(`tipos/${tipo.id}`, tipo)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteTipos = (tipo) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`tipos/${tipo.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

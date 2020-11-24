import api from "./api"
import { handleError } from "../helpers"

export const getRemitos = () => {
  return new Promise((resolve, reject) => {
    api
      .get("remitos")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addRemito = (remito) => {
  return new Promise((resolve, reject) => {
    api
      .post("remitos", remito)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveRemito = (remito) => {
  return new Promise((resolve, reject) => {
    api
      .put(`remitos/${remito.id}`, remito)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteRemito = (remito) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`remitos/${remito.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

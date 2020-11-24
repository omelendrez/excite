import api from "./api"
import { handleError } from "../helpers"

export const getTransportes = () => {
  return new Promise((resolve, reject) => {
    api
      .get("transportes")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addTransporte = (transporte) => {
  return new Promise((resolve, reject) => {
    api
      .post("transportes", transporte)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveTransporte = (transporte) => {
  return new Promise((resolve, reject) => {
    api
      .put(`transportes/${transporte.id}`, transporte)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteTransporte = (transporte) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`transportes/${transporte.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

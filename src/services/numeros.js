import api from "./api"
import { handleError } from "../helpers"

export const getNumeros = () => {
  return new Promise((resolve, reject) => {
    api
      .get("numeros")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addNumero = (numero) => {
  return new Promise((resolve, reject) => {
    api
      .post("numeros", numero)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveNumero = (numero) => {
  return new Promise((resolve, reject) => {
    api
      .put(`numeros/${numero.id}`, numero)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteNumero = (numero) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`numeros/${numero.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

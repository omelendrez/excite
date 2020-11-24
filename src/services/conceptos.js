import api from "./api"
import { handleError } from "../helpers"

export const getConceptos = () => {
  return new Promise((resolve, reject) => {
    api
      .get("conceptos")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addConcepto = (concepto) => {
  return new Promise((resolve, reject) => {
    api
      .post("conceptos", concepto)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveConcepto = (concepto) => {
  return new Promise((resolve, reject) => {
    api
      .put(`conceptos/${concepto.id}`, concepto)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteConcepto = (concepto) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`conceptos/${concepto.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

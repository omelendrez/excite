import api from "./api"
import { handleError } from "../helpers"

export const getSubtipos = () => {
  return new Promise((resolve, reject) => {
    api
      .get("subtipos")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addSubtipos = (subtipo) => {
  return new Promise((resolve, reject) => {
    api
      .post("subtipos", subtipo)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveSubtipos = (subtipo) => {
  return new Promise((resolve, reject) => {
    api
      .put(`subtipos/${subtipo.id}`, subtipo)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteSubtipos = (subtipo) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`subtipos/${subtipo.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

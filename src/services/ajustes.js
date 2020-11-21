import api from "./api"
import { handleError } from "../helpers"

export const getAjustes = () => {
  return new Promise((resolve, reject) => {
    api
      .get("ajustes")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addAjuste = (ajuste) => {
  return new Promise((resolve, reject) => {
    api
      .post("ajustes", ajuste)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveAjuste = (ajuste) => {
  return new Promise((resolve, reject) => {
    api
      .put(`ajustes/${ajuste.id}`, ajuste)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteAjuste = (ajuste) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`ajustes/${ajuste.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

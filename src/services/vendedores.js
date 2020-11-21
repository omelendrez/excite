import api from "./api"
import { handleError } from "../helpers"

export const getVendedores = () => {
  return new Promise((resolve, reject) => {
    api
      .get("vendedores")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addVendedor = (vendedor) => {
  return new Promise((resolve, reject) => {
    api
      .post("vendedores", vendedor)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveVendedor = (vendedor) => {
  return new Promise((resolve, reject) => {
    api
      .put(`vendedores/${vendedor.id}`, vendedor)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteVendedor = (vendedor) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`vendedores/${vendedor.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

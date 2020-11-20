import api from "./api"
import { handleError } from "../helpers"

export const getClientes = () => {
  return new Promise((resolve, reject) => {
    api
      .get("clientes")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addCliente = (cliente) => {
  return new Promise((resolve, reject) => {
    api
      .post("clientes", cliente)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveCliente = (cliente) => {
  return new Promise((resolve, reject) => {
    api
      .put(`clientes/${cliente.id}`, cliente)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteCliente = (cliente) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`clientes/${cliente.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

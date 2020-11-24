import api from "./api"
import { handleError } from "../helpers"

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    api
      .get("productos")
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const addProducto = (producto) => {
  return new Promise((resolve, reject) => {
    api
      .post("productos", producto)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const saveProducto = (producto) => {
  return new Promise((resolve, reject) => {
    api
      .put(`productos/${producto.id}`, producto)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

export const deleteProducto = (producto) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`productos/${producto.id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(handleError(error)))
  })
}

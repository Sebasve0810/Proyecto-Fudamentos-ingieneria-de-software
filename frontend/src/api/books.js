import axiosClient from "./axiosClient";

export const getBooks = (params) =>
  axiosClient.get("/libros", { params }).then((r) => r.data);

export const getBookById = (id) =>
  axiosClient.get(`/libros/${id}`).then((r) => r.data);

export const createBook = (payload) =>
  axiosClient.post("/libros", payload).then((r) => r.data);

export const updateBook = (id, payload) =>
  axiosClient.put(`/libros/${id}`, payload).then((r) => r.data);

export const deleteBook = (id) =>
  axiosClient.delete(`/libros/${id}`).then((r) => r.data);

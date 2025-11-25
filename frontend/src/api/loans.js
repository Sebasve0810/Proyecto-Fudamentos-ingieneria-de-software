import axiosClient from "./axiosClient";

export const getLoansByUser = (userId) =>
  axiosClient.get(`/prestamos/usuario/${userId}`).then((r) => r.data);

export const createLoan = (payload) =>
  axiosClient.post("/prestamos", payload).then((r) => r.data);

export const getAllLoans = () =>
  axiosClient.get(`/prestamos`).then((r) => r.data);

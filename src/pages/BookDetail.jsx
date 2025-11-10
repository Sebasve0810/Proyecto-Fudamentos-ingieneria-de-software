// src/pages/BookDetail.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader";
import { requestLoan } from "../store/loansSlice";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);
  const loansLoading = useSelector((state) => state.loans.loading);

  useEffect(() => {
    api.get(`/libros/${id}`).then((res) => setBook(res.data)).catch(console.error);
  }, [id]);

  if (!book) return <Loader />;

  const handleRequestLoan = () => {
    if (!authUser) return window.location.href = "/login";
    dispatch(requestLoan({ usuarioId: authUser.id || authUser._id, libroId: book.id || book._id }))
      .unwrap()
      .then(() => alert("Solicitud de préstamo enviada"))
      .catch((err) => alert("Error solicitando préstamo: " + (err.message || JSON.stringify(err))));
  };

  return (
    <div className="page">
      <h2>{book.titulo}</h2>
      <p><strong>Autor:</strong> {book.autor}</p>
      <p><strong>Descripción:</strong> {book.descripcion}</p>
      <p><strong>Disponibles:</strong> {book.disponibles}</p>

      <button onClick={handleRequestLoan} disabled={loansLoading}>
        {loansLoading ? "Enviando..." : "Solicitar Préstamo"}
      </button>
    </div>
  );
}

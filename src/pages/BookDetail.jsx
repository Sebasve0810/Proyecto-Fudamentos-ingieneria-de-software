import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader.jsx";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    setError("");

    api.get(`/books/${id}`)
      .then((res) => !cancel && setBook(res.data))
      .catch((e) => setError(e.message || "No se pudo cargar el libro"))
      .finally(() => !cancel && setLoading(false));

    return () => { cancel = true; };
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p style={{color:"crimson"}}>{error}</p>;
  if (!book) return <p>No encontrado</p>;

  return (
    <div style={{ padding: 16 }}>
      <Link to="/">← Volver</Link>
      <h1>{book.titulo || book.title}</h1>
      <p><b>Autor:</b> {book.autor}</p>
      <p><b>ISBN:</b> {book.isbn}</p>
      <p><b>Categoría:</b> {book.categoria?.nombre || book.categoria}</p>
      <p><b>Descripción:</b> {book.descripcion}</p>
    </div>
  );
}

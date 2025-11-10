import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/libros/${id}`).then((res) => setBook(res.data));
  }, [id]);

  if (!book) return <Loader />;

  return (
    <div className="page">
      <h2>{book.titulo}</h2>
      <p><strong>Autor:</strong> {book.autor}</p>
      <p><strong>Descripción:</strong> {book.descripcion}</p>
      <p><strong>Disponibles:</strong> {book.disponibles}</p>

      <button onClick={() => alert("Préstamo simulado")}>
        Solicitar Préstamo
      </button>
    </div>
  );
}


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setError } from "../store/uiSlice";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  async function fetchBook() {
    try {
      dispatch(setLoading(true));
      const res = await api.get(`/libros/${id}`);
      setBook(res.data);
    } catch (e) {
      dispatch(setError("No se pudo cargar el libro"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (loading || !book) return <Loader />;

  return (
    <div>
      <h1>{book.titulo}</h1>
      <p><b>Autor:</b> {book.autor}</p>
      <p><b>Descripción:</b> {book.descripcion}</p>

      <button onClick={async () => {
        try {
          await api.post("/prestamos", {
            usuarioId: 1,
            libroId: book.id
          });
          alert("Préstamo solicitado.");
        } catch {
          alert("Error al solicitar préstamo.");
        }
      }}>
        Solicitar préstamo
      </button>
    </div>
  );
}

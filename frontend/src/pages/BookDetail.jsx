import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../api/books";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { createLoan } from "../api/loans";
import { useSelector } from "react-redux";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useSelector((s) => s.auth.user);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (e) {
        setError("No se encontró el libro.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleRequestLoan = async () => {
    try {
      await createLoan({ usuarioId: user?.id, libroId: id });
      alert("Solicitud de préstamo enviada.");
    } catch (e) {
      alert("No se pudo solicitar el préstamo.");
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            {book.portada_url ? (
              <img
                src={book.portada_url}
                alt={book.titulo}
                className="object-contain h-full"
              />
            ) : (
              <div className="text-gray-400">Sin portada</div>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-2xl font-semibold">{book.titulo}</h1>
          <div className="text-sm text-gray-500 mt-1">{book.autor}</div>
          <p className="mt-4 text-sm text-gray-700">
            {book.descripcion || "Sin descripción"}
          </p>

          <div className="mt-6 flex gap-3 items-center">
            <div>
              <div className="text-xs text-gray-500">Disponibles</div>
              <div className="text-lg font-semibold">
                {book.cantidad_disponible ?? 0}
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-500">Total</div>
              <div className="text-lg font-semibold">
                {book.cantidad_total ?? "—"}
              </div>
            </div>

            <div className="ml-auto">
              <button
                className="px-4 py-2 rounded-xl bg-blue-600 text-white disabled:opacity-50"
                disabled={(book.cantidad_disponible ?? 0) <= 0}
                onClick={handleRequestLoan}
              >
                Solicitar Préstamo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

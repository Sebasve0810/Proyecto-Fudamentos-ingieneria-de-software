import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <article className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition-shadow">
      <Link to={`/libro/${book.id}`} className="block">
        <div className="w-full h-44 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
          {book.portada_url ? (
            <img
              src={book.portada_url}
              alt={book.titulo}
              className="object-contain h-full"
            />
          ) : (
            <div className="text-sm text-gray-400">Sin portada</div>
          )}
        </div>

        <h4 className="mt-3 font-semibold text-lg line-clamp-2">
          {book.titulo}
        </h4>
        <div className="text-xs text-gray-500 mt-1">{book.autor}</div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="text-gray-600">{book.categoria || "—"}</div>
          <div
            className={`px-2 py-0.5 rounded-full text-xs ${
              (book.cantidad_disponible ?? 0) > 0
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {(book.cantidad_disponible ?? 0) > 0 ? "Disponible" : "Agotado"}
          </div>
        </div>
      </Link>
    </article>
  );
}

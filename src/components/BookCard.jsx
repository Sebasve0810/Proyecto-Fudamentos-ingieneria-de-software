import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  if (!book) return null;

  return (
    <article className="card flex flex-col justify-between h-full hover:shadow-md hover:-translate-y-0.5 transition">
      <div>
        <h3 className="text-base font-semibold text-slate-900 line-clamp-2">
          {book.titulo}
        </h3>
        {book.autor && (
          <p className="text-sm text-slate-500 mt-1">{book.autor}</p>
        )}
        {book.categoria && (
          <span className="inline-flex mt-3 px-2 py-0.5 rounded-full text-[11px] bg-slate-100 text-slate-600">
            {book.categoria}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        {book.disponible ? (
          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
            Disponible
          </span>
        ) : (
          <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
            No disponible
          </span>
        )}

        <Link to={`/book/${book.id}`}>
          <button className="btn btn-primary text-xs">Ver detalle</button>
        </Link>
      </div>
    </article>
  );
}

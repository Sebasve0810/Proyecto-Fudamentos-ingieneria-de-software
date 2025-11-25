import React from "react";

export default function BookTable({ books, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl border mt-4">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500">
          <tr>
            <th className="px-4 py-3">Título</th>
            <th className="px-4 py-3">Autor</th>
            <th className="px-4 py-3">Categoría</th>
            <th className="px-4 py-3">Año</th>
            <th className="px-4 py-3">Disp.</th>
            <th className="px-4 py-3 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id} className="border-t hover:bg-slate-50">
              <td className="px-4 py-3">{b.titulo}</td>
              <td className="px-4 py-3">{b.autor}</td>
              <td className="px-4 py-3">{b.categoria}</td>
              <td className="px-4 py-3">{b.anio}</td>
              <td className="px-4 py-3">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    b.disponible
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {b.disponible ? "Sí" : "No"}
                </span>
              </td>
              <td className="px-4 py-3 text-right space-x-2">
                <button
                  className="text-xs px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100"
                  onClick={() => onEdit(b)}
                >
                  Editar
                </button>
                <button
                  className="text-xs px-3 py-1.5 rounded-xl border border-red-500 text-red-600 hover:bg-red-50"
                  onClick={() => onDelete(b.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

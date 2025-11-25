import React, { useState, useEffect } from "react";

export default function BookFormModal({ open, onClose, onSubmit, initial }) {
  const [form, setForm] = useState({
    isbn: "",
    titulo: "",
    autor: "",
    categoria: "",
    anio: "",
    disponible: true,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (initial) {
      setForm({
        isbn: initial.isbn || "",
        titulo: initial.titulo || "",
        autor: initial.autor || "",
        categoria: initial.categoria || "",
        anio: initial.anio || "",
        disponible: Boolean(initial.disponible),
      });
    } else {
      setForm({
        isbn: "",
        titulo: "",
        autor: "",
        categoria: "",
        anio: "",
        disponible: true,
      });
    }
  }, [initial]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.isbn || !form.titulo || !form.autor) {
      setError("ISBN, título y autor son obligatorios.");
      return;
    }
    setError("");
    onSubmit(form);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
        <h2 className="text-lg font-semibold mb-1">
          {initial ? "Editar libro" : "Agregar libro"}
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          Completa la información del libro en el sistema.
        </p>

        {error && (
          <div className="mb-3 text-xs text-red-700 bg-red-50 border border-red-100 px-3 py-2 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium mb-1">ISBN</label>
              <input
                className="input"
                name="isbn"
                value={form.isbn}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium mb-1">Título</label>
              <input
                className="input"
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Autor</label>
              <input
                className="input"
                name="autor"
                value={form.autor}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Categoría</label>
              <input
                className="input"
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Año</label>
              <input
                className="input"
                name="anio"
                value={form.anio}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                id="disponible"
                type="checkbox"
                name="disponible"
                checked={form.disponible}
                onChange={handleChange}
              />
              <label htmlFor="disponible" className="text-xs text-slate-700">
                Disponible
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              {initial ? "Guardar cambios" : "Crear libro"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Buscar por título, autor o categoría...",
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button
        className="px-3 py-2 rounded-lg border"
        onClick={() => onChange("")}
        type="button"
        title="Limpiar búsqueda"
      >
        ✕
      </button>
    </div>
  );
}


// src/components/SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch, placeholder = "Buscar..." }) {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(term.trim());
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <input
        type="text"
        placeholder={placeholder}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{ padding: 8, width: "70%", marginRight: 8 }}
      />
      <button type="submit">Buscar</button>
      <button type="button" onClick={() => { setTerm(""); onSearch(""); }} style={{ marginLeft: 8 }}>
        Limpiar
      </button>
    </form>
  );
}

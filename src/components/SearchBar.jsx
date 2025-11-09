import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(term);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

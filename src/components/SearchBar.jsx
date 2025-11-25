import React, { useState } from "react";

export default function SearchBar({ onSearch, placeholder = "Buscar libros..." }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    if (onSearch) onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="relative max-w-md">
        <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
          🔍
        </span>
        <input
          className="input pl-9"
          type="text"
          placeholder={placeholder}
          value={term}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

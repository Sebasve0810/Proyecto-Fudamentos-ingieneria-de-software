import { useEffect, useState } from "react";
import api from "../services/api";
import Loader from "../components/Loader";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const res = await api.get("/libros");
      setBooks(res.data);
      setFiltered(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="page">
      <h2>Catálogo de Libros</h2>

      <SearchBar
        placeholder="Buscar por título..."
        data={books}
        onFilter={setFiltered}
      />

      <div className="grid">
        {filtered.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}


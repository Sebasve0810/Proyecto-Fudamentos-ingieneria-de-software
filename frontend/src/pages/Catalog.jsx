import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getBooks();
      setBooks(data);
    } catch (e) {
      setError("No se pudieron cargar los libros.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = books.filter((b) => {
    const s = q.toLowerCase();
    return (
      b.titulo?.toLowerCase().includes(s) ||
      b.autor?.toLowerCase().includes(s) ||
      (b.categoria || "").toLowerCase().includes(s)
    );
  });

  return (
    <section className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Catálogo</h1>

      <div className="mb-4">
        <SearchBar value={q} onChange={setQ} />
      </div>

      {loading && <Loader />}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-center text-sm text-gray-500 mt-6">
          No se encontraron libros.
        </div>
      )}
    </section>
  );
}

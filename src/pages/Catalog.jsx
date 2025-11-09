import { useEffect, useState } from "react";
import api from "../services/api";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setError } from "../store/uiSlice";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  async function fetchBooks() {
    try {
      dispatch(setLoading(true));
      const res = await api.get("/libros");
      setBooks(res.data);
      setFiltered(res.data);
    } catch (err) {
      dispatch(setError("Error cargando el catálogo"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  function handleSearch(term) {
    if (!term) {
      setFiltered(books);
      return;
    }

    const result = books.filter((b) =>
      b.titulo.toLowerCase().includes(term.toLowerCase())
    );

    setFiltered(result);
  }

  if (loading) return <Loader />;

  return (
    <div className="catalog">
      <h1>Catálogo de Libros</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="grid">
        {filtered.length === 0 ? (
          <p>No hay resultados para la búsqueda.</p>
        ) : (
          filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        )}
      </div>
    </div>
  );
}

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import api from "../services/api";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export default function StudentDashboard() {
  const user = useSelector((state) => state.auth.user);
  const [books, setBooks] = useState([]);
  const [loans, setLoans] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
    fetchLoans();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await api.get("/libros");
      setBooks(res.data);
    } catch (err) {
      console.error("Error cargando libros:", err);
    }
  };

  const fetchLoans = async () => {
    try {
      const res = await api.get(`/prestamos/usuario/${user?.id}`);
      setLoans(res.data);
    } catch (err) {
      console.error("Error cargando préstamos:", err);
    }
  };

  const filteredBooks = books.filter((b) =>
    b.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Bienvenido, {user?.name}</h2>
      <p>Panel del Estudiante</p>

      <section>
        <h3>Buscar Libros</h3>
        <SearchBar value={search} onChange={setSearch} />
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h3>Mis Préstamos</h3>
        {loans.length === 0 ? (
          <p>No tienes préstamos activos.</p>
        ) : (
          <ul>
            {loans.map((loan) => (
              <li key={loan.id}>
                {loan.libroTitulo} – Estado: {loan.estado}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

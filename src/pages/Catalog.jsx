import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader.jsx";
import SearchBar from "../components/SearchBar.jsx";
import BookCard from "../components/BookCard.jsx";

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const page = Number(searchParams.get("page") || 1);

  const [data, setData] = useState({ books: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    setError("");

    api
      .get("/books", {
        params: { search: q, category, page, limit: 12 }
      })
      .then((res) => {
        if (cancel) return;
        setData({
          books: res.data.libros || res.data.items || [],
          total: res.data.total || 0
        });
      })
      .catch((e) => setError(e.message || "Error al cargar libros"))
      .finally(() => !cancel && setLoading(false));

    return () => { cancel = true; };
  }, [q, category, page]);

  const onSearch = (nextQ) => {
    const next = new URLSearchParams(searchParams);
    if (nextQ) next.set("q", nextQ); else next.delete("q");
    next.set("page", "1");
    setSearchParams(next);
  };

  if (loading) return <Loader />;
  if (error) return <p style={{color: "crimson"}}>{error}</p>;

  return (
    <div style={{ padding: 16 }}>
      <h1>Catálogo</h1>
      <SearchBar initialValue={q} onSearch={onSearch} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginTop: 16 }}>
        {data.books.map((b) => (
          <Link key={b.id} to={`/book/${b.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <BookCard book={b} />
          </Link>
        ))}
      </div>

      {/* paginación mínima */}
      <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
        <button
          onClick={() => setSearchParams({ q, category, page: Math.max(1, page - 1) })}
          disabled={page <= 1}
        >
          Anterior
        </button>
        <span>Página {page}</span>
        <button
          onClick={() => setSearchParams({ q, category, page: page + 1 })}
          disabled={data.books.length === 0}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

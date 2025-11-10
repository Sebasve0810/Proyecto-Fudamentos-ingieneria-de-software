// src/pages/LoansPage.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyLoans } from "../store/loansSlice";
import Loader from "../components/Loader";
import LoanCard from "../components/LoanCard";
import SearchBar from "../components/SearchBar";

export default function LoansPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { items, loading, error } = useSelector((state) => state.loans);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (user) dispatch(fetchMyLoans(user.id || user._id));
  }, [dispatch, user]);

  useEffect(() => {
    setFiltered(items || []);
  }, [items]);

  function handleSearch(term) {
    if (!term) return setFiltered(items);
    const t = term.toLowerCase();
    setFiltered(
      (items || []).filter((l) => {
        const title = (l.libro?.titulo || l.titulo || "").toLowerCase();
        const status = (l.estado || l.status || "").toLowerCase();
        return title.includes(t) || status.includes(t);
      })
    );
  }

  if (loading) return <Loader />;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div className="page">
      <h2>Mis Préstamos</h2>

      <SearchBar onSearch={handleSearch} placeholder="Buscar por título o estado..." />

      {filtered.length === 0 && <p>No se encontraron préstamos.</p>}

      <div>
        {filtered.map((loan) => (
          <LoanCard key={loan.id || loan._id} loan={loan} />
        ))}
      </div>
    </div>
  );
}

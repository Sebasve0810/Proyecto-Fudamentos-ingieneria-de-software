// src/components/LoanCard.jsx
import React from "react";

export default function LoanCard({ loan }) {
  // Asumo fields: id, libro (objeto), fechaSolicitud, fechaDevolucion, estado
  const libro = loan.libro || loan.book || {};
  return (
    <div className="loan-card" style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6, marginBottom: 8 }}>
      <h4>{libro.titulo || loan.titulo || "Título desconocido"}</h4>
      <p><strong>Autor:</strong> {libro.autor || loan.autor}</p>
      <p><strong>Solicitado:</strong> {new Date(loan.fechaSolicitud || loan.createdAt || loan.solicitadoAt).toLocaleString()}</p>
      {loan.fechaDevolucion && <p><strong>Fecha devolución:</strong> {new Date(loan.fechaDevolucion).toLocaleDateString()}</p>}
      <p><strong>Estado:</strong> {loan.estado || loan.status || "pendiente"}</p>
    </div>
  );
}

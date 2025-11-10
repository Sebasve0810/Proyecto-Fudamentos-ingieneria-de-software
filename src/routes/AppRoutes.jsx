import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Catalog from "../pages/Catalog.jsx";
import BookDetail from "../pages/BookDetail.jsx";

// (opcional) placeholder si luego agregas login
const Login = () => <div>Login</div>;

export default function AppRoutes() {
  return (
    <Routes>
      {/* públicas */}
      <Route path="/" element={<Catalog />} />
      <Route path="/book/:id" element={<BookDetail />} />
      <Route path="/login" element={<Login />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

import React from "react";
import Navbar from "./Navbar";

export default function PageLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {title && (
          <header className="mb-4">
            <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
            {subtitle && (
              <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 text-xs text-slate-400 flex justify-between">
          <span>Sistema de Gestión de Biblioteca Digital</span>
          <span>Grupo 5 – Fundamentos de Ingeniería de Software</span>
        </div>
      </footer>
    </div>
  );
}

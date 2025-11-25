import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import BibliotecarioDashboard from "./pages/BibliotecarioDashboard";
import GestionLibros from "./pages/GestionLibros";
import Catalog from "./pages/Catalog";
import BookDetail from "./pages/BookDetail";
import LoginPage from "./pages/LoginPage";

import RequireRole from "./auth/RequireRole";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          {/* Ruta pública */}
          <Route path="/login" element={<LoginPage />} />

          {/* Rutas protegidas */}
          <Route
            path="/"
            element={
              <RequireRole role="bibliotecario">
                <BibliotecarioDashboard />
              </RequireRole>
            }
          />

          <Route
            path="/gestion-libros"
            element={
              <RequireRole role="bibliotecario">
                <GestionLibros />
              </RequireRole>
            }
          />

          <Route
            path="/catalogo"
            element={
              <RequireRole role="bibliotecario">
                <Catalog />
              </RequireRole>
            }
          />

          <Route
            path="/libro/:id"
            element={
              <RequireRole role="bibliotecario">
                <BookDetail />
              </RequireRole>
            }
          />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

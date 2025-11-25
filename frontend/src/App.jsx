import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import BibliotecaPage from "./pages/BibliotecaPage";
import GestionLibrosPage from "./pages/GestionLibrosPage";
import LoginPage from "./pages/LoginPage";
import RequireRole from "./auth/RequireRole";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <RequireRole role="bibliotecario">
                <BibliotecaPage />
              </RequireRole>
            }
          />

          <Route
            path="/gestion-libros"
            element={
              <RequireRole role="bibliotecario">
                <GestionLibrosPage />
              </RequireRole>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

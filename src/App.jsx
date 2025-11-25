<Routes>
  <Route path="/" element={<Catalog />} />
  <Route path="/libro/:id" element={<BookDetail />} />

  <Route
    path="/admin"
    element={
      <RequireRole role="bibliotecario">
        <BibliotecarioDashboard />
      </RequireRole>
    }
  />

  <Route
    path="/libros"
    element={
      <RequireRole role="bibliotecario">
        <GestionLibros />
      </RequireRole>
    }
  />
</Routes>


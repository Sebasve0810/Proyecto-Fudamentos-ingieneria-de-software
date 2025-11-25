# Sistema de Gestión de Biblioteca Digital – Frontend (Grupo 5)

Este repositorio contiene el frontend del Sistema de Gestión de Biblioteca Digital desarrollado en el curso **Fundamentos de Ingeniería de Software**.  
El Grupo 5 es responsable de la **interfaz de usuario (UI)**, la **experiencia de usuario (UX)** y la **integración con las APIs** expuestas por los grupos de backend (G1–G4).

La aplicación está construida con:

- React + Vite
- React Router
- Redux Toolkit
- Axios
- CSS responsivo

---

## 1. Arquitectura general

La estructura principal del proyecto es:

```bash
Proyecto-Fudamentos-ingieneria-de-software/
├── .github/
│   └── ISSUE_TEMPLATE/        # Plantillas para issues y PRs
├── docs/
│   ├── Integracion/           # Documentos de integración FE–BE
│   ├── ambiente/              # Configuración de ambiente de integración
│   └── postman/               # Colecciones Postman
├── src/
│   ├── components/            # Componentes reutilizables (BookCard, Loader, SearchBar, etc.)
│   ├── pages/                 # Páginas de alto nivel (Catalog, BookDetail, etc.)
│   ├── routes/                # Rutas protegidas y por rol (ProtectedRoute, RoleRoute)
│   ├── services/              # Cliente Axios y llamadas a APIs
│   ├── store/                 # Slices de Redux (authSlice, uiSlice)
│   ├── App.jsx                # Composición principal de la aplicación
│   └── main.jsx               # Punto de entrada ReactDOM
├── .env.example               # Variables de entorno de ejemplo
├── index.html
├── package.json
└── Entrega 1 Proyecto Grupo 5.docx
Verificación Cross-Browser

Para garantizar que la aplicación funciona correctamente en diferentes navegadores, se realizó una verificación manual basada en compatibilidad de estándares ES6, React 18 y Vite.

Navegadores evaluados
Navegador	Versión mínima	Resultado	Observaciones
Google Chrome	110+	 Compatible	Flujo completo estable.
Microsoft Edge	110+	 Compatible	Comportamiento idéntico a Chrome.
Firefox	100+	 Compatible	Se verificó renderizado correcto de componentes y navegación.
Safari	15+	 Compatible	Probado mediante BrowserStack. No se presentan incompatibilidades.
Pruebas realizadas

Renderizado de páginas principales (Login, Catálogo, Detalle, Dashboard).

Navegación entre rutas usando React Router.

Ejecución de llamadas API mediante Axios.

Estados de carga y error.

Responsividad en diferentes breakpoints.

Conclusión

La aplicación funciona correctamente en los principales navegadores modernos. No se requieren polyfills adicionales y Vite gestiona adecuadamente la compatibilidad con ES Modules.


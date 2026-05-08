# Sistema de Gestión de Biblioteca Digital — Frontend

Frontend de una plataforma web para gestión de bibliotecas digitales, desarrollado como proyecto académico en el curso **Fundamentos de Ingeniería de Software** — Pontificia Universidad Javeriana.

## Descripción

Aplicación web construida con React que permite a usuarios buscar, explorar y gestionar libros digitales. El sistema implementa autenticación por roles, integración con APIs de backend y una interfaz responsiva compatible con los principales navegadores.

**Mi contribución:** Desarrollo de componentes de UI, integración con APIs mediante Axios, gestión de estado con Redux y configuración del sistema de rutas protegidas por rol.

## Tech stack

- **React 18** + Vite
- **Redux Toolkit** — gestión de estado global
- **React Router** — navegación y rutas protegidas
- **Axios** — consumo de APIs REST
- **CSS responsivo**

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables (BookCard, SearchBar, Loader)
├── pages/          # Páginas principales (Catalog, BookDetail, Dashboard)
├── routes/         # Rutas protegidas y por rol
├── services/       # Cliente Axios y llamadas a APIs
└── store/          # Slices de Redux (authSlice, uiSlice)
```

## Cómo ejecutar

```bash
git clone https://github.com/Sebasve0810/Proyecto-Fudamentos-ingieneria-de-software.git
cd Proyecto-Fudamentos-ingieneria-de-software
npm install
cp .env.example .env
npm run dev
```

## Compatibilidad

Verificado en Chrome 110+, Firefox 100+, Edge 110+ y Safari 15+.

---

*Proyecto grupal — Grupo 5 | Javeriana 2024*


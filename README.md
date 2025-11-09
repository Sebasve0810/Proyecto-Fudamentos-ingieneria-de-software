##  Integración (Responsable: Líder de Integración – Grupo 5)

### 🔗 Ambientes
- Frontend: https://<url-frontend>
- Backend: https://<url-backend>
- Swagger General: https://<url-swagger>

###  Variables de entorno
El proyecto usa las siguientes variables (ver `.env.example`):

```
VITE_API_BASE_URL=
VITE_AUTH_URL=
VITE_CATALOG_URL=
VITE_LOANS_URL=
```

###  Contratos API confirmados
- **Login:** POST `/auth/login`
- **Catálogo:** GET `/libros`
- **Detalle:** GET `/libros/:id`
- **Préstamo:** POST `/prestamos`
- **Mis préstamos:** GET `/prestamos/usuario/:id`

###  Flujo mínimo E2E
1. Login  
2. Catálogo  
3. Detalle libro  
4. Solicitar préstamo  
5. Mis préstamos

###  Estado actual de integración
- Ambiente:  Activo /  Inestable /  Caído  
- Contratos:  Estables /  Cambios pendientes  
- Últimas actualizaciones:  
- Bloqueos detectados:

# Car Management App

Aplicación CRUD completa para gestión de autos, construida con React, TypeScript y las mejores prácticas modernas de desarrollo frontend.

## Stack Tecnológico

### Core
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server

### Gestión de Estado y Peticiones HTTP
- **TanStack Query (React Query)** - Gestión de estado del servidor, cache y sincronización
- **Axios** - Cliente HTTP para peticiones a la API

### Routing
- **React Router DOM v7** - Enrutamiento de la aplicación

### Formularios y Validación
- **React Hook Form** - Gestión de formularios performante
- **Zod** - Validación de esquemas con TypeScript
- **@hookform/resolvers** - Integración de Zod con React Hook Form

### Estilos
- **Tailwind CSS v4** - Framework de utilidades CSS
- **@tailwindcss/vite** - Integración de Tailwind con Vite

### Notificaciones
- **React Toastify** - Notificaciones toast (instalado, listo para usar)

## 📁 Estructura del Proyecto


src/
├── api/ # Capa de API
│ ├── client/ # Configuración de Axios
│ ├── endpoints/ # Definición de endpoints
│ └── services/ # Servicios de negocio
├── components/ # Componentes React
│ ├── atoms/ # Componentes básicos (Input, etc.)
│ ├── organisms/ # Componentes complejos (CarForm, CarTable)
│ └── forms/ # Formularios
├── hooks/ # Custom hooks
│ ├── useCarsQuery.ts # Hook para queries de autos
│ └── useMutations.ts # Hook para mutations (create, update, delete)
├── models/ # Modelos de datos
│ └── car/
│ ├── model/ # Schemas Zod
│ └── types/ # Tipos TypeScript
├── pages/ # Páginas de la aplicación
├── routes/ # Configuración de rutas
└── main.tsx # Punto de entrada


## 🚧 Próximas Mejoras

- [ ] Implementar funcionalidad de eliminar
- [ ] Agregar confirmación antes de eliminar
- [ ] Implementar búsqueda y filtros
- [ ] Agregar paginación
- [ ] Implementar notificaciones toast
- [ ] Agregar tests unitarios


## 📄 Licencia

Este proyecto es Publico.

---

Desarrollado con ❤️ usando React, TypeScript y TanStack Query
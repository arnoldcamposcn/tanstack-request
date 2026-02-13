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

### Optimización
- **use-debounce** - Hook para optimizar búsquedas y reducir peticiones HTTP

### Notificaciones
- **React Toastify** - Notificaciones toast (instalado, listo para usar)

## 📁 Estructura del Proyecto

src/
├── api/ # Capa de API
│ ├── client/ # Configuración de Axios
│ ├── endpoints/ # Definición de endpoints
│ └── services/ # Servicios de negocio
├── components/ # Componentes React
│ ├── atoms/ # Componentes básicos (Input, SearchInput, etc.)
│ ├── organisms/ # Componentes complejos (CarForm, CarTable)
│ └── forms/ # Formularios
├── hooks/ # Custom hooks
│ ├── useCarsQuery.ts # Hook para queries de autos con soporte de búsqueda
│ └── useMutations.ts # Hook para mutations (create, update, delete)
├── models/ # Modelos de datos
│ └── car/
│ ├── model/ # Schemas Zod
│ └── types/ # Tipos TypeScript
├── pages/ # Páginas de la aplicación
├── routes/ # Configuración de rutas
└── main.tsx # Punto de entrada

## ✨ Funcionalidades Implementadas

### ✅ CRUD Completo
- **Crear autos** - Formulario con validación usando React Hook Form y Zod
- **Listar autos** - Tabla responsive con información completa
- **Actualizar autos** - Hook de mutación listo (UI pendiente)
- **Eliminar autos** - Hook de mutación listo (UI pendiente)

### ✅ Búsqueda Optimizada
- **Buscador en tiempo real** - Componente `SearchInput` para búsqueda por marca, modelo, color
- **Debounce implementado** - Optimización con `use-debounce` (500ms) para reducir peticiones HTTP
- **Cache inteligente** - React Query cachea resultados por término de búsqueda
- **Parámetro de query** - Búsqueda mediante parámetro `q` en la API

### ✅ Gestión de Estado
- **React Query** - Cache automático y sincronización de datos
- **Invalidación de queries** - Actualización automática tras mutaciones
- **Estados de carga** - Manejo de loading y error states

### ✅ Validación y Formularios
- **Validación con Zod** - Schemas tipados para validación de datos
- **React Hook Form** - Gestión performante de formularios
- **Mensajes de error** - Feedback visual en campos con errores

## 🚧 Próximas Mejoras

- [x] Implementar buscador con debounce para optimizar peticiones
- [ ] Implementar funcionalidad de eliminar con confirmación
- [ ] Implementar funcionalidad de editar autos
- [ ] Agregar confirmación antes de eliminar
- [ ] Agregar paginación
- [ ] Implementar notificaciones toast con React Toastify
- [ ] Agregar más tests unitarios
- [ ] Mejorar manejo de errores con mensajes descriptivos

## 🚀 Características Técnicas

### Optimización de Búsqueda
El buscador utiliza `use-debounce` para esperar 500ms después de que el usuario deje de escribir antes de realizar la petición HTTP. Esto reduce significativamente el número de peticiones al servidor y mejora el rendimiento.

### Arquitectura
- **Separación de responsabilidades** - Capas bien definidas (API, servicios, hooks, componentes)
- **TypeScript estricto** - Tipado completo en toda la aplicación
- **Componentes reutilizables** - Arquitectura basada en Atomic Design
- **Custom hooks** - Lógica de negocio encapsulada en hooks reutilizables

## 📄 Licencia

Este proyecto es Publico.

---

Desarrollado con ❤️ usando React, TypeScript y TanStack Query
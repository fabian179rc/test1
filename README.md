# Catálogo de Sistemas HyS

Catálogo profesional de productos de Higiene y Seguridad Ocupacional construido con React + Vite.

## 🚀 Instalación Rápida

### Requisitos previos

- Node.js 14+ (descargar desde https://nodejs.org/)
- npm o yarn

### Pasos para instalar y ejecutar

1. **Descargar y extraer el ZIP**
   - Extrae el archivo ZIP en la carpeta donde quieras el proyecto
   - Abre terminal/CMD en esa carpeta

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   - Automáticamente se abrirá en `http://localhost:3000`
   - Si no, copia y pega la URL en tu navegador

5. **Compilar para producción** (cuando esté listo)
   ```bash
   npm run build
   ```

## 📁 Estructura del Proyecto

```
catalogo-hys/
├── src/
│   ├── main.jsx          # Punto de entrada
│   └── App.jsx           # Componente principal
├── index.html            # HTML principal
├── package.json          # Dependencias
├── vite.config.js        # Configuración de Vite
├── .gitignore
└── README.md
```

## 🎯 Características

✅ **10 Productos** con títulos, descripciones y categorías  
✅ **Mockups visuales** únicos para cada producto  
✅ **Landing pages individuales** al clickear cada producto  
✅ **Diseño responsivo** (funciona en móvil, tablet, desktop)  
✅ **Animaciones suaves** sin excesos  
✅ **Enlaces a sitios** de cada producto  
✅ **Paleta profesional** de colores

## 🛠️ Desarrollo

### Estructura de carpetas recomendada (opcional)

```
src/
├── components/
│   ├── Catalogo.jsx
│   ├── ProductCard.jsx
│   └── ProductDetail.jsx
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

### Editar productos

Para agregar, eliminar o modificar productos, edita el array `products` en `src/App.jsx`:

```javascript
const products = [
  {
    id: 1,
    title: "Nombre del Producto",
    category: "Categoría",
    description: "Descripción corta",
    fullDescription: "Descripción completa",
    url: "https://link-del-producto.com",
    mockupGradient: "linear-gradient(135deg, #color1 0%, #color2 100%)",
    icon: "Emoji",
  },
  // ... más productos
];
```

### Cambiar colores y estilos

Todos los estilos están en **inline CSS** dentro de los componentes. Busca y reemplaza colores:

- **Azul principal**: `#0d7fbf` y `#0a5f99`
- **Grises**: `#2c3e50`, `#7f8c8d`, `#e0e6ed`
- **Fondos**: `#f8f9fa`, `#eef2f5`

## 📦 Compilar para subir a hosting

1. Ejecuta:

   ```bash
   npm run build
   ```

2. Sube la carpeta `dist/` a tu hosting (Vercel, Netlify, etc.)

## 🌐 Desplegar en Vercel (Gratuito)

1. Instala Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Desde la carpeta del proyecto:

   ```bash
   vercel
   ```

3. Sigue las instrucciones en pantalla

## 📝 Notas

- Los links de productos apuntan a `https://tupuntodigital.shop`
- Los precios fueron removidos deliberadamente
- El proyecto usa React 18 y Vite 4
- Compatible con todas las versiones modernas de navegadores

## 🐛 Solucionar problemas

**Error: "node_modules not found"**

```bash
npm install
```

**Error: "Port 3000 already in use"**

```bash
npm run dev -- --port 3001
```

**Error: "React is not defined"**

- El proyecto ya incluye todos los imports necesarios
- No hagas cambios en los imports de React

## 📧 Soporte

Para soporte técnico, revisa:

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)

---

**© 2026 Sistema Maestro HyS** - Soluciones profesionales en Higiene y Seguridad Ocupacional

# Helados Panda — Landing de venta en frío

## Contexto

El repo actual (`catalogo-hys`) es un catálogo React+Vite para un negocio de Higiene y Seguridad Ocupacional, con tema oscuro tipo panel técnico. Se reconvierte por completo a una landing page de **Helados Panda** (helados, alfajores, barquillos — venta mayorista/distribución en frío), reemplazando todo el contenido, paleta y estructura anteriores. No queda contenido de HyS en el sitio final.

## Assets de origen

El usuario compartió 8 fotos de producto/promocionales y 1 logo, pegados en el chat como capturas de pantalla. Como no hay forma de exportar imágenes pegadas en la conversación a disco, se ubicaron los archivos reales ya guardados por el sistema en `Pictures/Screenshots` (mismos timestamps/orden) y se copiaron a `src/assets/panda-src/`:

| Archivo | Contenido |
|---|---|
| `00-logo.png` | Logo "Helados Panda" (círculo celeste, panda, texto azul glossy) |
| `01-alfajores-mini-box.png` | Caja "Mini Alfajores" 22 unidades |
| `02-alfajor-otono.png` | Bolsa individual alfajor Panda, 40g |
| `03-barquillos.png` | Barquillos Panda (fondo choco) |
| `04-helados-potes.png` | 3 potes 1L: Ananá Francés, Yogurt Griego, Durazno |
| `05-helados-palitos.png` | 4 palitos: Chocolate, Dulce de leche, Blue Ice, Frutilla |
| `06-cono-bunny.png` | Cono relleno de chocolate (imagen con conejo mascota de temporada) |
| `07-alfajor-llegaron.png` | Banner promocional "Llegaron" |
| `08-alfajor-tardes.png` | Banner promocional "El de todas las tardes" |

Estas imágenes se optimizan (recorte/compresión a `.webp`, ancho máx. razonable) durante la implementación y se mueven a `src/assets/products/` y `src/assets/banners/` con nombres definitivos. Los 8 archivos PNG originales en `panda-src/` son solo material de trabajo y no se referencian desde el código final (se eliminan del repo una vez migradas las versiones optimizadas).

## Contenido de producto (6 tarjetas)

Sin botón ni link por producto — es solo exhibición. Cada tarjeta: imagen, nombre, categoría/chip, descripción corta (1-2 líneas).

1. **Alfajores Mini** — caja x22 unidades — "El tamaño ideal para tu felicidad"
2. **Alfajor Panda Individual** — 40g, bañado en chocolate con dulce de leche
3. **Barquillos Panda** — barquillos rellenos bañados en chocolate
4. **Helados en Pote 1L** — Ananá Francés, Yogurt Griego con frutos rojos, Durazno
5. **Helados Palito** — Chocolate, Dulce de leche, Blue Ice, Frutilla
6. **Cono Relleno de Chocolate** — cucurucho relleno bañado en chocolate

## Paleta y tipografía

- Fondo principal: degradé celeste `#6FD1F2 → #1E8FD5` (tomado del logo)
- Superficies/tarjetas: blanco `#FFFFFF`, sombra suave, radios grandes (amigable, no técnico)
- Texto/botones fuertes: azul `#0B6FB0`
- Acento secundario (badges "Nuevo", detalles): rojo `#E63946`
- Botón de WhatsApp: verde oficial `#25D366` siempre (independiente de la paleta de marca, por reconocimiento estándar)
- Tipografía: reemplazar la monoespaciada técnica por una redondeada/amigable vía Google Fonts (Baloo 2 para títulos, Poppins o similar para cuerpo)
- Se elimina cualquier remanente visual "panel técnico" (dark mode, JetBrains Mono, acentos turquesa/ámbar) del sitio anterior

## Estructura de la página (una sola landing, sin routing ni modal)

1. **Header** fijo: logo + botón "Pedí por WhatsApp" (ancla al floating o abre wa.me directo)
2. **Hero**: fondo celeste degradé, título "El plan perfecto siempre incluye helado", subtítulo "24 años de experiencia 🍦", botón CTA grande a WhatsApp
3. **Grid de productos**: las 6 tarjetas descriptas arriba, sin interacción de click/modal
4. **Banner promocional** ancho usando `07-alfajor-llegaron` o `08-alfajor-tardes`
5. **"Por qué elegirnos"**: 3-4 puntos (24 años de experiencia, cadena de frío, distribución, calidad Panda)
6. **Footer**: logo, datos de contacto, número de WhatsApp, copyright
7. **Botón flotante de WhatsApp**: fijo abajo-derecha, visible en toda la página, ícono oficial de WhatsApp, enlaza a `https://wa.me/59895178119` con mensaje prellenado genérico (ej. "Hola! Quiero hacer un pedido a Helados Panda 🍦")

No hay botones de WhatsApp por producto. Hay dos puntos de contacto visibles, ambos apuntando al mismo enlace `wa.me`: el botón del header y el botón flotante.

## Arquitectura de componentes

Se reemplaza el `App.jsx` monolítico (863 líneas, con estado de modal) por componentes más chicos, ya que el modal de detalle deja de existir:

```
src/
  App.jsx                 // ensambla las secciones, sin estado de producto seleccionado
  components/
    Header.jsx
    Hero.jsx
    ProductGrid.jsx       // recibe la lista de productos, renderiza ProductCard
    ProductCard.jsx
    PromoBanner.jsx
    WhyUs.jsx
    Footer.jsx
    WhatsAppFloatingButton.jsx
  data/
    products.js           // array de 6 productos (nombre, categoría, descripción, imagen)
  assets/
    products/              // imágenes optimizadas de producto
    banners/                // imágenes optimizadas de banners promocionales
```

- No hay estado global ni routing: es contenido estático + un array de datos.
- El número de WhatsApp y el mensaje prellenado se centralizan en una constante (ej. `src/data/whatsapp.js`) para no repetir el número en 2 lugares (header + botón flotante).

## Fuera de alcance

- No se agregan precios (no se pidieron).
- No se arma carrito ni checkout.
- No se toca `dist/`, se regenera con `npm run build` al final.
- El deploy a GitHub Pages configurado en el último commit no se modifica salvo que rompa con el rebrand (se verifica en la implementación).

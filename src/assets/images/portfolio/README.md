# Capturas del portfolio (/landing)

Acá van las imágenes de los proyectos que se muestran en la sección
**Portfolio** de la página `/landing`.

## Cómo agregar la captura de un proyecto

1. Guardá la imagen en esta carpeta.
2. Nombrá el archivo **exactamente igual que el `slug`** del proyecto en
   [`src/i18n/copy.js`](../../../i18n/copy.js) → `landing.portfolio.items`.

   Ejemplo: si el item es `{ slug: 'proyecto-01', ... }`, el archivo debe
   llamarse `proyecto-01.webp` (o `.png` / `.jpg` / `.jpeg`).

3. Listo. La card la toma sola. No hace falta tocar ningún componente.

## Si un proyecto todavía no tiene captura

No pasa nada: mientras el archivo no exista, la card muestra un
**placeholder on-brand** (marco de navegador + tipo de proyecto + "Captura
en camino"). Se ve intencional, no roto. En cuanto sumás el archivo con el
nombre correcto, el placeholder se reemplaza por la imagen.

## Formatos aceptados

`.webp` (recomendado, más liviano), `.png`, `.jpg`, `.jpeg`.

## Consejo de encuadre

Las cards usan relación **16:10** y, al hover, la imagen "scrollea" de arriba
hacia abajo. Para lucir ese efecto, sirven bien las **capturas de página
completa** (largas). Una captura de ventana normal también funciona: simplemente
se panea un poco menos.

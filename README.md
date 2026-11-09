# Laboratorio de Investigación-Análisis de Aguas Industriales - ITA

Sitio web oficial del Laboratorio de Investigación-Análisis de Aguas Industriales del Instituto Tecnológico de Aguascalientes. Este proyecto es una Single Page Application (SPA) moderna, bilingüe (Español/Inglés) y totalmente responsiva, diseñada para mostrar los servicios, acreditaciones, equipo de trabajo y permitir el contacto con los clientes.

## Tecnologías Utilizadas

- **Framework:** Vue 3 (Composition API con `<script setup>`)
- **Bundler:** Vite
- **Estilos:** Tailwind CSS v4 (integrado como plugin de Vite)
- **Internacionalización:** Vue I18n (Español / Inglés)
- **Iconografía:** Lucide Vue Next
- **Calidad de Código:** ESLint y Prettier

## Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 20 o superior recomendada)
- npm (viene incluido con Node.js)
- Git

## Instalación y Desarrollo Local

1. **Clonar el repositorio (rama principal):**

   ```bash
   git clone https://github.com/tu-usuario/lab-agua-industrial.git
   cd lab-agua-industrial
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:5173`.

4. **Linter y Formateo:**
   Para mantener el código limpio, puedes ejecutar:
   ```bash
   npm run lint
   npm run format
   ```

## Generación del Distribuible (Build)

Para generar la versión optimizada para producción (minificada y lista para subir a cualquier servidor), ejecuta:

```bash
npm run build
```

Este comando compilará todo el proyecto y generará una carpeta llamada **`dist/`** en la raíz de tu proyecto. Esta carpeta contiene el `index.html` y todos los archivos estáticos (CSS, JS, imágenes) listos para producción.

## Estrategia de Despliegue: Rama `dist`

Este proyecto utiliza una estrategia de despliegue donde **el código fuente vive en la rama `main`** y **el distribuible generado vive en una rama llamada `dist`**.

Esto es especialmente útil para servidores en la nube (como Azure App Service, Nginx, Apache) que esperan recibir únicamente los archivos estáticos compilados y no el código fuente ni el `node_modules`.

### ¿Cómo generar y actualizar la rama `dist`? (Desde tu máquina local)

Sigue estos pasos cuando estés listo para desplegar una nueva versión:

1. **Asegúrate de estar en la rama `main` y tener los últimos cambios:**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Genera el distribuible:**

   ```bash
   npm run build
   ```

3. **Sube los cambios a la rama `dist` usando `git subtree`:**
   _(Este comando toma la carpeta `dist` y la empuja como una rama independiente al repositorio remoto)._
   ```bash
   git subtree push --prefix dist origin dist
   ```

> **Importante:** Al usar esta estrategia, la carpeta `dist/` debe estar incluida en el archivo `.gitignore` de la rama `main` para evitar conflictos de seguimiento de archivos.

---

### ¿Cómo clonar únicamente la rama `dist` en el servidor de producción?

Para configurar tu servidor (Azure, VPS, etc.) de tal forma que **solo descargue los archivos estáticos compilados** (ahorrando espacio y evitando descargar el código fuente de Vue), utiliza el siguiente comando de Git:

1. **Clonar solo la rama `dist` (sin historial de otras ramas):**

   ```bash
   git clone -b dist --single-branch https://github.com/yomidev/lab-agua-industrial.git /var/www/mi-sitio
   ```
   - `-b dist`: Le indica a Git que use la rama `dist` como predeterminada.
   - `--single-branch`: Evita descargar el historial de la rama `main`, ahorrando hasta un 80% de ancho de banda.
   - `/var/www/mi-sitio`: Es la ruta de destino en tu servidor (cámbiala por la que uses en Azure o en tu VPS).

2. **Actualizar el sitio cuando haya cambios (desde el servidor):**
   Una vez clonado, si haces un nuevo `git subtree push` desde tu computadora, solo debes ir al servidor y ejecutar:
   ```bash
   cd /var/www/mi-sitio
   git pull origin dist
   ```
   El servidor solo descargará los archivos nuevos o modificados, manteniendo el despliegue rápido y limpio.

---

## 📁 Estructura del Proyecto (Rama `main`)

```text
src/
├─ assets/          # Imágenes, logos y estilos globales (main.css)
├─ components/      # Componentes de Vue divididos por secciones (ui, layout, hero, etc.)
├─ composables/     # Lógica reutilizable (ej. useScrollSpy)
├─ data/            # Archivos JS con los datos estáticos (equipo, servicios, sitio)
├─ i18n/         # Archivos de traducción (es.js, en.js)
├─ App.vue          # Componente raíz
└─ main.js          # Punto de entrada de la aplicación
```

## Despliegue en Producción

- **Vercel / Netlify:** Conecta directamente la rama `main`. Estas plataformas detectan Vite automáticamente y ejecutan `npm run build`, sirviendo la carpeta `dist`.
- **Azure App Service / Servidores Web:** Conecta directamente la rama **`dist`** (usando el comando de clonación explicado arriba). Asegúrate de configurar el servidor para que sirva el `index.html` en todas las rutas (SPA fallback) para evitar errores 404 al recargar.

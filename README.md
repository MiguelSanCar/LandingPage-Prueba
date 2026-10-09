# Automatiza360 · Landing Page

Landing page de una empresa ficticia de **automatización e IA para negocios**, construida con **React 18 + Vite**. Es una *single-page* estática, 100 % en español, orientada a captar leads mediante la reserva de una llamada de diagnóstico.

> ## ⚠️ Aviso importante
>
> Este proyecto es **una prueba en local, creada con fines de aprendizaje** (curso de Claude). **No está preparado para producción.**
>
> - "Automatiza360" es una marca **ficticia**; no existe como empresa real.
> - Las métricas (`+120 procesos`, `15 h ahorradas`, `+38 %`…), los **testimonios** y sus nombres son **datos de ejemplo inventados**.
> - Los enlaces de reserva, legales y de contacto son **marcadores de posición** (`#reservar`, `#`, `hola@automatiza360.com`).
> - No hay backend, formularios funcionales, analítica, SEO avanzado, tests ni pipeline de despliegue.

---

## Índice

- [Finalidad](#finalidad)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura)
- [Secciones de la página](#secciones-de-la-página)
- [Puesta en marcha](#puesta-en-marcha)
- [Personalización](#personalización)
- [Limitaciones conocidas](#limitaciones-conocidas)
- [Pasos necesarios antes de producción](#pasos-necesarios-antes-de-producción)

---

## Finalidad

Practicar el desarrollo de una landing page moderna con React y Vite, cubriendo:

- Estructura de componentes y separación contenido / presentación.
- Sistema de diseño basado en variables CSS (*design tokens*).
- Diseño responsive (*mobile first* con *breakpoints* a 480 / 520 / 560 / 860 / 960 / 1080 px).
- Animaciones de entrada al hacer scroll con `IntersectionObserver`.
- Accesibilidad básica (`aria-*`, `prefers-reduced-motion`, HTML semántico).

El objetivo de negocio simulado es una única conversión: **reservar una llamada de diagnóstico gratuita**.

## Stack tecnológico

| Capa | Tecnología |
| --- | --- |
| Lenguaje | JavaScript (ES Modules) + JSX |
| UI | [React](https://react.dev/) `^18.3.1` (con `StrictMode`) |
| Build / dev server | [Vite](https://vite.dev/) `^4.5.3` + `@vitejs/plugin-react` `^4.2.1` |
| Estilos | CSS plano (sin preprocesadores ni frameworks), un archivo por componente |
| Tipografías | Inter y Plus Jakarta Sans vía Google Fonts |
| Iconos | SVG inline propios (sin librería de iconos) |

Sin TypeScript, router, gestor de estado, librería de UI, linter ni framework de testing.

## Estructura del proyecto

```text
landingpage/
├── index.html                 # Punto de entrada HTML (meta, fuentes, #root)
├── package.json               # Scripts y dependencias
├── vite.config.js             # Plugin de React; abre el navegador al arrancar
└── src/
    ├── main.jsx               # Monta <App /> e importa los estilos globales
    ├── App.jsx                # Composición de la página (orden de secciones)
    ├── data/
    │   └── content.js         # TODO el texto/copy de la web
    ├── components/
    │   ├── Navbar.jsx / .css      # Cabecera fija con menú móvil
    │   ├── Hero.jsx / .css        # Sección principal
    │   ├── HeroVisual.jsx / .css  # Mini-dashboard decorativo del hero
    │   ├── Sections.jsx / .css    # Resto de secciones y footer
    │   └── shared.jsx             # Icon, SectionHeader, Reveal
    └── styles/
        ├── tokens.css         # Variables de diseño (colores, tipografía, espaciado)
        └── base.css           # Reset y estilos globales
```

## Arquitectura

Es una SPA de **una sola página y sin enrutado**: la navegación son anclas (`#problemas`, `#faq`…) con `scroll-behavior: smooth`.

```text
index.html → main.jsx → App.jsx → [Navbar, Hero, Metrics, Problems, Benefits,
                                   HowItWorks, UseCases, Testimonials, FAQ,
                                   FinalCTA, Footer]
                                        ▲
                                        └── datos desde src/data/content.js
```

Decisiones de diseño destacables:

1. **Contenido separado de la presentación.** `content.js` exporta objetos y arrays con todo el copy; los componentes solo lo recorren (`.map`). Cambiar textos no exige tocar JSX.
2. **Design tokens.** `tokens.css` define en `:root` colores, tipografía fluida (`clamp()`), espaciado, radios, sombras y easing. El tema oscuro rojizo actual se cambia desde ese único archivo.
3. **Componentes compartidos** (`shared.jsx`):
   - `Icon`: mapa `nombre → path SVG` renderizado inline con `currentColor`.
   - `SectionHeader`: cabecera uniforme (eyebrow, título, subtítulo).
   - `Reveal`: envoltorio que añade la clase `is-visible` al entrar en el viewport mediante `IntersectionObserver` (con *fallback* si no está disponible) y admite `delay` escalonado.
4. **CSS por componente** importado junto a su JSX; sin CSS-in-JS ni CSS Modules, por lo que los selectores son globales y siguen una convención tipo BEM (`hero__title`, `faq__item`, `btn--primary`).
5. **Estado local mínimo** con `useState`: menú móvil y *scroll* en `Navbar`, acordeón abierto en `FAQ`, visibilidad en `Reveal`.

## Secciones de la página

| Orden | Sección | Ancla | Descripción |
| --- | --- | --- | --- |
| 1 | Navbar | — | Logo, enlaces, CTA; se vuelve sólida al hacer scroll |
| 2 | Hero | — | Propuesta de valor, CTA y mini-dashboard animado |
| 3 | Metrics | — | Cuatro cifras destacadas |
| 4 | Problems | `#problemas` | Cuatro problemas habituales del cliente |
| 5 | Benefits | `#beneficios` | Seis beneficios |
| 6 | HowItWorks | `#como-funciona` | Proceso en 3 pasos |
| 7 | UseCases | `#casos` | Siete casos de uso |
| 8 | Testimonials | — | Tres testimonios (ficticios) |
| 9 | FAQ | `#faq` | Acordeón de preguntas frecuentes |
| 10 | FinalCTA | `#reservar` | Llamada a la acción final |
| 11 | Footer | — | Navegación, legal y contacto |

## Puesta en marcha

Requisitos: [Node.js](https://nodejs.org/) 16+ y npm.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (abre el navegador automáticamente)
npm run dev

# Build de producción en /dist
npm run build

# Previsualizar el build localmente
npm run preview
```

## Personalización

- **Textos:** edita `src/data/content.js`.
- **Colores, fuentes y espaciados:** edita `src/styles/tokens.css`.
- **Enlace de reserva:** cambia `BOOKING_URL` en `content.js` (p. ej., por un enlace de Calendly o Cal.com).
- **Orden de secciones:** reordena los componentes en `src/App.jsx`.
- **Nuevos iconos:** añade una entrada al objeto `PATHS` de `src/components/shared.jsx`.

## Limitaciones conocidas

- `hero.title` de `content.js` **no se utiliza**: el título del hero está escrito directamente en `Hero.jsx` (para poder aplicar el degradado a parte del texto).
- Los comentarios de `tokens.css` (`/* índigo */`, `/* cian */`) están desfasados respecto a los colores actuales (rojo / rosa).
- Los enlaces de footer (`#`) y el CTA (`#reservar`) no llevan a ningún destino real.
- No hay metadatos Open Graph, favicon, `robots.txt` ni `sitemap.xml`.
- No hay páginas ni textos legales reales (aviso legal, privacidad, cookies) ni banner de consentimiento.
- Las fuentes se cargan desde Google Fonts (conexión externa y consideraciones de RGPD).
- No hay tests, linter, formateador ni CI.
- Los archivos fuente contienen BOM UTF-8 en algunos casos, sin consecuencias funcionales.

## Pasos necesarios antes de producción

Si algún día se quisiera llevar a un entorno real:

- [ ] Sustituir marca, métricas y testimonios por datos reales y verificables.
- [ ] Integrar un sistema real de reservas (Calendly, Cal.com…) o un formulario con backend.
- [ ] Redactar páginas legales y gestionar el consentimiento de cookies.
- [ ] Añadir SEO (Open Graph, favicon, sitemap), analítica y auditoría de accesibilidad / rendimiento (Lighthouse).
- [ ] Alojar las fuentes localmente.
- [ ] Añadir linter, tests y CI/CD, y actualizar dependencias (Vite 4 ya no recibe soporte activo).
- [ ] Desplegar en un hosting estático (Netlify, Vercel, GitHub Pages…) con HTTPS.

## Licencia

Sin licencia definida. Proyecto personal con fines educativos.

<div align="center">

# NS App (RALQ-4-Next.js)

_Construye 10x más rápido con NS._

Una moderna aplicación web (Landing / Showcase) construida enfocándose en un diseño altamente interactivo, animaciones fluidas y experiencias 3D.

[![Screenshot 1](https://github.com/user-attachments/assets/3a812062-6e7c-4ab6-98b8-fd33d02eb491)](#)
[![Screenshot 2](https://github.com/user-attachments/assets/0e918093-9d4a-4429-b81a-17a54a7a1708)](#)

</div>

## 🚀 Características Principales

- **Experiencias 3D**: Integración nativa con modelos de **Spline** (`@splinetool/react-spline`) para un _Earbud Showcase_ interactivo.
- **Animaciones Avanzadas**: Transiciones de páginas, scroll paralaje y componentes espaciales utilizando **Framer Motion** y **Motion Primitives**.
- **Modo Oscuro / Claro**: Soporte completo de temas personalizados mediante `next-themes` y Tailwind CSS.
- **Formulario de Contacto Funcional**: Uso de `react-hook-form`, validación con `zod` y envío de correos desde la API estructurada empleando `nodemailer`.
- **UI Moderna**: Componentes altamente accesibles y reusables gracias a **Radix UI** y **Tailwind CSS v4**.

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Librería UI**: [React 19](https://react.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes Base**: [Radix UI](https://www.radix-ui.com/) (Accordion, Dialog, Select, Tabs, etc.)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Integración 3D**: [Spline](https://spline.design/)

### Backend (Next.js API Routes)

- **Mailing**: Nodemailer
- **Validación de Datos**: Zod

### Herramientas de Desarrollo

- **Lenguaje**: TypeScript
- **Gestor de Paquetes**: pnpm
- **Formateo**: ESLint + Prettier

---

## 📂 Estructura del Proyecto

```text
├── app/
│   ├── api/          # Rutas API de Next.js (Check Env, Envío de contacto)
│   ├── ayuda/        # Página de Ayuda (Preguntas frecuentes, FAQs)
│   ├── contacto/     # Página de Contacto con formulario
│   ├── demo/         # Demostración del producto (Showcase 3D)
│   ├── nosotros/     # Timeline de historia "Sobre Nosotros"
│   ├── layout.tsx    # Layout maestro (Providers, Dark mode, Fonts)
│   └── page.tsx      # Landing page / Hero Section primario
├── components/
│   ├── motion-primitives/  # Componentes de animación de bajo nivel
│   ├── ui/                 # Componentes genéricos de Radix UI encapsulados
│   ├── hero-section.tsx    # Sección inicial animada
│   ├── contact-section.tsx # Lógica y UI del contacto
│   ├── spatial-product...  # Componente espacial para Spline Viewer
│   └── footer.tsx / header.tsx # Secciones estructurales y navegación
├── lib/
│   └── utils.ts      # Funciones de ayuda (clsx, tailwind-merge, etc.)
└── public/           # Recursos estáticos (Iconos, manifiestos)
```

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para correr el proyecto localmente.

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd RALQ-4-Next.js
```

### 2. Instalar las dependencias

Este proyecto utiliza `pnpm`, por lo cual es recomendado utilizarlo para instalar:

```bash
pnpm install
```

_(Si no tienes `pnpm`, puedes usar `npm install --legacy-peer-deps`)_

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y configura tus variables para Nodemailer (SMTP u otro proveedor):

```env
SMTP_HOST=tu_host
SMTP_PORT=tu_puerto
SMTP_USER=tu_usuario
SMTP_PASS=tu_contraseña
```

### 4. Servidor de Desarrollo

Inicia el entorno de desarrollo:

```bash
pnpm dev
```

El servidor de Next.js arrancará en [http://localhost:3000](http://localhost:3000).

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un _Issue_ o enviar un _Pull Request_ para proponer mejoras u optimizaciones en la aplicación.

# RALQ-4-Next.js

Una moderna aplicación web (Landing / Showcase) construida enfocándose en un diseño altamente interactivo, animaciones fluidas, experiencias 3D y autenticación segura.

<div align="center">
  <img src="https://github.com/user-attachments/assets/3a812062-6e7c-4ab6-98b8-fd33d02eb491" alt="Screenshot 1" width="800" />
  <br />
  <br />
  <img src="https://github.com/user-attachments/assets/0e918093-9d4a-4429-b81a-17a54a7a1708" alt="Screenshot 2" width="800" />
</div>

## 🚀 Características Principales

- **Autenticación con Clerk**: Gestión de usuarios segura y lista para producción (Login/Registro/Perfil).
- **Experiencias 3D**: Integración nativa con modelos de **Spline** (`@splinetool/react-spline`) para un _Earbud Showcase_ interactivo.
- **Animaciones Avanzadas**: Transiciones de páginas, scroll paralaje y componentes espaciales utilizando **Framer Motion** y **Motion Primitives**.
- **Modo Oscuro / Claro**: Soporte completo de temas personalizados mediante `next-themes` y **Tailwind CSS v4**.
- **Formulario de Contacto Funcional**: Uso de `react-hook-form`, validación con `zod` y envío de correos desde la API estructurada empleando `nodemailer`.
- **Rendimiento Optimo**: Construido sobre la base de **Next.js 16** con Turbopack.

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Autenticación**: [Clerk](https://clerk.com/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Integración 3D**: [Spline](https://spline.design/)
- **Librería UI**: [Radix UI](https://www.radix-ui.com/)

### Backend & API

- **Mailing**: [Nodemailer](https://nodemailer.com/)
- **Validación**: [Zod](https://zod.dev/)
- **Analíticas**: [@vercel/analytics](https://vercel.com/analytics)

---

## 📂 Estructura del Proyecto

```text
├── app/
│   ├── api/             # Rutas API (Auth, Contacto, Env check)
│   ├── login/           # Páginas de autenticación de Clerk
│   ├── menu/            # Area protegida (requiere login)
│   ├── layout.tsx       # Root layout con ClerkProvider y ThemeProvider
│   └── globals.css      # Estilos globales y variables de Tailwind v4
├── components/
│   ├── ui/              # Componentes base (Shadcn/Radix)
│   └── hero-section.tsx # Secciones principales de la landing
├── middleware.ts        # Protección de rutas y sesiones (Clerk)
└── next.config.mjs      # Configuración de Next.js y Turbo
```

---

## ⚙️ Instalación Local

1. **Clonar repositorio**:

   ```bash
   git clone https://github.com/EmirPolito/RALQ-4-Next.js.git
   cd RALQ-4-Next.js
   ```

2. **Instalar dependencias**:

   ```bash
   pnpm install
   ```

3. **Variables de Entorno**:
   Crea un archivo `.env` basado en las claves de Clerk y tu configuración de correo.

4. **Correr en desarrollo**:
   ```bash
   pnpm dev
   ```

---

## ☁️ Despliegue en Vercel

Este proyecto está optimizado para desplegarse en **Vercel** con un solo clic. Asegúrate de configurar las siguientes **Environment Variables** en el dashboard de Vercel:

| Variable                            | Requerido para            |
| :---------------------------------- | :------------------------ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Autenticación (Frontend)  |
| `CLERK_SECRET_KEY`                  | Autenticación (Backend)   |
| `EMAIL_HOST`                        | Host SMTP para contacto   |
| `EMAIL_PORT`                        | Puerto SMTP (e.g. 465)    |
| `EMAIL_USER`                        | Usuario de correo         |
| `EMAIL_PASS`                        | Contraseña / App Password |

---

## 👨‍💻 Autor

**Emir Polito**

- GitHub: [github.com/EmirPolito](https://github.com/EmirPolito)
- LinkedIn: [linkedin.com/in/emir-polito-g/](https://www.linkedin.com/in/emir-polito-g/)

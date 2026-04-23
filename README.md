# RALQ — Realidad Aumentada para Laboratorios de Química

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Clerk](https://img.shields.io/badge/Clerk-Auth-6c47ff?logo=clerk&logoColor=white)](https://clerk.com/) [![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-ff0055?logo=framer&logoColor=white)](https://www.framer.com/motion/) [![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com/) [![Three.js](https://img.shields.io/badge/Three.js-3D_Engine-black?logo=three.js)](https://threejs.org/) [![A-Frame](https://img.shields.io/badge/A--Frame-AR_Framework-ef2d5e)](https://aframe.io/) [![PubChem](https://img.shields.io/badge/PubChem-Molecular_Data-0066cc)](https://pubchem.ncbi.nlm.nih.gov/) [![Khan Academy](https://img.shields.io/badge/Khan_Academy-Recursos_Educativos-14bf96)](https://www.khanacademy.org/)

Una plataforma educativa de vanguardia construida con **Next.js**, diseñada para transformar la enseñanza de la química mediante experiencias visuales inmersivas, modelos 3D interactivos y realidad aumentada.

<div align="center">
  <img src="https://github.com/user-attachments/assets/3a812062-6e7c-4ab6-98b8-fd33d02eb491" alt="RALQ Hero Section" width="800" />
  <br />
  <p><i>https://ralq-4-next-js.vercel.app/</i></p>
</div>

---

## 🌟 Características Destacadas

### 🔬 Química Interactiva en 3D y RA

- **Modelos Moleculares 3D**: Explora estructuras químicas con detalle atómico gracias a **Three.js** — rota, acerca y analiza cada enlace en tiempo real.
- **Realidad Aumentada**: Proyecta instrumentos y moléculas en tu entorno real con **A-Frame** desde la cámara de tu dispositivo.
- **80+ Instrumentos de Laboratorio**: Desde matraces Erlenmeyer hasta espectrofotómetros, con anotaciones técnicas y guías de uso.
- **Datos Científicos Verificados**: Información molecular proviente de **PubChem** y contenido educativo de **Khan Academy**.

### 🎨 Diseño Premium & UX

- **Deep Dark Mode**: Interfaz "True Black" optimizada para pantallas OLED con contraste perfecto.
- **Modo Daltónico**: Paleta de colores accesible siguiendo estándares WCAG.
- **Reducción de Movimiento**: Respeta las preferencias del sistema operativo del usuario.
- **Animaciones Físicas**: Spring animations con **Framer Motion** para una navegación orgánica.

### 🔐 Seguridad y Rendimiento

- **Autenticación con Clerk**: Flujos de Login/Registro personalizados con validación robusta.
- **App Router + Turbopack**: Arquitectura de Next.js 16 para máxima velocidad de carga.
- **Optimización de Imágenes**: `next/image` con carga diferida para recursos de alta resolución.
- **Vercel Analytics**: Métricas de rendimiento anónimas integradas.

---

## ⚙️ Configuración del Proyecto

### 1. Requisitos Previos

- Node.js 18+
- pnpm / npm / yarn

### 2. Instalación

```bash
git clone https://github.com/EmirPolito/RALQ-4-Next.js.git
cd RALQ-4-Next.js
pnpm install
```

### 3. Variables de Entorno

Crea un archivo `.env.local` en la raíz con las siguientes claves:

| Variable                            | Descripción                                  |
| :---------------------------------- | :------------------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clave pública de tu proyecto en Clerk        |
| `CLERK_SECRET_KEY`                  | Clave secreta de Clerk (solo servidor)       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`     | `/login`                                     |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`     | `/registro`                                  |
| `EMAIL_USER` / `EMAIL_PASS`         | Configuración para el formulario de contacto |

### 4. Desarrollo local

```bash
pnpm run dev
```

---

## ☁️ Despliegue

El proyecto está desplegado en **Vercel**. Si deseas desplegarlo en otro servidor, configura las variables de entorno mencionadas arriba en el panel de control de Vercel antes del despliegue para evitar errores en los componentes de autenticación.

---

## 👨‍💻 Autor

**Emir Polito** — _Desarrollador y Visionario detrás de RALQ_

- GitHub: [@EmirPolito](https://github.com/EmirPolito)
- LinkedIn: [Emir Polito](https://www.linkedin.com/in/emir-polito-g/)


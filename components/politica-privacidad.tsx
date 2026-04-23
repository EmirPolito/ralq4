import Footer from "@/components/footer";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-5 py-35 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-titulos mb-4 tracking-tight">
          Política de Privacidad
        </h1>
        <div className="space-y-6 text-base text-descripciones leading-relaxed">
          <p className="text-sm text-descripciones/70">
            Última actualización: {new Date().toLocaleDateString("es-ES")}
          </p>
          <p>
            En <strong className="text-titulos">RALQ</strong> (Realidad
            Aumentada para Laboratorios de Química), tu privacidad es
            fundamental. Esta política describe cómo recopilamos, utilizamos y
            protegemos la información personal cuando usas nuestra plataforma
            educativa de química interactiva.
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            1. Información que Recopilamos
          </h2>
          <p>Recopilamos dos tipos de información:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-titulos">Datos de cuenta:</strong> Nombre
              y correo electrónico proporcionados al registrarte a través de
              Clerk Auth.
            </li>
            <li>
              <strong className="text-titulos">Datos de uso:</strong> Páginas
              visitadas, tiempo en sesión y patrones de interacción con los
              modelos 3D y funciones de realidad aumentada, recopilados de forma
              anónima mediante Vercel Analytics.
            </li>
            <li>
              <strong className="text-titulos">Datos del dispositivo:</strong>{" "}
              Tipo de navegador, sistema operativo y resolución de pantalla,
              necesarios para optimizar la experiencia de realidad aumentada.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            2. Uso de tu Información
          </h2>
          <p>Utilizamos tu información para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Gestionar tu cuenta y sesión en la plataforma RALQ de forma
              segura.
            </li>
            <li>
              Personalizar tu experiencia con los modelos moleculares e
              instrumentos de laboratorio.
            </li>
            <li>
              Mejorar el rendimiento de los módulos 3D y la experiencia en
              realidad aumentada.
            </li>
            <li>
              Responder a consultas enviadas a través del formulario de
              contacto.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            3. Compartir Información
          </h2>
          <p>
            RALQ no vende ni arrienda tu información personal. Podríamos
            compartirla únicamente con:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-titulos">Clerk:</strong> Para la gestión
              de autenticación y sesiones de usuario.
            </li>
            <li>
              <strong className="text-titulos">Vercel:</strong> Para el
              alojamiento de la plataforma y análisis de rendimiento anónimos.
            </li>
            <li>
              Autoridades competentes, si así lo exige la ley mexicana o
              internacional aplicable.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            4. Cookies y Almacenamiento Local
          </h2>
          <p>
            Usamos cookies esenciales para mantener tu sesión activa y recordar
            tus preferencias (modo oscuro, modo daltónico, reducción de
            movimiento). No utilizamos cookies de publicidad ni de rastreo entre
            sitios.
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            5. Seguridad y Retención
          </h2>
          <p>
            Implementamos medidas de seguridad estándar de la industria,
            incluyendo HTTPS y autenticación gestionada por Clerk. Conservamos
            tus datos mientras mantengas una cuenta activa en RALQ. Puedes
            solicitar la eliminación de tu cuenta y datos en cualquier momento
            contactándonos en{" "}
            <a
              href="/contacto"
              className="text-primary underline underline-offset-4"
            >
              nuestra página de contacto
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            6. Contacto
          </h2>
          <p>
            Si tienes preguntas sobre esta política, puedes contactarnos a
            través de nuestra{" "}
            <a
              href="/contacto"
              className="text-primary underline underline-offset-4"
            >
              página de contacto
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

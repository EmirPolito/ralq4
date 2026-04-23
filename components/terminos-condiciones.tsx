import Footer from "@/components/footer";

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-5 py-35 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-titulos mb-4 tracking-tight">
          Términos y Condiciones
        </h1>
        <div className="space-y-6 text-base text-descripciones leading-relaxed">
          <p className="text-sm text-descripciones/70">
            Última actualización: {new Date().toLocaleDateString("es-ES")}
          </p>
          <p>
            Bienvenido a <strong className="text-titulos">RALQ</strong>{" "}
            (Realidad Aumentada para Laboratorios de Química). Al acceder o
            utilizar nuestra plataforma educativa, aceptas los presentes
            Términos y Condiciones. Si no estás de acuerdo, te pedimos que no
            uses el servicio.
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            1. Descripción del Servicio
          </h2>
          <p>
            RALQ es una plataforma educativa interactiva que ofrece modelos 3D
            de instrumentos y moléculas de química, visualización en realidad
            aumentada, y recursos de apoyo al aprendizaje. El servicio está
            destinado principalmente a estudiantes y docentes de nivel
            secundaria, preparatoria y universidad.
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            2. Uso Aceptable
          </h2>
          <p>Al usar RALQ te comprometes a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Utilizar la plataforma únicamente con fines educativos y
              personales.
            </li>
            <li>
              No reproducir, distribuir ni modificar el contenido de RALQ sin
              autorización expresa.
            </li>
            <li>
              No intentar acceder a cuentas de otros usuarios ni vulnerar la
              seguridad de la plataforma.
            </li>
            <li>
              No usar la plataforma para actividades ilegales o contrarias a los
              presentes términos.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            3. Cuentas de Usuario
          </h2>
          <p>
            El acceso a ciertas funciones de RALQ requiere crear una cuenta a
            través de nuestro sistema de autenticación (Clerk). Eres responsable
            de mantener la confidencialidad de tus credenciales y de todas las
            actividades realizadas desde tu cuenta. Notifícanos de inmediato si
            sospechas de un acceso no autorizado.
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            4. Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido de RALQ —incluyendo modelos 3D, interfaces,
            animaciones, textos y código fuente— es propiedad de sus respectivos
            autores y está protegido por las leyes de propiedad intelectual
            aplicables. Los datos científicos sobre moléculas provienen de{" "}
            <strong className="text-titulos">PubChem</strong> y el contenido
            educativo de referencia de{" "}
            <strong className="text-titulos">Khan Academy</strong>, bajo sus
            respectivas licencias.
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            5. Limitación de Responsabilidad
          </h2>
          <p>
            RALQ se proporciona "tal cual" con fines educativos. No garantizamos
            la exactitud científica absoluta de todos los modelos, ni la
            disponibilidad ininterrumpida del servicio. No somos responsables
            por daños derivados del uso de la plataforma en contextos de
            laboratorio real sin la supervisión adecuada de un profesional.
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            6. Modificaciones
          </h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones
            en cualquier momento. Las actualizaciones se publicarán en esta
            página con la fecha de revisión correspondiente. El uso continuado
            de la plataforma tras una actualización implica la aceptación de los
            nuevos términos.
          </p>

          <h2 className="text-2xl font-semibold text-titulos mt-10 mb-3">
            7. Contacto
          </h2>
          <p>
            Si tienes dudas sobre estos Términos y Condiciones, puedes
            comunicarte con nosotros a través de nuestra{" "}
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

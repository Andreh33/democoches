import type { Metadata } from "next";

export const metadata: Metadata = { title: "Aviso legal" };

export default function AvisoLegalPage() {
  return (
    <>
      <h1>Aviso legal</h1>
      <p>
        El presente aviso legal regula el uso del sitio web autoselect-sevilla.es
        (en adelante, el «Sitio Web»), titularidad de AutoSelect Sevilla S.L. (en
        adelante, «AutoSelect»), con CIF B-87.654.321 y domicilio en Calle Luis
        Montoto 156, 41018 Sevilla.
      </p>

      <h2>1. Datos identificativos</h2>
      <p>
        AutoSelect Sevilla S.L. está inscrita en el Registro Mercantil de
        Sevilla, tomo 5.832, folio 88, hoja SE-105.448. Puede ponerse en
        contacto con nosotros en hola@autoselect-sevilla.es o en el teléfono
        +34 666 666 666.
      </p>

      <h2>2. Condiciones de uso</h2>
      <p>
        El acceso al Sitio Web y la utilización de sus contenidos atribuye la
        condición de Usuario, lo que implica la aceptación de las presentes
        condiciones. El Usuario se compromete a utilizar el Sitio Web conforme
        a la ley, a las buenas costumbres y al orden público.
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        Todos los contenidos del Sitio Web (textos, fotografías, gráficos,
        imágenes, iconos, tecnología, software, así como su diseño gráfico y
        códigos fuente) son propiedad de AutoSelect o de terceros que han
        autorizado su uso. Los nombres comerciales, marcas o signos distintivos
        son titularidad exclusiva de sus propietarios.
      </p>

      <h2>4. Exclusión de responsabilidad</h2>
      <p>
        AutoSelect no se hace responsable de las eventuales interrupciones del
        servicio, retrasos, errores o mal funcionamiento del Sitio Web debidos
        a causas ajenas a su voluntad o a casos de fuerza mayor. Las
        descripciones de los vehículos están actualizadas en la fecha de su
        publicación; consulte la disponibilidad antes de desplazarse.
      </p>

      <h2>5. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para la
        resolución de cualquier conflicto derivado de su interpretación o
        cumplimiento, las partes se someten a los Juzgados y Tribunales de
        Sevilla capital, salvo que la legislación aplicable disponga otro
        fuero.
      </p>
    </>
  );
}

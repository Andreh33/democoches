import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de cookies" };

export default function CookiesPage() {
  return (
    <>
      <h1>Política de cookies</h1>
      <p>
        El presente Sitio Web utiliza cookies propias y de terceros para
        mejorar la experiencia de navegación, analizar el uso del Sitio y, en
        su caso, mostrar contenido personalizado. Esta política describe qué
        son las cookies, qué tipos utilizamos y cómo puede gestionarlas.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Una cookie es un pequeño fichero de texto que un sitio web almacena en
        el navegador del usuario. Las cookies permiten reconocer su navegador,
        recordar preferencias y ofrecer una experiencia coherente entre
        visitas.
      </p>

      <h2>2. Cookies que utilizamos</h2>
      <p>
        <strong>Cookies técnicas (necesarias).</strong> Permiten la navegación
        básica del Sitio Web y el uso de funcionalidades como la persistencia
        de favoritos, la comparación de coches o la preferencia de tema (claro
        u oscuro).
      </p>
      <p>
        <strong>Cookies analíticas.</strong> Recopilan información agregada y
        anónima sobre el uso del Sitio Web mediante Vercel Analytics y
        Speed Insights. Estos servicios no utilizan cookies de seguimiento
        identificativas.
      </p>
      <p>
        <strong>Cookies de terceros.</strong> Embebido de Google Maps en la
        sección de contacto. Su uso queda regulado por la política de cookies
        de Google.
      </p>

      <h2>3. Cómo gestionar las cookies</h2>
      <p>
        Puede configurar su navegador para bloquear o eliminar las cookies del
        Sitio Web. Tenga en cuenta que ciertas funcionalidades, como los
        favoritos, dejarán de funcionar correctamente.
      </p>

      <h2>4. Actualizaciones</h2>
      <p>
        AutoSelect podrá modificar esta política para adaptarla a cambios
        legislativos o a la evolución del Sitio Web. La fecha de la última
        actualización figura al pie del documento.
      </p>
    </>
  );
}

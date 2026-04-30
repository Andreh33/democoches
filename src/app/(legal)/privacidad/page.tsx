import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function PrivacidadPage() {
  return (
    <>
      <h1>Política de privacidad</h1>
      <p>
        En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley
        Orgánica 3/2018 de Protección de Datos Personales y garantía de los
        derechos digitales (LOPDGDD), AutoSelect Sevilla S.L. informa al
        usuario sobre el tratamiento de sus datos personales.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        AutoSelect Sevilla S.L., con CIF B-87.654.321 y domicilio en Calle Luis
        Montoto 156, 41018 Sevilla. Email de contacto:
        privacidad@autoselect-sevilla.es.
      </p>

      <h2>2. Finalidades</h2>
      <p>
        Los datos personales recogidos a través del formulario de contacto, del
        formulario de tasación o de la suscripción a la newsletter se
        utilizarán para: (i) responder a las consultas del usuario, (ii)
        elaborar una valoración orientativa de su vehículo, (iii) enviar
        comunicaciones comerciales —solo si lo ha autorizado expresamente— y
        (iv) cumplir con las obligaciones legales aplicables.
      </p>

      <h2>3. Legitimación</h2>
      <p>
        La base legal para el tratamiento es el consentimiento del usuario al
        enviar el formulario, la ejecución del contrato precontractual derivado
        de la consulta y, en su caso, el interés legítimo de AutoSelect en
        gestionar la relación comercial.
      </p>

      <h2>4. Conservación</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para atender la
        consulta o gestionar la relación comercial y, posteriormente, durante
        los plazos legales que pudieran resultar de aplicación.
      </p>

      <h2>5. Derechos</h2>
      <p>
        El usuario puede ejercer en cualquier momento sus derechos de acceso,
        rectificación, supresión, limitación, oposición y portabilidad
        enviando un email a privacidad@autoselect-sevilla.es acompañado de
        copia del DNI. Asimismo, puede presentar una reclamación ante la
        Agencia Española de Protección de Datos en www.aepd.es.
      </p>
    </>
  );
}

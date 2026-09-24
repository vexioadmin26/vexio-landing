

function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="container">

        <h2 className="contact-title">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>

        <p className="contact-subtitle">
          Solicitá una demostración gratuita y descubrí cómo Vexio puede ayudarte
          a vender más, controlar tu stock y administrar tu negocio desde una sola plataforma.
        </p>

        <div className="contact-buttons">
          <a
            href="https://web.whatsapp.com/send?phone=543512447171&text=Hola,%20quiero%20solicitar%20una%20demo%20de%20Vexio%20para%20conocer%20sus%20funcionalidades."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact-primary"
          >
            Solicitar Demo
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vexioadmin26@gmail.com&su=Consulta%20sobre%20Vexio&body=Hola,%20quiero%20más%20información%20sobre%20Vexio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact-secondary"
          >
            Enviar Email
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
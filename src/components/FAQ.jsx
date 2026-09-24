function FAQ() {
  const faqs = [
    {
      question: "¿Necesito instalar algo?",
      answer:
        "No. Vexio funciona desde el navegador y podés acceder desde PC, tablet o celular."
    },
    {
      question: "¿Puedo emitir facturas electrónicas?",
      answer:
        "Sí. Vexio integra facturación ARCA para emitir comprobantes directamente desde el sistema."
    },
    {
      question: "¿Funciona con lectores de código de barras?",
      answer:
        "Sí. Es compatible con lectores USB para agilizar las ventas y el control de stock."
    },
    {
      question: "¿Puedo controlar el stock en tiempo real?",
      answer:
        "Sí. Cada venta actualiza automáticamente el inventario para mantener información precisa."
    },
    {
      question: "¿Se integra con Mercado Pago?",
      answer:
        "Sí. Podés registrar y gestionar cobros utilizando Mercado Pago."
    },
    {
      question: "¿Mis datos están seguros?",
      answer:
        "Sí. La información se almacena de forma segura y siempre permanece bajo tu control."
    },
    {
      question: "¿Hay soporte técnico?",
      answer:
        "Sí. Te acompañamos durante la implementación y el uso diario del sistema."
    },
    {
      question: "¿Puedo solicitar una demostración?",
      answer:
        "Sí. Contactanos por WhatsApp y coordinamos una demo personalizada."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Preguntas Frecuentes</h2>
          <p>
            Resolvemos las dudas más comunes sobre Vexio.
          </p>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item faq-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                >
                  {faq.question}
                </button>
              </h2>

              <div
                id={`faq${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
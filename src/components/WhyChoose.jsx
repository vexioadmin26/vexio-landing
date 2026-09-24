function WhyChoose() {
  const items = [
    {
      icon: "⚡",
      title: "Implementación rápida",
      text: "Instalá Vexio en pocos minutos y empezá a vender inmediatamente."
    },
    {
      icon: "🔒",
      title: "Tus datos son tuyos",
      text: "Sin servidores complejos ni configuraciones difíciles. Control total de tu información."
    },
    {
      icon: "💳",
      title: "Todo integrado",
      text: "Mercado Pago, ARCA, lectores de código de barras y cuentas corrientes."
    },
    {
      icon: "📱",
      title: "Multiplataforma",
      text: "Utilizalo desde PC, tablet o celular con la misma experiencia."
    }
  ];

  return (
    <section className="why-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="why-title">
            ¿Por qué elegir Vexio?
          </h2>

          <p className="why-subtitle">
            Todo lo que necesitás para administrar tu negocio
            desde una única plataforma.
          </p>
        </div>

        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="why-card">

                <div className="why-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
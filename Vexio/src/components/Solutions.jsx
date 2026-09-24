

function Solutions() {
  const features = [
    {
      icon: "🛒",
      title: "Ventas rápidas",
      description:
        "Registrá ventas en segundos desde tu PC.",
    },
    {
      icon: "📦",
      title: "Control de Stock",
      description:
        "Actualización automática de inventario en tiempo real.",
    },
    {
      icon: "🧾",
      title: "Facturación ARCA",
      description:
        "Emití comprobantes electrónicos directamente desde Vexio.",
    },
    {
      icon: "💳",
      title: "Mercado Pago",
      description:
        "Cobros integrados con cualquier medio de pago.",
    },
    {
      icon: "🔍",
      title: "Código de Barras",
      description: "Compatible con lectores USB para ventas rápidas y control eficiente."
    },
    {
      icon: "📒",
      title: "Cuentas Corrientes",
      description:
        "Gestioná fiados y clientes sin usar cuadernos.",
    },
    {
      icon: "📊",
      title: "Reportes Inteligentes",
      description:
        "Analizá ventas, ganancias y productos más vendidos.",
    },
    {
      icon: "📱",
      title: "Multiplataforma",
      description:
        "Funciona en PC, tablet y celular en sincronía perfecta.",
    },
  ];

  return (
    <section className="solutions-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="solutions-title">
            Soluciones para todo tipo de negocios
          </h2>

          <p className="solutions-subtitle">
            Desde kioscos y almacenes hasta supermercados, restaurantes,
            bares y comercios especializados.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-title">
                  <h4>{feature.title}</h4>
                </div>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Solutions;
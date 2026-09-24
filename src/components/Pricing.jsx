

function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "$12.000",
      period: "/ mes",
      features: [
        "Gestión de ventas",
        "Productos",
        "Clientes",
        "Caja",
        "Tickets e impresiones",
        "Reportes básicos",
        "Info de los usuarios",
        "Asesorias y soporte técnico",
      ],
    },
    {
      name: "Estándar",
      price: "$25.000",
      period: "/ mes",
      featured: true,
      features: [
        "Plan básico",
        "Inventario y control de stock",
        "Clientes normales y en cuenta corriente",
        "Proveedores",
        "Reportes avanzados",
        "Devoluciones y presupuestos",
        "Código de barras",
        "Mozos y distribución de mesas",
      ],
    },
    {
      name: "Premium",
      price: "$40.000",
      period: "/ mes",
      features: [
        "Plan estándar",
        "Funciones avanzadas",
        "Soporte prioritario",
        "Multicajas",
        "Facturacion ARCA",
        "Mercado Pago",
        "Configuración personalizada",
      ],
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">

        <div className="pricing-header">
          <h2>Planes Vexio</h2>

          <p>
            Elegí el plan que mejor se adapte a tu negocio.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {plans.map((plan, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div
                className={`pricing-card ${
                  plan.featured ? "featured-plan" : ""
                }`}
              >

                {plan.featured && (
                  <span className="featured-badge">
                    Más Elegido
                  </span>
                )}

                <h3>{plan.name}</h3>

                <div className="price">
                  {plan.price}
                  <span>{plan.period}</span>
                </div>

                <div className="plan-discount">
                  Descuentos disponibles para contrataciones trimestrales,
                  semestrales y anuales.
                </div>

                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/543512447171?text=Hola,%20quiero%20más%20información%20sobre%20el%20Plan%20${plan.name}%20de%20Vexio%20y%20sus%20opciones%20de%20contratación."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pricing-btn ${
                    plan.featured ? "featured-btn" : ""
                  }`}
                >
                  Consultar
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
//
export default Pricing;
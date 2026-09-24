import logo from "../assets/logo.png";
import dashboard from "../assets/dashboard.png";

function Hero() {
  return (
    <section className="hero">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">
            
            <div className="hero-content">

              <h1 className="hero-title">
                Todo lo que necesitás para
                <br />
                <span>administrar tu negocio</span>
              </h1>

              <p className="hero-description">
                Vendé, controlá stock, gestioná clientes,
                emití facturas y analizá resultados desde
                cualquier dispositivo.
              </p>

              <div className="hero-buttons">

                <a
                  href="https://web.whatsapp.com/send?phone=543512447171&text=Hola,%20quiero%20solicitar%20una%20demo%20de%20Vexio%20para%20conocer%20sus%20funcionalidades."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-primary"
                >
                  Solicitar Demo
                </a>

                <a
                  href="#pricing"
                  className="btn btn-outline-light btn-lg"
                >
                  Ver Planes
                </a>

              </div>

              <div className="hero-features">

                <span>✔ Facturación ARCA</span>

                <span>✔ Mercado Pago</span>

                <span>✔ Control de Stock</span>

              </div>

              <div className="devices mt-4">

                💻 PC

                <span>|</span>

                📱 Tablet

                <span>|</span>

                📲 Celular

              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">

            <div className="hero-image-container">

              <img
                src={dashboard}
                alt="Sistema Vexio"
                className="hero-image"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
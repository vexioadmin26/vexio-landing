import { useState } from "react";
import ventas from "../assets/ventas.jpg";
import reporte from "../assets/reporte.jpg";
import inventario from "../assets/inventario.jpg";
import arca from "../assets/arca.jpg";
import productos from "../assets/productos.jpg";

function About() {
  const screens = {
    ventas: {
      title: "Ventas",
      description:
        "Procesá ventas rápidamente con una interfaz simple y diseñada para maximizar la velocidad de atención.",
      image:
        ventas,
    },

    reportes: {
      title: "Reportes",
      description:
        "Visualizá métricas clave, ganancias, productos más vendidos y comportamiento de ventas en tiempo real.",
      image:
        reporte,
    },

    inventario: {
      title: "Inventario",
      description:
        "Controlá productos, existencias y movimientos de stock desde una única plataforma.",
      image:
        inventario,
    },

    productos: {
      title: "Productos",
      description:
        "Gestioná tu catálogo de productos junto con su categoría con facilidad.",
      image:
        productos,
    },

    facturacion: {
      title: "Facturación ARCA",
      description:
        "Emití comprobantes electrónicos y mantené tu negocio integrado con ARCA.",
      image:
        arca,
    },
  };

  const [activeScreen, setActiveScreen] = useState("ventas");

  return (
    <section className="about-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="about-title">
            Descubrí Vexio en acción
          </h2>

          <p className="about-subtitle">
            Conocé las principales herramientas que utilizan
            nuestros clientes todos los días.
          </p>

        </div>

        <div className="about-tabs">

          <button
            className={activeScreen === "ventas" ? "active" : ""}
            onClick={() => setActiveScreen("ventas")}
          >
            Ventas
          </button>

          <button
            className={activeScreen === "reportes" ? "active" : ""}
            onClick={() => setActiveScreen("reportes")}
          >
            Reportes
          </button>

          <button
            className={activeScreen === "inventario" ? "active" : ""}
            onClick={() => setActiveScreen("inventario")}
          >
            Inventario
          </button>

          <button
            className={activeScreen === "productos" ? "active" : ""}
            onClick={() => setActiveScreen("productos")}
          >
            Productos
          </button>

          <button
            className={activeScreen === "facturacion" ? "active" : ""}
            onClick={() => setActiveScreen("facturacion")}
          >
            Facturación
          </button>

        </div>

        <div className="screen-card">

          <img
            src={screens[activeScreen].image}
            alt={screens[activeScreen].title}
            className="screen-image"
          />

          <div className="screen-info">

            <h3>
              {screens[activeScreen].title}
            </h3>

            <p>
              {screens[activeScreen].description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
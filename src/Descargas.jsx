
import React from "react";

const DESCARGAS = [
  {
    nombre: "Windows 64 bits",
    arquitectura: "x64",
    descripcion: "Para computadoras con Windows de 64 bits.",
    url: "https://github.com/vexioadmin26/vexio-landing/releases/download/v1.0.0/VEXIO-1.0.7-x64.exe",
  },
  {
    nombre: "Windows 32 bits",
    arquitectura: "x32",
    descripcion: "Para computadoras con Windows de 32 bits.",
    url: "https://github.com/vexioadmin26/vexio-landing/releases/download/v1.0.0/VEXIO-1.0.7-x32.exe",
  },
];

export default function Descargas() {
  return (
    <section
      id="descargas"
      className="py-5 text-white"
      style={{ backgroundColor: "#080D16" }}
    >
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Descargá <span style={{ color: "#00D9E8" }}>Vexio</span>
          </h2>
          <p className="text-secondary">
            Elegí la versión compatible con tu Windows.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {DESCARGAS.map((item) => (
            <div className="col-12 col-md-6 col-lg-5" key={item.arquitectura}>
              <div
                className="h-100 p-4 rounded-4 border"
                style={{
                  backgroundColor: "#101722",
                  borderColor: "#263747",
                }}
              >
                <h4 className="fw-bold">{item.nombre}</h4>

                <p className="text-secondary">
                  {item.descripcion}
                </p>

                <a
                  href={item.url}
                  className="btn btn-lg w-100 fw-bold"
                  style={{
                    backgroundColor: "#00D9E8",
                    color: "#07111A",
                  }}
                >
                  Descargar instalador
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary small mt-4">
          Descargá e instalá únicamente versiones oficiales de Vexio.
        </p>
      </div>
    </section>
  );
}

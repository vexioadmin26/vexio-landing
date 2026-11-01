
import React, { useEffect, useState } from "react";

const DESCARGAS = {
  x64: {
    nombre: "Windows 64 bits",
    arquitectura: "x64",
    descripcion: "Para computadoras con Windows de 64 bits.",
    url: "https://github.com/vexioadmin26/vexio-landing/releases/download/v1.0.0/VEXIO-1.0.7-x64.exe",
  },
  x32: {
    nombre: "Windows 32 bits",
    arquitectura: "x32",
    descripcion: "Para computadoras con Windows de 32 bits.",
    url: "https://github.com/vexioadmin26/vexio-landing/releases/download/v1.0.0/VEXIO-1.0.7-x32.exe",
  },
};

export default function Descargas() {
  const [arquitectura, setArquitectura] = useState(null);
  const [mostrarAlternativas, setMostrarAlternativas] = useState(false);

  useEffect(() => {
    async function detectarArquitectura() {
      try {
        // Detección moderna en navegadores Chromium compatibles
        if (navigator.userAgentData?.getHighEntropyValues) {
          const datos = await navigator.userAgentData.getHighEntropyValues([
            "architecture",
            "bitness",
          ]);

          if (datos.bitness === "64") {
            setArquitectura("x64");
            return;
          }

          if (datos.bitness === "32") {
            setArquitectura("x32");
            return;
          }
        }

        // Método alternativo basado en el navegador
        const userAgent = navigator.userAgent;

        if (/Win64|x64|WOW64|ARM64/i.test(userAgent)) {
          setArquitectura("x64");
        } else if (/Windows|Win32/i.test(userAgent)) {
          setArquitectura("x32");
        }
      } catch (error) {
        console.warn("No se pudo detectar la arquitectura:", error);
      }
    }

    detectarArquitectura();
  }, []);

  const descargaRecomendada = arquitectura
    ? DESCARGAS[arquitectura]
    : null;

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
            Detectamos automáticamente la versión compatible con tu equipo.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {descargaRecomendada ? (
            <div className="col-12 col-md-6 col-lg-5">
              <div
                className="h-100 p-4 rounded-4 border text-center"
                style={{
                  backgroundColor: "#101722",
                  borderColor: "#00D9E8",
                }}
              >
                <span
                  className="badge mb-3"
                  style={{
                    backgroundColor: "#00D9E8",
                    color: "#07111A",
                  }}
                >
                  Versión recomendada para tu equipo
                </span>

                <h4 className="fw-bold">
                  {descargaRecomendada.nombre}
                </h4>

                <p className="text-secondary">
                  {descargaRecomendada.descripcion}
                </p>

                <a
                  href={descargaRecomendada.url}
                  className="btn btn-lg w-100 fw-bold"
                  style={{
                    backgroundColor: "#00D9E8",
                    color: "#07111A",
                  }}
                >
                  Descargar Vexio {descargaRecomendada.arquitectura}
                </a>

                <p className="text-secondary small mt-3 mb-0">
                  Detección automática del sistema
                </p>
              </div>
            </div>
          ) : (
            <div className="col-12 col-md-8 col-lg-6">
              <div
                className="p-4 rounded-4 border text-center"
                style={{
                  backgroundColor: "#101722",
                  borderColor: "#263747",
                }}
              >
                <h4 className="fw-bold">
                  Seleccioná tu versión de Windows
                </h4>

                <p className="text-secondary">
                  No pudimos detectar automáticamente la arquitectura.
                </p>

                <div className="d-grid gap-3">
                  {Object.values(DESCARGAS).map((item) => (
                    <a
                      key={item.arquitectura}
                      href={item.url}
                      className="btn btn-lg fw-bold"
                      style={{
                        backgroundColor: "#00D9E8",
                        color: "#07111A",
                      }}
                    >
                      Descargar {item.nombre}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {descargaRecomendada && (
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn btn-link text-secondary"
              onClick={() =>
                setMostrarAlternativas(!mostrarAlternativas)
              }
            >
              {mostrarAlternativas
                ? "Ocultar otras versiones"
                : "¿Necesitás otra versión? Descargar manualmente"}
            </button>

            {mostrarAlternativas && (
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3">
                {Object.values(DESCARGAS)
                  .filter(
                    (item) =>
                      item.arquitectura !== arquitectura
                  )
                  .map((item) => (
                    <a
                      key={item.arquitectura}
                      href={item.url}
                      className="btn btn-outline-light"
                    >
                      Descargar {item.nombre}
                    </a>
                  ))}
              </div>
            )}
          </div>
        )}

        <p className="text-center text-secondary small mt-4">
          Descargá e instalá únicamente versiones oficiales de Vexio.
        </p>
      </div>
    </section>
  );
}

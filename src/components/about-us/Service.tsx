/**
 * Service Component
 * -----------------------------
 * Este componente representa la sección de "Servicios" en una página web.
 * Utiliza React con Bootstrap para la estructura y reutiliza el componente Services.
 * 
 * Características principales:
 * - Presenta un título y una descripción de la sección de servicios.
 * - Usa el sistema de grillas de Bootstrap (Row y Container) para la disposición.
 * - Renderiza dinámicamente el componente <Services /> para mostrar los servicios.
 * 
 * Dependencias necesarias:
 * - React
 * - react-bootstrap (para Container y Row)
 * 
 * Uso:
 * <Service />
 */

import React from "react";
import Services from "../service/Services";
import { Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <>
      {/* Sección principal con estilos personalizados */}
      <section className="gi-service-section padding-tb-40">
        <div className="container">
          {/* Título y descripción de la sección */}
          <div className="section-title-2">
            <h2 className="gi-title">
              Otros <span>Servicios</span>
            </h2>
            <p>
            ¿Sabes cuál es el secreto? Que en esta empresa, ‘servicio’ no es una palabra… es la sonrisa que entregamos con lo que hacemos.
            </p>
          </div>
          
          {/* Contenedor de los servicios */}
          <Row className="m-tb-minus-12">
            <Services />
          </Row>
        </div>
      </section>
    </>
  );
};

export default Service;

/**
 * About Component
 * -----------------------------
 * Este componente representa la sección "Quiénes somos" de una página web.
 * Utiliza React junto con Bootstrap para diseñar la estructura y presentación.
 * 
 * Características principales:
 * - Muestra imágenes representativas de la sección "Quiénes somos".
 * - Presenta información con un título y una descripción en formato de párrafo.
 * - Utiliza el sistema de grillas de Bootstrap (Row y Col) para la disposición.
 * 
 * Dependencias necesarias:
 * - React
 * - react-bootstrap (para Row y Col)
 * 
 * Uso:
 * <About />
 */

import React from "react";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      {/* Sección principal con clases CSS personalizadas */}
      <section className="gi-about padding-tb-40">
        <div className="container">
          <Row>
            {/* Columna para las imágenes */}
            <Col xl={6} md={12}>
              <div className="gi-about-img">
                {/* Imagen principal */}
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL + "/assets/img/common/about.png"
                  }
                  className="v-img"
                  alt="about"
                />
                {/* Imágenes adicionales */}
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    "/assets/img/common/about-2.png"
                  }
                  className="h-img"
                  alt="about"
                />
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    "/assets/img/common/about-3.png"
                  }
                  className="h-img"
                  alt="about"
                />
              </div>
            </Col>
            
            {/* Columna para el contenido de texto */}
            <Col xl={6} md={12}>
              <div className="gi-about-detail">
                {/* Título de la sección */}
                <div className="section-title">
                  <h2>
                    Quiénes <span>somos?</span>
                  </h2>
                  <p>
                    We’re here to serve only the best products for you.
                    Enriching your homes with the best essentials.
                  </p>
                </div>
                
                {/* Párrafos de información */}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
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
                  En Automanage entendemos que tu auto es más que un vehículo: es tu compañero de viaje, 
                  tu herramienta de trabajo y una inversión que merece el mejor cuidado. 
                  Por eso hemos creado un servicio donde la confianza y la tranquilidad son nuestra garantía.
                  </p>
                </div>
                
                {/* Párrafos de información */}
                <p>
                Trabajamos exclusivamente con proveedores certificados, cada repuesto pasa por 
                 rigurosos controles de calidad antes de llegar a ti,
                 y nuestro equipo de expertos está disponible para asesorarte en cada paso. 
                 Sabemos que necesitas piezas duraderas, seguras y compatibles, y eso es exactamente 
                 lo que encontrarás en nuestro catálogo
                </p>
                <p>
                Además, protegemos cada compra con garantías reales y un proceso de entrega confiable. 
                Porque en Automanage no solo vendemos repuestos; construimos relaciones a largo plazo. 
                Puedes estar seguro: cuando eliges Automanage, tu auto queda en las mejores manos.
                </p>
                <p>
                ¿Listo para una experiencia sin preocupaciones? Nosotros ya estamos listos para atenderte. 🚗💙
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
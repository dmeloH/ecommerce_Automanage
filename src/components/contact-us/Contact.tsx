"use client";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaMobileAlt,
  FaGlobeAmericas,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <section className="gi-contact padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
            Póngase en contacto  <span> con nosotros</span>
            </h2>
            <p>
            Seleccione a continuación un tema relacionado con su consulta. Si no lo haces
            Para saber qué necesitas, rellena nuestro formulario de contacto.
            </p>
          </div>
          <Row className="gi-contact-detail m-tb-minus-12">
            <Col sm={6} lg={4} className="p-tp-12">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-envelope" aria-hidden="true">
                      <FaEnvelope />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Correo y sitio web</h3>
                    <p>
                      <i className="fa fa-envelope" aria-hidden="true">
                        <FaEnvelope />
                      </i>{" "}
                      &nbsp; esteban_ricardo@soy.sena.edu.co
                    </p>
                    <p>
                      <i className="fa fa-envelope" aria-hidden="true">
                        <FaEnvelope />
                      </i>{" "}
                      &nbsp; heady_melo@soy.sena.edu.co
                    </p>
                    <p>
                      <i className="fa fa-globe" aria-hidden="true">
                        <FaGlobeAmericas />
                      </i>{" "}
                      &nbsp; www.automanage.com
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>

            <Col sm={6} lg={4} className="p-tp-12">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-mobile" aria-hidden="true">
                      <FaMobileAlt />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Contacto</h3>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true">
                        <FaMobileAlt />
                      </i>{" "}
                      &nbsp; (+57)-3150528878
                    </p>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true">
                        <FaMobileAlt />
                      </i>{" "}
                      &nbsp; (+57)-3125316550
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>

            <Col sm={6} lg={4} className="p-tp-12 m-auto">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true">
                      <FaMapMarkerAlt />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Dirección</h3>
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        <FaMapMarkerAlt />
                      </i>{" "}
                      &nbsp; Vía la Trinidad,SERVICIO NACIONAL DE APRENDIZAJE - CIMM Ciudadela Industrial, Duitama, Boyacá
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>
          </Row>
          <Row className="p-t-80">
            <Col md={6}>
              <iframe src="https://www.google.com/maps/embed?pb=!4v1743015111897!6m8!1m7!1sQRXOhjORL6aTrscLEY34aw!2m2!1d5.817759078920567!2d-73.03355864212776!3f237.8207446477017!4f-12.643434452267414!5f0.7820865974627469"></iframe>
            </Col>
            <Col md={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Nombre"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese su nombre completo
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="umail"
                    placeholder="Email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese el nombre de usuario correcto.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Telefono"
                    pattern="^\d{10,12}$"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese el número de 10-12 dígitos.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Mensaje"
                    required
                  ></textarea>
                  <Form.Control.Feedback type="invalid">
                    Por favor, introduzca el mensaje.
                  </Form.Control.Feedback>
                </Form.Group>
                <button type="submit" className="gi-btn-2">
                  Enviar
                </button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contact;

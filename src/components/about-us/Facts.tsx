/**
 * Facts Component
 * -----------------------------
 * Este componente muestra una sección de "hechos" o "estadísticas" en una página web.
 * Utiliza React con Bootstrap para la estructura y SWR para la obtención de datos desde una API.
 * 
 * Características principales:
 * - Obtiene datos de la API '/api/facts' utilizando SWR para la gestión del estado de datos.
 * - Muestra los datos en un diseño de cuadrícula con Bootstrap (Row y Col).
 * - Implementa un spinner de carga mientras se recuperan los datos.
 * - Soporta paginación opcional.
 * - Permite manejar eventos personalizados en caso de éxito o error.
 * 
 * Dependencias necesarias:
 * - React
 * - react-bootstrap (para Row y Col)
 * - SWR (para la obtención de datos de la API)
 * 
 * Uso:
 * <Facts onSuccess={callback} hasPaginate={true} onError={callback} />
 */

"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const Facts = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  // Obtención de datos con SWR
  const { data, error } = useSWR("/api/facts", fetcher, { onSuccess, onError });

  // Manejo de errores en la obtención de datos
  if (error) return <div>No se pudieron cargar los productos</div>;
  
  // Muestra el spinner mientras se cargan los datos
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  // Función para manejar la paginación
  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <>
      {/* Sección principal con estilos personalizados */}
      <section className="gi-facts-section padding-tb-40">
        <div className="container">
          <Row className="m-tb-minus-12">
            {getData().map((item, index) => (
              <Col
                sm={12}
                md={6}
                lg={3}
                key={index}
                className="gi-facts-content p-tp-12"
              >
                <div className="gi-facts-inner">
                  <div className="gi-count">
                    <span className="counter">{item.counter}</span>
                  </div>
                  <div className="gi-facts-desc">
                    <h4>{item.name}</h4>
                    <p>{item.discription}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Facts;
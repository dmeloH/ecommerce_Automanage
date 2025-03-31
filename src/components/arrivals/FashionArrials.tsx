/**
 * FashionArrials Component
 * -----------------------------
 * Este componente muestra una sección de "Nuevas llegadas" con pestañas interactivas.
 * Utiliza React con React Tabs y React Awesome Reveal para efectos de animación.
 * 
 * Características principales:
 * - Usa pestañas para filtrar productos por categoría: Todos, Ropa, Calzado y Accesorios.
 * - Obtiene datos de productos desde una API específica para cada categoría.
 * - Usa Fade de React Awesome Reveal para animar la visualización de productos.
 * - Se actualiza dinámicamente al seleccionar una pestaña.
 * - Compatible con Bootstrap para un diseño responsivo.
 * 
 * Dependencias necesarias:
 * - React
 * - React Bootstrap (para diseño y disposición de columnas)
 * - React Tabs (para la navegación por pestañas)
 * - React Awesome Reveal (para animaciones)
 * 
 * Uso:
 * ```jsx
 * <FashionArrials />
 * ```
 */

import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductItem from "../fashion-sidebar/categoryall/ProductItem";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Fade } from "react-awesome-reveal";

const FashionArrials = () => {
  // Estado para manejar la pestaña seleccionada
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Función para actualizar la pestaña activa
  const handleProductClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div
        className="gi-product-tab gi-products padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
        >
          <div className="gi-tab-title">
            <div className="gi-main-title">
              <div className="section-title">
                <div className="section-detail">
                  <h2 className="gi-title">
                    New <span>Arrivals</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* Pestañas de categorías */}
            <TabList className="gi-pro-tab">
              <ul className="gi-pro-tab-nav nav">
                <Tab
                  style={{ outline: "none" }}
                  className="nav-item gi-header-rtl-arrival"
                  key={"all"}
                >
                  <a
                    className={`nav-link ${selectedIndex == 0 ? "active" : ""}`}
                    onClick={() => handleProductClick(0)}
                    data-bs-toggle="tab"
                  >
                    All
                  </a>
                </Tab>
                <Tab
                  style={{ outline: "none" }}
                  className="nav-item gi-header-rtl-arrival"
                  key={"clothe"}
                >
                  <a
                    className={`nav-link ${selectedIndex == 1 ? "active" : ""}`}
                    onClick={() => handleProductClick(1)}
                    data-bs-toggle="tab"
                  >
                    Clothes
                  </a>
                </Tab>
                <Tab
                  style={{ outline: "none" }}
                  className="nav-item gi-header-rtl-arrival"
                  key={"footwear"}
                >
                  <a
                    className={`nav-link ${selectedIndex == 2 ? "active" : ""}`}
                    onClick={() => handleProductClick(2)}
                    data-bs-toggle="tab"
                  >
                    Footwear
                  </a>
                </Tab>
                <Tab
                  style={{ outline: "none" }}
                  className="nav-item"
                  key={"accessories"}
                >
                  <a
                    className={`nav-link ${selectedIndex == 3 ? "active" : ""}`}
                    onClick={() => handleProductClick(3)}
                    data-bs-toggle="tab"
                  >
                    Accessories
                  </a>
                </Tab>
              </ul>
            </TabList>
          </div>
          {/* Contenido de las pestañas */}
          <Row className="m-b-minus-24px">
            <Col lg={12}>
              <div className="tab-content">
                {/* Pestaña Todos los productos */}
                <TabPanel>
                  <Fade
                    triggerOnce
                    duration={500}
                    className={`tab-pane fade ${
                      selectedIndex === 0 ? "show active product-block" : ""
                    }`}
                  >
                    <Row>
                      <ProductItem url="/api/fashionall" />
                    </Row>
                  </Fade>
                </TabPanel>
                {/* Pestaña Ropa */}
                <TabPanel>
                  <Fade
                    triggerOnce
                    duration={500}
                    className={`tab-pane fade ${
                      selectedIndex === 1 ? "show active product-block" : ""
                    }`}
                  >
                    <Row>
                      <ProductItem url="/api/clothes" />
                    </Row>
                  </Fade>
                </TabPanel>
                {/* Pestaña Calzado */}
                <TabPanel>
                  <Fade
                    triggerOnce
                    duration={500}
                    className={`tab-pane fade ${
                      selectedIndex === 2 ? "show active product-block" : ""
                    }`}
                  >
                    <Row>
                      <ProductItem url="/api/footwear" />
                    </Row>
                  </Fade>
                </TabPanel>
                {/* Pestaña Accesorios */}
                <TabPanel>
                  <Fade
                    triggerOnce
                    duration={500}
                    className={`tab-pane fade ${
                      selectedIndex === 3 ? "show active product-block" : ""
                    }`}
                  >
                    <Row>
                      <ProductItem url="/api/accessories" />
                    </Row>
                  </Fade>
                </TabPanel>
              </div>
            </Col>
          </Row>
        </Tabs>
      </div>
    </>
  );
};

export default FashionArrials;

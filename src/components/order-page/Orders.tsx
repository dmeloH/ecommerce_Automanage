"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import TrackViewModal from "../model/TrackViewModal";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLoadOrders } from "../login/CheckOut";

const OrderPage = () => {
  const [show, setShow] = useState(false);
  const orders = useSelector((state: RootState) => state.cart.orders);
  const router = useRouter();
  const dispatch = useDispatch();

  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB")
  );

  useLoadOrders();

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-GB"));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <section className="gi-faq padding-tb-40 gi-wishlist">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Productos <span>Lista de pedidos</span>
            </h2>
            <p>Su pedido de producto es nuestra primera prioridad.</p>
          </div>
          <Row>
            <Col md={12}>
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>Pedidos pendientes</h5>
                  <div className="gi-header-btn">
                    <Link className="gi-btn-2" href="/shop-left-sidebar-col-3">
                      Comprar ahora
                    </Link>
                  </div>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-table">
                      <thead>
                        <tr>
                          <th scope="col">Ordenes por ID</th>
                          <th scope="col">Envío</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Acción</th>
                        </tr>
                      </thead>
                      <tbody className="wish-empt">
                        {orders.filter((o: any) => o.status == "Pending")
                          .length === 0 ? (
                          <tr>
                            <td colSpan={7} className="text-center">
                              <span style={{ display: "flow" }}>
                              No se encontraron pedidos
                              </span>
                            </td>
                          </tr>
                        ) : (
                          <>
                            {orders
                              .filter((o: any) => o.status == "Pending")
                              .map((data: any, index) => (
                                <tr
                                  key={index}
                                  style={{ cursor: "pointer" }}
                                  className="pro-gl-content"
                                >
                                  <td scope="row">
                                    <span>{data.orderId}</span>
                                  </td>
                                  <td>
                                    <span>{data.shippingMethod}</span>
                                  </td>
                                  <td>
                                    <span>{data.totalItems}</span>
                                  </td>
                                  <td>
                                    <span>{currentDate}</span>
                                  </td>
                                  <td>
                                    <span>${data.totalPrice}</span>
                                  </td>
                                  <td>
                                    <span className="avl">{data.status}</span>
                                  </td>
                                  <td>
                                    <span className="avl">
                                      <Link
                                        href={`/orders/${data.orderId}`}
                                        style={{ padding: "20px 30px" }}
                                        className="gi-btn-2"
                                      >
                                        Ver
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="gi-faq padding-tb-40 gi-wishlist">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>Completar pedidos</h5>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-table">
                      <thead>
                        <tr>
                          <th scope="col">ID de pedidos</th>
                          <th scope="col">Envío</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Acción</th>
                        </tr>
                      </thead>
                      <tbody className="wish-empt">
                        {orders.filter((o: any) => o.status == "Completed")
                          .length === 0 ? (
                          <tr>
                            <td colSpan={7} className="text-center">
                              <span style={{ display: "flow" }}>
                              No se encontraron pedidos
                              </span>
                            </td>
                          </tr>
                        ) : (
                          <>
                            {orders
                              .filter((o: any) => o.status == "Completed")
                              .map((data: any, index: number) => (
                                <tr
                                  key={index}
                                  style={{ cursor: "pointer" }}
                                  onClick={handleShow}
                                  className="pro-gl-content"
                                >
                                  <td scope="row">
                                    <span>{data.orderId}</span>
                                  </td>
                                  <td>
                                    <span>{data.shippingMethod}</span>
                                  </td>
                                  <td>
                                    <span>{data.totalItems}</span>
                                  </td>
                                  <td>
                                    <span>{currentDate}</span>
                                  </td>
                                  <td>
                                    <span>${data.totalPrice}</span>
                                  </td>
                                  <td>
                                    <span className="out">Completar</span>
                                  </td>
                                  <td>
                                    <span className="avl">
                                      <a
                                        style={{ padding: "20px 30px" }}
                                        className="gi-btn-2"
                                        href="#"
                                      >
                                        Ver
                                      </a>
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <TrackViewModal
        currentDate={currentDate}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};

export default OrderPage;

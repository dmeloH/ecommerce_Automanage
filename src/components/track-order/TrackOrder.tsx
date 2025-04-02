"use client";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

const TrackOrder = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  if (!login) {
    return (
      <div className="container">
      <p>
        Porfavor <a href="/login">Inicia sesion</a> o <a href="/register">registrate</a> para ver esta pagina
      </p>
    </div>
    );
  }
  return (
    <>
      <section className="gi-track padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
            Seguimiento <span> del pedido </span>
            </h2>
            <p>Del carrito a tus manos, en un abrir y cerrar de ojos. 👀</p>
          </div>
          <div className="row">
            <div className="container">
              <div className="gi-track-box">
                {/* <!-- Details--> */}
                <div className="row">
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                      <span className="gi-track-title">Orden</span>
                      <span>#6152</span>
                    </div>
                  </div>
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                      <span className="gi-track-title">En ruta de entrega</span>
                      <span>v534hb</span>
                    </div>
                  </div>
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                      <span className="gi-track-title">Fecha esperada de entrega</span>
                      <span>Abril / 25 / 2025 - Mayo / 2 / 2025 
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- Progress--> */}
                <div className="gi-steps">
                  <div className="gi-steps-body">
                    <div className="gi-step gi-step-completed">
                      <span className="gi-step-indicator">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-comment-check"></i>
                      </span>
                      Pedido <br></br> confirmado
                    </div>

                    <div className="gi-step gi-step-completed">
                      <span className="gi-step-indicator">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-settings"></i>
                      </span>
                      Orden de <br></br> procesamiento
                    </div>
                    <div className="gi-step gi-step-active">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-gift"></i>
                      </span>
                      control de <br></br> calidad
                    </div>
                    <div className="gi-step">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-truck-side"></i>
                      </span>
                      Producto <br></br> enviado
                    </div>
                    <div className="gi-step">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-home"></i>
                      </span>
                      Producto <br></br> entregado
                    </div>
                  </div>
                  <div className="gi-steps-header">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;

/**
 * Team Component
 * -----------------------------
 * Este componente muestra una sección con los miembros del equipo en un carrusel interactivo.
 * Utiliza React con Swiper para la animación del carrusel y SWR para obtener datos desde una API.
 * 
 * Características principales:
 * - Obtiene datos de la API '/api/team' usando SWR.
 * - Usa Swiper.js para mostrar un carrusel de miembros del equipo con desplazamiento automático.
 * - Muestra un spinner mientras se cargan los datos.
 * - Soporta paginación opcional.
 * - Permite manejar eventos personalizados en caso de éxito o error.
 * - Muestra información de cada miembro del equipo, incluyendo imagen, nombre, cargo y enlaces a redes sociales.
 * - Adapta la cantidad de diapositivas mostradas según el tamaño de la pantalla.
 * 
 * Dependencias necesarias:
 * - React
 * - Swiper (para el carrusel)
 * - SWR (para la obtención de datos)
 * - Bootstrap (para estilos y diseño responsivo)
 * 
 * Props del componente:
 * - `onSuccess`: Función opcional que se ejecuta si la carga de datos es exitosa.
 * - `hasPaginate`: Booleano que indica si se debe manejar paginación en los datos obtenidos.
 * - `onError`: Función opcional que se ejecuta si ocurre un error al cargar los datos.
 * 
 * Uso:
 * ```jsx
 * <Team onSuccess={callback} hasPaginate={true} onError={callback} />
 * ```
 */

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const Team = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  // Obtención de datos con SWR
  const { data, error } = useSWR("/api/team", fetcher, { onSuccess, onError });

  // Manejo de errores en la obtención de datos
  if (error) return <div>Error al cargar los miembros del equipo.</div>;
  
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
      <section className="gi-team-section padding-tb-40">
        <div className="container">
          {/* Título y descripción de la sección */}
          <div className="section-title-2">
            <h2 className="gi-title">
              Our <span>Team</span>
            </h2>
            <p>Meet our expert team members.</p>
          </div>
          
          {/* Carrusel de miembros del equipo */}
          <Swiper
            loop={true}
            navigation={false}
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            spaceBetween={30}
            slidesPerView={5}
            breakpoints={{
              320: { slidesPerView: 1 },
              425: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1025: { slidesPerView: 5 },
            }}
            className="gi-team owl-carousel"
          >
            {getData().map((item, index) => (
              <SwiperSlide key={index} className="gi-team-box">
                <div className="gi-team-imag">
                  <img src={item.image} alt={item.name} />
                  <div className="gi-team-socials">
                    <ul className="align-itegi-center">
                      <li className="gi-social-link">
                        <a href={item.twitter || "#"}>
                          <i className="gicon gi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="gi-social-link">
                        <a href={item.facebook || "#"}>
                          <i className="gicon gi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="gi-social-link">
                        <a href={item.linkedin || "#"}>
                          <i className="gicon gi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="gi-team-info">
                  <h5>{item.name}</h5>
                  <p>{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Team;

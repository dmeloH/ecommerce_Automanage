"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

function HeroSlider() {
  return (
    <>
      <section className="section gi-hero m-tb-40">
        <div className="container">
          <div className="gi-main-content">
            {/* <!-- Hero Slider Start --> */}
            <div className="gi-slider-content">
              <div className="gi-main-slider">
                <>
                  {/* <!-- Main slider  --> */}
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={2000}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    className="swiper-pagination-white gi-slider main-slider-nav main-slider-dot swiper-wrapper"
                  >
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-1">
                      <div className="gi-slide-content slider-animation">
                        <p style={{ color: "#fff" }}>
                          Recibe un % <b>10</b> de descuento en tu primera cita
                        </p>
                        <h1 className="gi-slide-title"style={{ color: "#fff" }}>
                        ¿Fallas en tu auto? Solución rápida y garantizada.
                        </h1>
                        <div className="gi-slide-btn">
                          <a href="#" className="gi-btn-1">
                            Agenda tu cita{" "}
                            <i
                              className="fi-rr-angle-double-small-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-2">
                      <div className="gi-slide-content slider-animation">
                        <p style={{ color: "#fff" }}>
                        ¡Diagnostica y protege tu auto! %<b>10</b> de descuento en tu primera cita
                        </p>
                        <h1 className="gi-slide-title" style={{ color: "#fff" }}>
                        Pequeñas fallas pueden convertirse en grandes problemas.
                        </h1>
                        <div className="gi-slide-btn">
                          <Link href="/" className="gi-btn-1">
                            Agenda ahora{" "}
                            <i
                              className="fi-rr-angle-double-small-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <div className=" swiper-pagination swiper-pagination-white"></div>
                    <div className="swiper-buttons">
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </Swiper>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSlider;

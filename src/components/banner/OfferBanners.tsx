"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Row } from "react-bootstrap";

const OfferBanners = () => {
  return (
    <>
      <section className="gi-offer-section padding-tb-40">
        <div className="container">
          {/* <!--  Offer banners --> */}
          <Row>
            <Fade
              triggerOnce
              direction="left"
              duration={2000}
              className="col-md-6 wow fadeInLeft"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners">
                <div className="gi-bnr-body">
                  <div className="gi-bnr-img">
                    <span className="lbl">70% Off</span>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/banner/2.jpg"
                      }
                      alt="banner"
                    />
                  </div>
                  <div className="gi-bnr-detail">
                    <h5 style={{color: "#fff"}}>Cambio de Aceite</h5>
                    <p style={{color: "#fff"}}>Mantén tu motor en óptimas condiciones con aceite de calidad.</p>
                    <a href="/shop-left-sidebar-col-3" className="gi-btn-2">
                    Compra ahora
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade
              triggerOnce
              direction="right"
              duration={2000}
              className="col-md-6 wow fadeInRight"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners m-t-767">
                <div className="gi-bnr-body">
                  <div className="gi-bnr-img">
                    <span className="lbl">50% Off</span>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/banner/3.jpg"
                      }
                      alt="banner"
                    />
                  </div>
                  <div className="gi-bnr-detail">
                    <h5 style={{color: "#fff"}}>Alineación y Balanceo</h5>
                    <p style={{color: "#fff"}}>Mejora la estabilidad y el desgaste uniforme de tus llantas.</p>
                    <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                    Compra ahora
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </Row>
        </div>
      </section>
    </>
  );
};

export default OfferBanners;

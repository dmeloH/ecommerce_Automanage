import Link from "next/link";
import React from "react";

const CategoryBanner = () => {
  return (
    <>
      <div className="padding-b-40 m-b-40">
        <div className="row">
          <div className="col-md-6">
            <div className="gi-ofr-banners">
              <div className="gi-bnr-body">
                <div className="gi-bnr-img">
                  <span className="lbl">70% Off</span>
                  <img
                    src={
                      process.env.NEXT_PUBLIC_URL + "/assets/img/banner/5.jpg"
                    }
                    alt="banner"
                  />
                </div>
                <div className="gi-bnr-detail">
                  <h5 style={{color: "#fff"}}>Cambio de Aceite</h5>
                  <p>Mantén tu motor en óptimas condiciones con aceite de calidad.</p>
                  <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                    Compra ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gi-ofr-banners m-t-767">
              <div className="gi-bnr-body">
                <div className="gi-bnr-img">
                  <span className="lbl">50% Off</span>
                  <img
                    src={
                      process.env.NEXT_PUBLIC_URL + "/assets/img/banner/6.jpg"
                    }
                    alt="banner"
                  />
                </div>
                <div className="gi-bnr-detail">
                  <h5 style={{color: "#fff"}}>Alineación y Balanceo</h5>
                  <p>Mejora la estabilidad y el desgaste uniforme de tus llantas.</p>
                  <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                    Compra ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;

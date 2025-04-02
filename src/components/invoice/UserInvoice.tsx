"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";

import { PDFContent } from "@/components/pdf-content/PDFContent";

const UserInvoice = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  if (!login) {
    return (
      <div className="container">
        <p>
          Por favor <a href="/login">inicia sesion</a> o <a href="/register">registrate</a>{" "}
          para ver esta página.
        </p>
      </div>
    );
  }
  return (
    <>
      <section className="gi-User-invoice padding-tb-40">
        <div className="container">
          <div className="row mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="gi-vendor-dashboard-card">
                <PDFContent
                  title="Factura"
                  pageSize="A4"
                  margins="20mm"
                  fileName="user-invoice.pdf"
                >
                  <div className="gi-Track-image-inner">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL +
                        "/assets/img/logo/logo.png"
                      }
                      alt="Site Logo"
                    />
                  </div>
                  <div className="row invoice-p-30">
                    <div className="col-sm-6">
                      <div className="my-2">
                        <span className="text-sm text-grey-m2 align-middle">
                          Para :{" "}
                        </span>
                        <span className="name">Daniela Melo</span>
                      </div>
                      <div className="text-grey-m2">
                        <div className="my-2">25 Abril, 2025</div>
                        <div className="my-2">Colombia, Boyacá</div>
                        <div className="my-2">
                          <b className="text-600">Telefono : </b>+57 3125316550
                        </div>
                      </div>
                    </div>
                    <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                      <hr className="d-sm-none" />
                      <div className="text-grey-m2">
                        <div className="my-2">
                          <span className="text-600 text-90">ID : </span>
                          #111-222
                        </div>

                        <div className="my-2">
                          <span className="text-600 text-90">Código Facturación Electrónica :</span>{" "}
                         #123456
                        </div>
                        <div className="my-2">
                          <span className="text-600 text-90">Fecha de asunto :</span>{" "}
                          Abril 25, 2025
                        </div>

                        <div className="my-2">
                          <span className="text-600 text-90">Factura N. :</span>
                          6548
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gi-vendor-card-body">
                    <div className="gi-vendor-card-table mb-minus-24px">
                      <table className="table gi-vender-table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Monto</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span>225</span>
                            </th>
                            <td>
                              <span>Kit de Pastillas de Freno Delanteras</span>
                            </td>
                            <td>
                              <span>2</span>
                            </td>
                            <td>
                              <span>$30.000 COP</span>
                            </td>
                            <td>
                              <span>$60.000 COP</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>548</span>
                            </th>
                            <td>
                              <span>Filtro de Aceite Premium</span>
                            </td>
                            <td>
                              <span>5</span>
                            </td>
                            <td>
                              <span>$40.000 COP</span>
                            </td>
                            <td>
                              <span>$200.000 COP</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>684</span>
                            </th>
                            <td>
                              <span>Batería 12V 60Ah</span>
                            </td>
                            <td>
                              <span>3</span>
                            </td>
                            <td>
                              <span>$10.000 COP</span>
                            </td>
                            <td>
                              <span>$30.000 COP</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>987</span>
                            </th>
                            <td>
                              <span>Amortiguadores Traseros</span>
                            </td>
                            <td>
                              <span>1</span>
                            </td>
                            <td>
                              <span>$50.000 COP</span>
                            </td>
                            <td>
                              <span>$50.000 COP</span>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td className="border-none" colSpan={3}>
                              <span></span>
                            </td>
                            <td className="border-color" colSpan={1}>
                              <span>
                                <strong>Sub Total</strong>
                              </span>
                            </td>
                            <td className="border-color">
                              <span>$340.000 COP</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-none" colSpan={3}>
                              <span></span>
                            </td>
                            <td className="border-color" colSpan={1}>
                              <span>
                                <strong>Impuesto (10%)</strong>
                              </span>
                            </td>
                            <td className="border-color">
                              <span>$34.000 COP</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-none m-m15" colSpan={3}>
                              <span className="note-text-color">
                              Fue un placer atenderte. Si necesitas asesoría o más repuestos, aquí estaremos. <br/>   
                              ¡Buen camino! 🚘
                              </span>
                            </td>
                            <td className="border-color m-m15" colSpan={1}>
                              <span>
                                <strong>Total</strong>
                              </span>
                            </td>
                            <td className="border-color m-m15">
                              <span>$374.000 COP</span>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </PDFContent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInvoice;

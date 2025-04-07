"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";
import Link from "next/link";

export interface RegistrationData {
  email: string;
  phoneNumber: string;
  home_address: string;
  office_address: string;
  profilePhoto?: string;
  description: string;
  taxIdName?: string;
  ssnOrEin?: string;
  panNo?: string;
  businessType?: string;
  bankName?: string;
  bankAccountNo?: string;
}

const VendorSetting = () => {
  const [userData, setUserData] = useState<RegistrationData | null>(null);
  const SwitchOn = useSelector((state: RootState) => state.cart.isSwitchOn);
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const router = useRouter();

  useEffect(() => {
    const loginUser = JSON.parse(localStorage.getItem("login_user") || "{}");
    if (loginUser && loginUser.uid) {
      const vendorData = JSON.parse(localStorage.getItem("vendor") || "{}");
      const userVendorData = vendorData[loginUser.uid] || null;
      setUserData(userVendorData);
    } else {
      console.error("User is not logged in or missing user ID.");
    }
  }, []);

  if (!login) {
    return (
      <div className="container">
        <p>
          Please <a href="/login">login</a> or <a href="/register">register</a>{" "}
          to view this page.
        </p>
      </div>
    );
  }

  const handleEditBtn = (e: any) => {
    e.preventDefault();
    router.push("/vendor-setting-edit");
  };

  return (
    <>
      <section className="gi-vendor-setting padding-tb-40">
        <div className="container">
          <div className="row mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="gi-vendor-settings-card gi-vendor-profile-card">
                <div className="gi-vendor-card-body">
                  <div className="m-b-30">
                    <div className="gi-vendor-settings">
                      <h5>Acerca de nuestra firma</h5>
                      <p>
                        {userData?.description ? (
                          userData?.description
                        ) : (
                          <>
                            No tienes descripción. La agregaré por{" "}
                            <Link href={"/vendor-setting-edit"}>éste link</Link>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="gi-vendor-settings-card">
                    <h5>Información de la cuenta</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="gi-vendor-detail-block m-b-30">
                        <h6>E-mail</h6>
                        <ul>
                          <li>
                            <strong>Email 1 : </strong>
                            {userData?.email}
                          </li>
                          {/* <li>
                            <strong>Email 2 : </strong>support2@exapmle.com
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gi-vendor-detail-block m-b-30">
                        <h6>Número de contacto</h6>
                        <ul>
                          <li>
                            <strong>Número de teléfono 1 : </strong>(+57){" "}
                            {userData?.phoneNumber}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gi-vendor-detail-block m-b-30">
                        <h6>Dirección</h6>
                        <ul>
                          <li>
                            <strong>Office : </strong>
                            {userData?.office_address}
                          </li>
                          <li>
                            <strong>Hogar : </strong>123,{userData?.home_address}{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gi-vendor-detail-block">
                        <h6>Información fiscal</h6>
                        <ul>
                          <li>
                            <strong>Nombre de identificación fiscal: </strong>
                            {userData?.taxIdName}
                          </li>
                          <li>
                            <strong>Número de Seguro Social o EIN: </strong>
                            {userData?.ssnOrEin}
                          </li>
                          <li>
                            <strong>Identificador Interno de la Empresa: </strong>
                            {userData?.panNo}
                          </li>
                          <li>
                            <strong>Tipo de negocio: </strong>
                            {userData?.businessType}
                          </li>
                          <li>
                            <strong>Nombre del banco: </strong>
                            {userData?.bankName}
                          </li>
                          <li>
                            <strong>Número de cuenta bancaria: </strong>
                            {userData?.bankAccountNo}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="edit">
                      <a
                        className="gi-btn-2"
                        data-link-action="editview"
                        title="edit view"
                        data-bs-toggle="modal"
                        data-bs-target="#gi_edit_modal"
                        onClick={handleEditBtn}
                      >
                        <i className="fi fi-rr-pencil"></i>
                        Editar
                      </a>
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

export default VendorSetting;

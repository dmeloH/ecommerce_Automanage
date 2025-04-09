"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Form } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export interface RegistrationData {
  email: string;
  phoneNumber: string;
  office_address: string;
  home_address: string;
  profilePhoto?: string;
  description: string;
  taxIdName: string;
  ssnOrEin: string;
  panNo: string;
  businessType: string;
  bankName: string;
  bankAccountNo: string;
}

export interface error {
  businessType?: string;
  bankName?: string;
}

const VandorSettingEdit = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const userData: any = useSelector(
    (state: RootState) => state.registration.user
  );

  const { Formik } = formik;
  const formikRef = useRef<any>(null);

  // Define Yup validation schema
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    home_address: yup.string().required("Home Address is required"),
    office_address: yup.string().required("Office Address is required"),
    description: yup.string().required("Description is required"),
    taxIdName: yup.string().required("taxId is required"),
    ssnOrEin: yup.string().required("SSN number is required"),
    panNo: yup.string().required("panNo is required"),
    businessType: yup.string().required("business type is required"),
    bankName: yup.string().required("bank name is required"),
    bankAccountNo: yup.string().required("bank account no is required"),
  });

  const router = useRouter();

  let initialValues = null;

  if (!login) {
    return (
      <div className="container">
        <p>
          Porfavor <a href="/login">Inicia sesión</a> o <a href="/register">registrate</a>{" "}
          para ver esta pagina
        </p>
      </div>
    );
  } else {
    if (userData && userData.uid) {
      const vendorData = JSON.parse(localStorage.getItem("vendor") || "{}");
      const userVendorData = vendorData[userData.uid] || {
        email: "",
        phoneNumber: "",
        home_address: "",
        office_address: "",
        profilePhoto: "",
        description: "",
        taxIdName: "",
        ssnOrEin: "",
        panNo: "",
        businessType: "",
        bankName: "",
        bankAccountNo: "",
      };

      if (userVendorData) {
        initialValues = userVendorData;
      }
    }
  }

  const onSubmit = async (values: any) => {
    const loginUser = JSON.parse(localStorage.getItem("login_user") || "{}");
    if (loginUser && loginUser.uid) {
      const vendorData = JSON.parse(localStorage.getItem("vendor") || "{}");
      vendorData[loginUser.uid] = {
        ...loginUser,
        ...values,
      };

      localStorage.setItem("vendor", JSON.stringify(vendorData));

      router.push("/vendor-setting");
    } else {
      console.error("User is not logged in or missing user ID.");
    }
  };

  return (
    <section className="gi-register padding-tb-40">
      <div className="container">
        <div className="section-title-2">
          <h2 className="gi-title">
          Editar proveedor<span></span>
          </h2>
          <p>El mejor lugar para comprar y vender productos digitales. 👩‍💻</p>
        </div>
        <div className="row">
          <div className="gi-register-wrapper">
            <div className="gi-register-container">
              {initialValues ? ( // Only render the form when data is ready
                <div className="gi-register-form">
                  <Formik
                    innerRef={formikRef}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      values,
                      touched,
                      errors,
                    }) => (
                      <>
                        <Form
                          noValidate
                          className="gi-blog-form"
                          onSubmit={handleSubmit}
                        >
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <Form.Group className="settings-field">
                              <Form.Label>Email*</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                placeholder="Introduce tu email "
                                required
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                              />
                              {errors.email &&
                                typeof errors.email === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <Form.Group className="settings-field">
                              <Form.Label>Número de teléfono*</Form.Label>
                              <Form.Control
                                type="text"
                                name="phoneNumber"
                                placeholder="Introduce tu número de teléfono"
                                pattern="^\d{10,12}$"
                                required
                                value={values.phoneNumber}
                                onChange={handleChange}
                                isInvalid={!!errors.phoneNumber}
                              />
                              {errors.phoneNumber &&
                                typeof errors.phoneNumber === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.phoneNumber}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap gi-register-half">
                            <Form.Group className="settings-field">
                              <Form.Label>Nombre de identificación fiscal*</Form.Label>
                              <Form.Control
                                type="text"
                                name="taxIdName"
                                placeholder="Ingrese su nombre de identificación fiscal"
                                value={values.taxIdName}
                                onChange={handleChange}
                                isInvalid={!!errors.taxIdName}
                                required
                              />
                              {errors.taxIdName &&
                                typeof errors.taxIdName === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.taxIdName}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap gi-register-half">
                            <Form.Group className="settings-field">
                              <Form.Label>Número de Seguro Social o EIN*</Form.Label>
                              <Form.Control
                                type="text"
                                name="ssnOrEin"
                                placeholder="Ingrese su SSN o EIN"
                                value={values.ssnOrEin}
                                onChange={handleChange}
                                isInvalid={!!errors.ssnOrEin}
                                required
                              />
                              {errors.ssnOrEin &&
                                typeof errors.ssnOrEin === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.ssnOrEin}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap gi-register-half">
                            <Form.Group className="settings-field">
                              <Form.Label>Identificador Interno de la Empresa*</Form.Label>
                              <Form.Control
                                type="text"
                                name="panNo"
                                pattern="^\d{10,12}$"
                                placeholder="Ingrese su N.º Interno de la Empresa"
                                value={values.panNo}
                                onChange={handleChange}
                                isInvalid={!!errors.panNo}
                                required
                              />
                              {errors.panNo &&
                                typeof errors.panNo === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.panNo}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap gi-register-half">
                            <Form.Group className="settings-field">
                              <Form.Label>Tipo de negocio*</Form.Label>
                              <span
                                className={`gi-rg-select-inner form-control ${
                                  !!errors.businessType ? "is-invalid" : ""
                                }`}
                              >
                                <Form.Control
                                  as="select"
                                  size="sm"
                                  onChange={handleChange}
                                  isInvalid={!!errors.businessType}
                                  value={values.businessType}
                                  name="businessType"
                                  id="gi-select-city"
                                  className="gi-register-select"
                                >
                                  <option value="">Seleccionar tipo de negocio</option>
                                  <option value="Partnership">
                                    Eléctrico
                                  </option>
                                  <option value="Corporation">
                                    Estetico
                                  </option>
                                  <option value="Individual">Mecánico</option>
                                </Form.Control>
                              </span>
                              {errors.businessType &&
                                typeof errors.businessType === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.businessType}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap gi-register-half">
                            <Form.Group className="settings-field">
                              <Form.Label>Nombre del banco</Form.Label>
                              <span
                                className={`gi-rg-select-inner form-control  ${
                                  !!errors.bankName ? "is-invalid" : ""
                                }`}
                              >
                                <Form.Select
                                  size="sm"
                                  onChange={handleChange}
                                  isInvalid={!!errors.bankName}
                                  value={values.bankName}
                                  name="bankName"
                                  id="gi-select-city"
                                  className="gi-register-select"
                                >
                                  <option value="">Seleccionar banco</option>
                                  <option value="Bancos de colombia">
                                    Bancos de colombia
                                  </option>
                                  <option value="Bancolombia">Bancolombia</option>
                                  <option value="Banco de Bogotá">Banco de Bogotá</option>
                                  <option value="Davivienda">Davivienda</option>
                                </Form.Select>
                              </span>
                              {errors.bankName &&
                                typeof errors.bankName === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.bankName}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap gi-register-half">
                            <Form.Group className="settings-field">
                              <Form.Label>Número de cuenta bancaria*</Form.Label>
                              <Form.Control
                                type="text"
                                name="bankAccountNo"
                                placeholder="Ingrese su número de cuenta bancaria"
                                value={values.bankAccountNo}
                                onChange={handleChange}
                                isInvalid={!!errors.bankAccountNo}
                                required
                              />
                              {errors.bankAccountNo &&
                                typeof errors.bankAccountNo === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.bankAccountNo}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap">
                            <Form.Group className="settings-field">
                              <Form.Label>Dirección del establecimiento</Form.Label>
                              <Form.Control
                                type="text"
                                name="office_address"
                                placeholder="Dirección Línea 1"
                                value={values.office_address}
                                onChange={handleChange}
                                isInvalid={!!errors.office_address}
                                required
                              />
                              {errors.office_address &&
                                typeof errors.office_address === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.office_address}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap">
                            <Form.Group className="settings-field">
                              <Form.Label>Dirección de casa</Form.Label>
                              <Form.Control
                                type="text"
                                name="home_address"
                                placeholder="Dirección Línea 1"
                                value={values.home_address}
                                onChange={handleChange}
                                isInvalid={!!errors.home_address}
                                required
                              />
                              {errors.home_address &&
                                typeof errors.home_address === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.home_address}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="form-group gi-register-wrap">
                            <Form.Group className="settings-field">
                              <Form.Label>Acerca de mí</Form.Label>
                              <Form.Control
                                as="textarea"
                                className="form-control"
                                rows={3}
                                placeholder="Mensaje"
                                name="description"
                                required
                                value={values.description}
                                onChange={handleChange}
                                isInvalid={!!errors.description}
                              ></Form.Control>
                              {errors.description &&
                                typeof errors.description === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span
                            style={{ justifyContent: "end", marginTop: "10px" }}
                            className="gi-register-wrap gi-register-btn"
                          >
                            <button className="gi-btn-1" type="submit">
                              Guardar
                            </button>
                          </span>
                        </Form>
                      </>
                    )}
                  </Formik>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VandorSettingEdit;

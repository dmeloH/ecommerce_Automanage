"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../product-item/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import StarRating from "../stars/StarRating";
import { Fade } from "react-awesome-reveal";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import { Col, Form, Row } from "react-bootstrap";
import Spinner from "../button/Spinner";
import { useRouter } from "next/navigation";
import { addOrder, clearCart, setOrders } from "@/store/reducers/cartSlice";
import { login } from "@/store/reducers/registrationSlice";
import { showErrorToast, showSuccessToast } from "../toast-popup/Toastify";
import DiscountCoupon from "../discount-coupon/DiscountCoupon";
import PaymentForm from "../PaymentForm/PaymentForm";

interface Address {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  state: string;
}

interface Registration {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
  state: string;
  password: string;
  uid: any;
}

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  state: string;
}

interface Country {
  id: string;
  name: any;
  iso2: string;
}

interface State {
  id: string;
  name: any;
  state_code: string;
}

interface City {
  id: string;
  name: any;
  iso2: string;
}

const CheckOut = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    phoneNumber?: string;
    postalCode?: string;
    country?: string;
    state?: string;
    city?: string;
  }>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const orders = useSelector((state: RootState) => state.cart.orders);
  const isLogin = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState("free");
  const [checkOutMethod, setCheckOutMethod] = useState("guest");
  const [billingMethod, setBillingMethod] = useState("new");
  const [billingVisible, setBillingVisible] = useState(false);
  const [addressVisible, setAddressVisible] = useState<any[]>([]);
  const [optionVisible, setOptionVisible] = useState(true);
  const [loginVisible, setLoginVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [filteredCountryData, setFilteredCountryData] = useState<Country[]>([]);
  const [filteredStateData, setFilteredStateData] = useState<State[]>([]);
  const [filteredCityData, setFilteredCityData] = useState<City[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData]: any = useState({
    id: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    state: "",
  });

  const { data: country } = useSWR("/api/country", fetcher, {
    onSuccess,
    onError,
  });

  useEffect(() => {
    const existingAddresses = JSON.parse(
      localStorage.getItem("shippingAddresses") || "[]"
    );
    setAddressVisible(existingAddresses);

    if (existingAddresses.length > 0 && !selectedAddress) {
      setSelectedAddress(existingAddresses[0]);
    }
  }, [selectedAddress]);

  useEffect(() => {
    if (selectedAddress) {
      setBillingMethod("use");
    } else {
      setBillingMethod("new");
    }
  }, [selectedAddress]);

  useEffect(() => {
    if (isLogin) {
      setBtnVisible(false);
      setOptionVisible(false);
      setBillingVisible(true);
    }
  }, [isLogin]);

  useEffect(() => {
    if (country) {
      setFilteredCountryData(
        country.map((country: any) => ({
          id: country.id,
          countryName: country.name,
          iso2: country.iso2,
        }))
      );
    }
  }, [country]);

  const handleDeliveryChange = (event: any) => {
    setSelectedMethod(event.target.value);
  };

  const handleBillingChange = (event: any) => {
    setBillingMethod(event.target.value);
  };

  const handleCheckOutChange = (event: any) => {
    const method = event.target.value;
    setCheckOutMethod(method);
    setBillingVisible(false);
    setLoginVisible(true);
    setBtnVisible(true);

    if (method === "guest") {
      setBillingVisible(false);
      setLoginVisible(false);
    } else if (method === "login") {
      setLoginVisible(true);
      setBtnVisible(false);
    }
  };

  const handleContinueBtn = () => {
    if (checkOutMethod === "register") {
      router.push("/register");
    } else if (checkOutMethod === "guest") {
      setBillingVisible(true);
      setLoginVisible(false);
      setBtnVisible(false);
    } else if (checkOutMethod === "login") {
      setBillingVisible(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    formData.id = `${Date.now()}`;

    const existingAddresses = JSON.parse(
      localStorage.getItem("shippingAddresses") || "[]"
    );

    let updatedAddresses;
    if (existingAddresses.length === 0) {
      updatedAddresses = [formData];
      setSelectedAddress(formData);
    } else {
      updatedAddresses = [...existingAddresses, formData];
    }

    localStorage.setItem("shippingAddresses", JSON.stringify(updatedAddresses));
    setAddressVisible(updatedAddresses);
    setSelectedAddress(formData);

    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      state: "",
    });

    const requiredFields = [
      "firstName",
      "lastName",
      "address",
      "country",
      "state",
      "city",
      "postalCode",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setValidated(true);
        return;
      }
    }

    setValidated(false);
  };

  const handleInputChange = (e: any, additionalValue: string = "") => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      ...(name === "country" && { countryName: additionalValue }),
      ...(name === "state" && { stateName: additionalValue }),
    });
  };

  useEffect(() => {
    const storedRegistrations = JSON.parse(
      localStorage.getItem("registrationData") || "[]"
    );
    setRegistrations(storedRegistrations);
  }, []);

  useEffect(() => {
    const storedAddresses = JSON.parse(
      localStorage.getItem("shippingAddresses") || "[]"
    );
    setAddressVisible(storedAddresses);
  }, []);

  // item Price

  useEffect(() => {
    if (cartItems.length === 0) {
      setSubTotal(0);
      setVat(0);
      return;
    }

    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.newPrice * item.quantity,
      0
    );
    setSubTotal(subtotal);
    // Calculate VAT
    const vatAmount = subtotal * 0.2;
    setVat(vatAmount);
  }, [cartItems]);

  const handleDiscountApplied = (discount) => {
    setDiscount(discount);
  };

  const discountAmount = subTotal * (discount / 100);
  const total = subTotal + vat - discountAmount;
  // item Price end

  const { data, error } = useSWR("/api/deal", fetcher, { onSuccess, onError });

  if (error) return <div>No se pudieron cargar los productos</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  const generateRandomId = () => {
    const randomNum = Math.floor(Math.random() * 100000);
    return `${randomNum}`;
  };

  const randomId = generateRandomId();

  const handleCheckout = () => {
    if (!isTermsChecked) {
      showErrorToast("Please agree to the Terms & Conditions.");
      checkboxRef.current?.focus();
      return;
    }

    if (!selectedAddress) {
      showErrorToast("Please select a billing address.");
      return;
    }

    const newOrder = {
      orderId: randomId,
      date: new Date().getTime(),
      shippingMethod: selectedMethod,
      totalItems: cartItems.length,
      totalPrice: total,
      status: "Pending",
      products: cartItems,
      address: selectedAddress,
    };

    const orderExists = orders.some(
      (order: any) => order.id === newOrder.orderId
    );

    if (!orderExists) {
      dispatch(addOrder(newOrder));
    } else {
      console.log(
        `Order with ID ${newOrder.orderId} already exists and won't be added again.`
      );
    }
    dispatch(clearCart());

    router.push("/orders");
  };

  const handleRemoveAddress = (index: number) => {
    const updatedAddresses = addressVisible.filter((_, i) => i !== index);
    localStorage.setItem("shippingAddresses", JSON.stringify(updatedAddresses));
    setAddressVisible(updatedAddresses);
  };

  const handleSelectAddress = (address: any) => {
    setSelectedAddress(address);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const foundUser = registrations.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      const userData = { uid: foundUser.uid, email, password };

      localStorage.setItem("login_user", JSON.stringify(userData));
      dispatch(login(foundUser));
      showSuccessToast("User Login Success");
    } else {
      showErrorToast("Invalid email or password");
    }

    const requiredFields = ["email", "password"];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setValidated(true);
        return;
      }
    }
    setValidated(true);
  };

  const handleCountryChange = async (e: any) => {
    const { value, options, selectedIndex } = e.target;
    const countryName = options[selectedIndex].text;
    handleInputChange(e, countryName);

    setLoadingStates(true);
    const response = await fetcher(`/api/state`, {
      country_code: value,
    });
    setLoadingStates(false);
    setFilteredStateData(
      response.map((state: any) => ({
        id: state.id,
        StateName: state.name,
        state_code: state.state_code,
      }))
    );
    setFilteredCityData([]);
  };

  const handleStateChange = async (e: any) => {
    const { value, options, selectedIndex } = e.target;
    const stateName = options[selectedIndex].text;

    handleInputChange(e, stateName);
    setLoadingCities(true);

    const response = await fetcher(`/api/city`, {
      states_code: value,
      country_code: formData.country,
    });
    setLoadingCities(false);
    setFilteredCityData(
      response.map((city: any) => ({
        id: city.id,
        CityName: city.name,
        iso2: city.iso2,
      }))
    );
  };

  const handleCityChange = (e: any) => {
    handleInputChange(e);
  };

  return (
    <>
      <Breadcrumb title={"Verificación"} />
      <section className="gi-checkout-section padding-tb-40">
        <h2 className="d-none">Página de pago</h2>
        <div className="container">
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "300",
              }}
              className="gi-pro-content cart-pro-title"
            >
              {" "}
              Su carrito está vacío. Añada artículos al carrito para continuar.
            </div>
          ) : (
            <Row>
              {/* <!-- Sidebar Area Start --> */}
              <Col lg={4} md={12} className="gi-checkout-rightside">
                <div className="gi-sidebar-wrap">
                  {/* <!-- Sidebar Summary Block --> */}
                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title">
                      <h3 className="gi-sidebar-title">Resumen</h3>
                    </div>
                    <div className="gi-sb-block-content">
                      <div className="gi-checkout-summary">
                        <div>
                          <span className="text-left">Sub-Total</span>
                          <span className="text-right">
                            ${subTotal.toFixed(2)}
                          </span>
                        </div>
                        <div>
                          <span className="text-left">Gastos de envío</span>
                          <span className="text-right">${vat.toFixed(2)}</span>
                        </div>
                        <div>
                          <DiscountCoupon
                            onDiscountApplied={handleDiscountApplied}
                          />
                        </div>
                        <div className="gi-checkout-coupan-content">
                          <form
                            className="gi-checkout-coupan-form"
                            name="gi-checkout-coupan-form"
                            method="post"
                            action="#"
                          >
                            <input
                              className="gi-coupan"
                              type="text"
                              required
                              placeholder="Enter Your Coupan Code"
                              name="gi-coupan"
                              defaultValue=""
                            />
                            <button
                              className="gi-coupan-btn gi-btn-2"
                              type="submit"
                              name="subscribe"
                            >
                              Aplicar
                            </button>
                          </form>
                        </div>
                        <div className="gi-checkout-summary-total">
                          <span className="text-left">Monto total</span>
                          <span className="text-right">
                            ${total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="gi-checkout-pro">
                        {cartItems.map((item: any, index: number) => (
                          <div key={index} className="col-sm-12 mb-6">
                            <div className="gi-product-inner">
                              <div className="gi-pro-image-outer">
                                <div className="gi-pro-image">
                                  <a
                                    href="/product-left-sidebar"
                                    className="image"
                                  >
                                    <img
                                      className="main-image"
                                      src={item.image}
                                      alt="Product"
                                    />
                                    <img
                                      className="hover-image"
                                      src={item.imageTwo}
                                      alt="Product"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="gi-pro-content">
                                <h5 className="gi-pro-title">
                                  <a href="/product-left-sidebar">
                                    {item.title}
                                  </a>
                                </h5>
                                <div className="gi-pro-rating">
                                  <StarRating rating={item.rating} />
                                </div>
                                <span className="gi-price">
                                  <span className="old-price">
                                    ${item.oldPrice}.000{" "}
                                  </span>
                                  <span className="new-price">
                                    ${item.newPrice}.000
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Sidebar Summary Block --> */}
                </div>
                <div className="gi-sidebar-wrap gi-checkout-del-wrap">
                  {/* <!-- Sidebar Summary Block --> */}
                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title">
                      <h3 className="gi-sidebar-title">Método de entrega</h3>
                    </div>
                    <div className="gi-sb-block-content">
                      <div className="gi-checkout-del">
                        <div className="gi-del-desc">
                        Seleccione el método de envío que prefiera para este pedido.
                        </div>
                        <form action="#">
                          <span className="gi-del-option">
                            <span>
                              <span className="gi-del-opt-head">
                              Envío gratis
                              </span>
                              <input
                                type="radio"
                                id="del1"
                                name="radio-group"
                                value="free"
                                checked={selectedMethod === "free"}
                                onChange={handleDeliveryChange}
                              />
                              <label htmlFor="del1">Tasa - $0.00</label>
                            </span>
                            <span>
                              <span className="gi-del-opt-head">Tarifa Plana</span>
                              <input
                                type="radio"
                                id="del2"
                                name="radio-group"
                                value="flat"
                                checked={selectedMethod === "flat"}
                                onChange={handleDeliveryChange}
                              />
                              <label htmlFor="del2">Tasa - $5.000</label>
                            </span>
                          </span>
                          <span className="gi-del-comment">
                            <span className="gi-del-opt-head">
                            Añadir comentarios sobre su pedido
                            </span>
                            <textarea
                              name="your-comment"
                              placeholder="Comentarios"
                            ></textarea>
                          </span>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Sidebar Summary Block --> */}
                </div>
                <div className="gi-sidebar-wrap gi-checkout-pay-wrap">
                  {/* <!-- Sidebar Payment Block --> */}
                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title">
                      <h3 className="gi-sidebar-title">Método de pago</h3>
                    </div>
                    <div className="gi-sb-block-content">
                      <div className="gi-checkout-pay">
                        <div className="gi-pay-desc">
                        Seleccione el método de pago que prefiera para este pedido.
                        </div>
                        <form action="#">
                          <span className="gi-pay-option">
                            <span>
                              <input
                                readOnly
                                type="radio"
                                id="pay1"
                                name="radio-group"
                                value=""
                                checked
                              />
                              <label htmlFor="pay1">Contra reembolso</label>
                            </span>
                          </span>
                          <span className="gi-pay-commemt">
                            <span className="gi-pay-opt-head">
                            Añadir comentarios sobre su pedido
                            </span>
                            <textarea
                              name="your-commemt"
                              placeholder="Comentarios"
                            ></textarea>
                          </span>
                          <span className="gi-pay-agree">
                            <input
                              ref={checkboxRef}
                              required
                              checked={isTermsChecked}
                              onChange={() =>
                                setIsTermsChecked(!isTermsChecked)
                              }
                              type="checkbox"
                              value=""
                            />
                            <a href="#">
                            He leído y acepto los términos y condiciones{" "}
                              <span>Términos y condiciones.</span>
                            </a>
                            <span className="checked"></span>
                          </span>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Sidebar Payment Block --> */}

                  <PaymentForm/>
                </div>
                <div className="gi-sidebar-wrap gi-check-pay-img-wrap">
                  {/* <!-- Sidebar Payment Block --> */}
                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title">
                      <h3 className="gi-sidebar-title">Método de pago</h3>
                    </div>
                    <div className="gi-sb-block-content">
                      <div className="gi-check-pay-img-inner">
                        <div className="gi-check-pay-img">
                          <img
                            src={
                              process.env.NEXT_PUBLIC_URL +
                              "/assets/img/hero-bg/payment.png"
                            }
                            alt="payment"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Sidebar Payment Block --> */}
                </div>
              </Col>
              <Col lg={8} md={12} className="gi-checkout-leftside m-t-991">
                {/* <!-- checkout content Start --> */}
                <div className="gi-checkout-content">
                  <div className="gi-checkout-inner">
                    {optionVisible && (
                      <>
                        <div className="gi-checkout-wrap m-b-40">
                          <div className="gi-checkout-block">
                            <h3 className="gi-checkout-title">Nuevo cliente</h3>
                            <div className="gi-check-block-content">
                              <div className="gi-check-subtitle">
                              Opciones de pago
                              </div>
                              <form action="#">
                                <span className="gi-new-option">
                                  <span>
                                    <input
                                      type="radio"
                                      id="account2"
                                      name="radio-group"
                                      value="guest"
                                      checked={checkOutMethod === "guest"}
                                      onChange={handleCheckOutChange}
                                    />
                                    <label htmlFor="account2">
                                    Cuenta de invitado
                                    </label>
                                  </span>
                                  <span>
                                    <input
                                      type="radio"
                                      id="account1"
                                      name="radio-group"
                                      value="register"
                                      checked={checkOutMethod === "register"}
                                      onChange={handleCheckOutChange}
                                    />
                                    <label htmlFor="account1">
                                    Registrar cuenta
                                    </label>
                                  </span>
                                  <span>
                                    <input
                                      type="radio"
                                      id="account3"
                                      name="radio-group"
                                      value="login"
                                      checked={checkOutMethod === "login"}
                                      onChange={handleCheckOutChange}
                                    />
                                    <label htmlFor="account3">
                                    Iniciar sesión cuenta
                                    </label>
                                  </span>
                                </span>
                              </form>

                              {btnVisible ? (
                                <>
                                  <div className="gi-new-desc">
                                    By creating an account you will be able to
                                    shop faster, be up to date on an order`s
                                    status, and keep track of the orders you
                                    have previously made.
                                  </div>

                                  <div className="gi-new-btn">
                                    <a
                                      onClick={handleContinueBtn}
                                      className="gi-btn-2"
                                    >
                                      Continuar
                                    </a>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {loginVisible && (
                                    <div
                                      style={{ marginTop: "15px" }}
                                      className=" m-b-40"
                                    >
                                      <div className="gi-checkout-block gi-check-login">
                                        <div className="gi-check-login-form">
                                          <Form
                                            noValidate
                                            validated={validated}
                                            onSubmit={handleLogin}
                                            action="#"
                                            method="post"
                                          >
                                            <span className="gi-check-login-wrap">
                                              <label>Email Address</label>
                                              <Form.Group>
                                                <Form.Control
                                                  type="text"
                                                  name="email"
                                                  placeholder="Enter your email address"
                                                  value={email}
                                                  onChange={(e) =>
                                                    setEmail(e.target.value)
                                                  }
                                                  required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                Por favor ingrese un nombre de usuario correcto.
                                                </Form.Control.Feedback>
                                              </Form.Group>
                                            </span>
                                            <span
                                              style={{ marginTop: "24px" }}
                                              className="gi-check-login-wrap"
                                            >
                                              <label>Contraseña</label>
                                              <Form.Group>
                                                <Form.Control
                                                  type="password"
                                                  name="password"
                                                  pattern="^\d{6,12}$"
                                                  placeholder="Enter your password"
                                                  required
                                                  value={password}
                                                  onChange={(e) =>
                                                    setPassword(e.target.value)
                                                  }
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                Por favor, introduzca un número de 6 a 12 dígitos.
                                                </Form.Control.Feedback>
                                              </Form.Group>
                                            </span>
                                            <span className="gi-check-login-wrap gi-check-login-btn">
                                              <button
                                                className="gi-btn-2"
                                                type="submit"
                                              >
                                                Continuar
                                              </button>
                                              <a
                                                className="gi-check-login-fp"
                                                href="#"
                                              >
                                                ¿Has olvidado tu contraseña?
                                              </a>
                                            </span>
                                          </Form>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {billingVisible && (
                      <div className="gi-checkout-wrap m-b-30 padding-bottom-3">
                        <div className="gi-checkout-block gi-check-bill">
                          <h3 className="gi-checkout-title">Detalles de facturación</h3>
                          <div className="gi-bl-block-content">
                            <div className="gi-check-subtitle">
                            Opciones de pago
                            </div>
                            <span className="gi-bill-option">
                              <span>
                                <input
                                  type="radio"
                                  id="bill1"
                                  name="radio-group"
                                  value="use"
                                  checked={billingMethod === "use"}
                                  onChange={handleBillingChange}
                                  disabled={addressVisible.length === 0}
                                />
                                <label htmlFor="bill1">
                                Quiero usar una dirección existente
                                </label>
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  id="bill2"
                                  name="radio-group"
                                  value="new"
                                  checked={
                                    billingMethod === "new" ||
                                    addressVisible.length === 0
                                  }
                                  onChange={handleBillingChange}
                                />
                                <label htmlFor="bill2">
                                Quiero usar una nueva dirección
                                </label>
                              </span>
                            </span>
                            {(billingMethod === "new" ||
                              addressVisible.length === 0) && (
                              <div className="gi-check-bill-form">
                                <Form
                                  noValidate
                                  validated={validated}
                                  onSubmit={handleSubmit}
                                  action="#"
                                  method="post"
                                >
                                  <span
                                    style={{ marginTop: "10px" }}
                                    className="gi-bill-wrap gi-bill-half"
                                  >
                                    <label>Nombre*</label>
                                    <Form.Group>
                                      <Form.Control
                                        type="text"
                                        name="firstName"
                                        placeholder="Introduce tu nombre"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                      />
                                      <Form.Control.Feedback type="invalid">
                                      Por favor, introduzca su nombre.
                                      </Form.Control.Feedback>
                                    </Form.Group>
                                  </span>
                                  <span
                                    style={{ marginTop: "10px" }}
                                    className="gi-bill-wrap gi-bill-half"
                                  >
                                    <label>Apellido*</label>
                                    <Form.Group>
                                      <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder="Introduce tu apellido"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        Por favor, introduzca su apellido.
                                      </Form.Control.Feedback>
                                    </Form.Group>
                                  </span>
                                  <span
                                    style={{ marginTop: "10px" }}
                                    className="gi-bill-wrap"
                                  >
                                    <label>Dirección</label>
                                    <Form.Group>
                                      <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="Dirección Línea 1"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                      />
                                      <Form.Control.Feedback type="invalid">
                                      Por favor ingrese la dirección.
                                      </Form.Control.Feedback>
                                    </Form.Group>
                                  </span>
                                  <Form.Group
                                    style={{ marginTop: "10px" }}
                                    className="gi-bill-wrap gi-bill-half"
                                  >
                                    <label>País</label>
                                    <span className="gi-bl-select-inner">
                                      <Form.Select
                                        size="sm"
                                        style={{ width: "1px" }}
                                        name="country"
                                        id="gi-select-state"
                                        className="gi-bill-select"
                                        defaultValue={formData.country}
                                        onChange={handleCountryChange}
                                        isInvalid={
                                          validated && !formData.country
                                        }
                                        required
                                      >
                                        <option value="" disabled>
                                        País
                                        </option>
                                        {filteredCountryData.map(
                                          (country: any, index: number) => (
                                            <option
                                              key={index}
                                              value={country.iso2}
                                            >
                                              {country.countryName}
                                            </option>
                                          )
                                        )}
                                      </Form.Select>
                                    </span>
                                  </Form.Group>
                                  <span
                                    style={{ marginTop: "10px" }}
                                    className="gi-bill-wrap gi-bill-half"
                                  >
                                    <label>Región Estado</label>
                                    <Form.Group className="gi-bl-select-inner">
                                      <Form.Select
                                        size="sm"
                                        style={{ width: "1px" }}
                                        name="state"
                                        id="gi-select-state"
                                        className="gi-bill-select"
                                        defaultValue={formData.state}
                                        onChange={handleStateChange}
                                        required
                                      >
                                        <option value="" disabled>
                                        Región/Estado
                                        </option>
                                        {loadingStates ? (
                                          <option disabled>Cargando...</option>
                                        ) : (
                                          filteredStateData.map(
                                            (state: any, index) => (
                                              <option
                                                key={index}
                                                value={state.state_code}
                                              >
                                                {state.StateName}
                                              </option>
                                            )
                                          )
                                        )}
                                      </Form.Select>
                                    </Form.Group>
                                  </span>
                                  <span
                                    style={{ marginTop: "10px" }}
                                    className="gi-bill-wrap gi-bill-half"
                                  >
                                    <label>Ciudad*</label>
                                    <Form.Group className="gi-bl-select-inner">
                                      <Form.Select
                                        size="sm"
                                        style={{ width: "1px" }}
                                        name="city"
                                        id="gi-select-city"
                                        className="gi-bill-select"
                                        defaultValue={formData.city}
                                        onChange={handleCityChange}
                                        required
                                      >
                                        <option value="" disabled>
                                        Ciudad
                                        </option>
                                        {loadingCities ? (
                                          <option disabled>Cargando...</option>
                                        ) : (
                                          filteredCityData.map(
                                            (city: any, index) => (
                                              <option
                                                key={index}
                                                value={city.iso2}
                                              >
                                                {city.CityName}
                                              </option>
                                            )
                                          )
                                        )}
                                      </Form.Select>
                                    </Form.Group>
                                  </span>
                                  <span
                                    style={{ marginTop: "10px" }}
                                    className="gi-bill-wrap gi-bill-half"
                                  >
                                    <label>Código postal</label>
                                    <Form.Group>
                                      <Form.Control
                                        type="text"
                                        name="postalCode"
                                        pattern="^\d{5,6}$"
                                        placeholder="Codigo postal"
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        required
                                      />
                                      <Form.Control.Feedback type="invalid">
                                      Ingrese un número de 05-06 dígitos.
                                      </Form.Control.Feedback>
                                    </Form.Group>
                                  </span>
                                  <span className="gi-check-order-btn">
                                    <button type="submit" className="gi-btn-2">
                                      Guardar
                                    </button>
                                  </span>
                                </Form>
                              </div>
                            )}
                            {billingMethod === "use" &&
                              addressVisible.length > 0 && (
                                <>
                                  <div className="gi-checkout-block gi-check-bill">
                                    <div className="gi-sidebar-block">
                                      <div className="gi-sb-title">
                                        <h3 className="gi-sidebar-title">
                                          Dirección
                                        </h3>
                                      </div>
                                      <div className="gi-sb-block-content">
                                        <div className="gi-checkout-pay">
                                          {selectedAddress === null && (
                                            <div
                                              style={{ marginBottom: "15px" }}
                                              className="gi-pay-desc"
                                            >
                                              Seleccione la dirección que prefiera para este pedido.
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <ul>
                                      {addressVisible.map((address, index) => (
                                        <li key={index}>
                                          <div
                                            style={{
                                              padding: "10px",
                                              background: "transparent",
                                              position: "relative",
                                            }}
                                            className="bill-box m-b-30"
                                          >
                                            <div>
                                              <div
                                                style={{
                                                  position: "absolute",
                                                  top: "10px",
                                                  left: "10px",
                                                }}
                                                className="checkboxes__item"
                                              >
                                                <label className="checkbox style-c">
                                                  <input
                                                    value=""
                                                    type="checkbox"
                                                    checked={
                                                      selectedAddress != null &&
                                                      selectedAddress.id ===
                                                        address.id
                                                    }
                                                    onChange={() =>
                                                      handleSelectAddress(
                                                        address
                                                      )
                                                    }
                                                  />
                                                  <div className="checkbox__checkmark"></div>
                                                  <div className="checkbox__body"></div>
                                                </label>
                                              </div>
                                              <Row
                                                style={{ padding: "0 30px" }}
                                              >
                                                <Col
                                                  style={{ lineHeight: "25px" }}
                                                  lg={6}
                                                  md={6}
                                                  sm={12}
                                                >
                                                  <div className="gi-single-list">
                                                    <ul>
                                                      <li>
                                                        <strong className="gi-check-subtitle">
                                                          Nombre :
                                                        </strong>{" "}
                                                        <span
                                                          style={{
                                                            color: "#777",
                                                          }}
                                                        >
                                                          {address.firstName}{" "}
                                                          {address.lastName}{" "}
                                                        </span>
                                                      </li>
                                                      <li>
                                                        <strong className="gi-check-subtitle">
                                                          Dirección :
                                                        </strong>{" "}
                                                        <span
                                                          style={{
                                                            color: "#777",
                                                          }}
                                                        >
                                                          {address.address}
                                                        </span>
                                                      </li>
                                                      <li>
                                                        <strong className="gi-check-subtitle">
                                                          Codigo portal :
                                                        </strong>{" "}
                                                        <span
                                                          style={{
                                                            color: "#777",
                                                          }}
                                                        >
                                                          {address.postalCode}
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </Col>
                                                <Col
                                                  style={{ lineHeight: "25px" }}
                                                  lg={6}
                                                  md={6}
                                                  sm={12}
                                                >
                                                  <div className="gi-single-list">
                                                    <ul>
                                                      <li>
                                                        <strong className="gi-check-subtitle">
                                                        País :
                                                        </strong>{" "}
                                                        <span
                                                          style={{
                                                            color: "#777",
                                                          }}
                                                        >
                                                          {address.countryName}
                                                        </span>
                                                      </li>
                                                      <li>
                                                        <strong className="gi-check-subtitle">
                                                        Estado :
                                                        </strong>{" "}
                                                        <span
                                                          style={{
                                                            color: "#777",
                                                          }}
                                                        >
                                                          {address.stateName}
                                                        </span>
                                                      </li>
                                                      <li>
                                                        <strong className="gi-check-subtitle">
                                                          Ciudad :
                                                        </strong>{" "}
                                                        <span
                                                          style={{
                                                            color: "#777",
                                                          }}
                                                        >
                                                          {address.city}
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </Col>
                                              </Row>

                                              <div>
                                                <a
                                                  style={{
                                                    fontSize: "30px",
                                                    color: "#5caf90",
                                                    position: "absolute",
                                                    top: "0",
                                                    right: "10px",
                                                  }}
                                                  onClick={() =>
                                                    handleRemoveAddress(index)
                                                  }
                                                  href="#/"
                                                  className="remove"
                                                >
                                                  ×
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              )}
                          </div>
                        </div>
                      </div>
                    )}
                    {btnVisible ||
                      (!btnVisible === billingVisible && (
                        <span className="gi-check-order-btn">
                          <a onClick={handleCheckout} className="gi-btn-2">
                          Realizar pedido
                          </a>
                        </span>
                      ))}
                  </div>
                </div>
                {/* <!--cart content End --> */}
              </Col>
            </Row>
          )}
        </div>
      </section>
      {cartItems.length !== 0 ? (
        <section className="gi-new-product padding-tb-40">
          <div className="container">
            <Row className="overflow-hidden m-b-minus-24px">
              <Col lg={12} className="gi-new-prod-section col-lg-12">
                <div className="gi-products">
                  <Fade
                    direction="up"
                    duration={2000}
                    triggerOnce
                    delay={200}
                    className="section-title-2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  >
                    <h2 className="gi-title">
                      Nuevos <span>Productos llegados</span>
                    </h2>
                    <p>Explora la colección de los mejores productos</p>
                  </Fade>
                  <Fade
                    direction="up"
                    duration={2000}
                    triggerOnce
                    delay={200}
                    className="gi-new-block m-minus-lr-12"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                  >
                    <Swiper
                      loop={true}
                      autoplay={{ delay: 1000 }}
                      slidesPerView={5}
                      className="deal-slick-carousel gi-product-slider"
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 25,
                        },
                        426: {
                          slidesPerView: 2,
                        },
                        640: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1025: {
                          slidesPerView: 5,
                        },
                      }}
                    >
                      {getData().map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                          <ItemCard data={item} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Fade>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default CheckOut;

export const useLoadOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loginUser = JSON.parse(localStorage.getItem("login_user") || "{}");

      if (loginUser?.uid) {
        const storedOrders = JSON.parse(localStorage.getItem("orders") || "{}");
        const userOrders = storedOrders[loginUser.uid] || [];

        if (userOrders.length > 0) {
          dispatch(setOrders(userOrders));
        }
      }
    }
  }, [dispatch]);
};

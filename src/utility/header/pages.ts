interface Page {
  name: string;
  href: string;
}

const pages: Page[] = [
  {
    name: "Sobre nosotros",
    href: "/about-us",
  },
  {
    name: "Contactenos",
    href: "/contact-us",
  },
  {
    name: "Carrito",
    href: "/cart",
  },
  {
    name: "Checkout",
    href: "/checkout",
  },
  {
    name: "Ordenes",
    href: "/orders",
  },
  {
    name: "Comparar",
    href: "/compare",
  },
  {
    name: "Preguntas frecuentes",
    href: "/faq",
  },
  {
    name: "Iniciar sesion",
    href: "/login",
  },
];
export default pages;

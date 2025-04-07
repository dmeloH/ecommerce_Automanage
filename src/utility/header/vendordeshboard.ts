interface vendor {
  name: string;
  href: string;
  slug: string;
}

const vendordeshboard: vendor[] = [
  {
    name: "Perfil de usuario",
    href: "/user-profile",
    slug: "user-profile"
  },
  {
    name: "Historial de usuario",
    href: "/user-history",
    slug: "user-history"
  },
  {
    name: "Panel de proveedor",
    href: "/vendor-dashboard",
    slug: "vendor-dashboard"
  },
  {
    name: "Configuración del proveedor",
    href: "/vendor-setting",
    slug: "vendor-setting"
  },
  {
    name: "Subir proveedor",
    href: "/vendor-upload",
    slug: "vendor-upload"
  },
  {
    name: "Lista de proveedores",
    href: "/vendor-list-2",
    slug: "vendor-list-2"
  },
  {
    name: "Carrito",
    href: "/cart",
    slug: "cart"
  },
  {
    name: "Verificar",
    href: "/checkout",
    slug: "checkout"
  },
  {
    name: "Seguimiento del pedido",
    href: "/track-order",
    slug: "track-order"
  },
  {
    name: "factura",
    href: "/user-invoice",
    slug: "user-invoice"
  },
];
export default vendordeshboard;

interface Product {
    name: string;
    href: string;
    subname : SubPage[];
  }

  interface SubPage {
    name: string;
    href: string;
  }
  
  const productpage: Product[] = [
    {
      name: "Pagina de productos",
      href: "",
      subname: [
        { name: "Barra lateral izquierda del producto", href: "/product-left-sidebar" },
      { name: "Barra lateral derecha del producto", href: "/product-right-sidebar" }
      ]
    },
    {
      name: "Acordicon de productos",
      href: "",
      subname: [
        { name: "Barra lateral izquierda", href: "/product-according-left-sidebar" },
        { name: "Barra lateral derecha", href: "/product-according-right-sidebar" }
      ]
    },  
  ];
  export default productpage;
  
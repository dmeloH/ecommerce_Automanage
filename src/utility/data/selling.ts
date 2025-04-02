interface Selling {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const selling: Selling[] = [
    {
      id: 11212,
      name: "Refrigeración",
      title: "Líquido Refrigerante Concentrado",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/18_1.jpg",
      quantity: 1,
      newPrice: 42.00,
      oldPrice: 45.00,
      waight: "5 L"
    },
    {
      id: 168,
      name: "Motor",
      title: "Aceite Sintético 5W-30 Premium",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/28_1.jpg",
      quantity: 1,
      newPrice: 62.00,
      oldPrice: 65.00,
      waight: "1 L"
    },
    {
      id: 161431,
      name: "Frenos",
      title: "Kit Completo Pastillas y Discos",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/7_2.jpg",
      quantity: 1,
      newPrice: 10.00,
      oldPrice: 11.00,
      waight: "500 g"
    },
    {
      id: 16411,
      name: "Filtros",
      title: "Filtro de Aire de Alto Rendimiento",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
      quantity: 1,
      newPrice: 25.00,
      oldPrice: 30.00,
      waight: "1 unidad"
    },
    {
      id: 121293,
      name: "Suspensión",
      title: "Amortiguadores Delanteros",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/13_1.jpg",
      quantity: 1,
      newPrice: 20.00,
      oldPrice: 30.00,
      waight: "2 piezas"
    },
    {
      id: 16141,
      name: "Eléctrico",
      title: "Bujías Iridio NGK",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
      quantity: 1,
      newPrice: 52.00,
      oldPrice: 55.00,
      waight: "4 unidades"
    },
  ]
  export default selling;
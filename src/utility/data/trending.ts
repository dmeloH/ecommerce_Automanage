interface Trending {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const trending: Trending[] = [
    {
      id: 1664511,
      name: "Lubricantes",
      title: "Kit de Mantenimiento Premium, 200ml",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/10_1.jpg",
      quantity: 1,
      newPrice: 42.00,
      oldPrice: 45.00,
      waight: "5 kg"
    },
    {
      id: 12123,
      name: "Frenos",
      title: "Pastillas de Freno Orgánicas",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/11_1.jpg",
      quantity: 1,
      newPrice: 25.00,
      oldPrice: 30.00,
      waight: "250 g"
    },
    {
      id: 1218723,
      name: "Motor",
      title: "Aceite Sintético con Aditivos",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/19_1.jpg",
      quantity: 1,
      newPrice: 62.00,
      oldPrice: 65.00,
      waight: "1 L"
    },
    {
      id: 1841,
      name: "Refrigeración",
      title: "Líquido Refrigerante Premium",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
      quantity: 1,
      newPrice: 10.00,
      oldPrice: 11.00,
      waight: "500 ml"
    },
    {
      id: 16141,
      name: "Filtros",
      title: "Combo Filtros Aire+Aceite",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
      quantity: 1,
      newPrice: 52.00,
      oldPrice: 56.00,
      waight: "1 juego"
    },
    {
      id: 169,
      name: "Eléctrico",
      title: "Bujías Iridio",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/29_1.jpg",
      quantity: 1,
      newPrice: 20.00,
      oldPrice: 30.00,
      waight: "4 unidades"
    },
  ]
  export default trending;
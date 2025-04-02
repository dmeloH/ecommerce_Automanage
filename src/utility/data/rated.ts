interface Rated {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const rated: Rated[] = [
    {
      id: 58,
      name: "Motor",
      title: "Filtro de Aceite - Premium",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
      quantity: 1,
      newPrice: 62.00,
      oldPrice: 65.00,
      waight: "1 unidad"
    },
    {
      id: 16511,
      name: "Transmisión",
      title: "Kit de Embrague Completo",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_2.jpg",
      quantity: 1,
      newPrice: 56.00,
      oldPrice: 78.00,
      waight: "3 piezas"
    },
    {
      id: 1831,
      name: "Frenos",
      title: "Pastillas Delanteras Cerámicas",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
      quantity: 1,
      newPrice: 25.00,
      oldPrice: 30.00,
      waight: "250 g"
    },
    {
      id: 121293,
      name: "Suspensión",
      title: "Amortiguadores Traseros",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/13_1.jpg",
      quantity: 1,
      newPrice: 20.00,
      oldPrice: 30.00,
      waight: "12 meses garantía"
    },
    {
      id: 1283,
      name: "Eléctrico",
      title: "Batería 12V 70Ah",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/12_1.jpg",
      quantity: 1,
      newPrice: 50.00,
      oldPrice: 55.00,
      waight: "2 años vida útil"
    },
    {
      name: "Accesorios",
      id: 168,
      title: "Llantas Aleación 17''",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/28_1.jpg",
      quantity: 1,
      newPrice: 52.00,
      oldPrice: 55.00,
      waight: "1 juego"
    },
]
export default rated;
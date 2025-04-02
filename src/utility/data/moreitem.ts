interface Item {
    rating: number;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
  }

  const moreitem: Item[] = [
    {
      rating: 3,
      title: "Filtro de Aire Deportivo",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/8_1.jpg",
      newPrice: 55.00,
      oldPrice: 32.00,
    },
    {
      rating: 5,
      title: "Kit de Pastillas de Freno Premium",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_1.jpg",
      newPrice: 60.00,
      oldPrice: 56.00,
    },
    {
      rating: 2,
      title: "Juego de Bujías Standard",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
      newPrice: 35.00,
      oldPrice: 28.00,
    },
    {
      rating: 5,
      title: "Aceite Sintético 5W-30",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
      newPrice: 23.00,
      oldPrice: 16.00,
    },   
  ]
  export default moreitem;
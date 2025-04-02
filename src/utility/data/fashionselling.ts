interface Fashion {
  name: string;
  image: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  quantity: number;
  id: number;
}

const fashionselling: Fashion[] = [
  {
    id: 73,
    name: "Lubricantes",
    title: "Aceite Sintético 5W-30",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    quantity: 1,
    newPrice: 50.00,
    oldPrice: 55.00,
  },
  {
    id: 1,
    name: "Herramientas",
    title: "Organizador de Herramientas",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    quantity: 1,
    newPrice: 52.00,
    oldPrice: 55.00,
  },
  {
    id: 63,
    name: "Cuidado",
    title: "Aromatizante para Auto",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    quantity: 1,
    newPrice: 10.00,
    oldPrice: 11.00,
  },
  {
    id: 86,
    name: "Accesorios",
    title: "Kit de Limpieza Básico",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    quantity: 1,
    newPrice: 25.00,
    oldPrice: 30.00,
  },
  {
    id: 101,
    name: "Llantas",
    title: "Neumáticos All-Season",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    quantity: 1,
    newPrice: 20.00,
    oldPrice: 30.00,
  },
  {
    id: 114,
    name: "Limpieza",
    title: "Shampoo para Carrocería",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    quantity: 1,
    newPrice: 20.00,
    oldPrice: 30.00,
  }
];
export default fashionselling;
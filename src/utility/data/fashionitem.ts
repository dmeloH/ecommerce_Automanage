interface Fashion {
  name: string;
  image: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  quantity: number;
  id: number;
}

const fashionitem: Fashion[] = [
  {
    id: 71,
    name: "Motor",
    title: "Kit de Reparación de Motor",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    quantity: 1,
    newPrice: 42.00,
    oldPrice: 45.00,
  },
  {
    id: 86,
    name: "Accesorios",
    title: "Kit de Limpieza para Auto",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    quantity: 1,
    newPrice: 25.00,
    oldPrice: 30.00,
  },
  {
    id: 62,
    name: "Transmisión",
    title: "Correa de Distribución Premium",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    quantity: 1,
    newPrice: 62.00,
    oldPrice: 65.00,
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
    id: 73,
    name: "Herramientas",
    title: "Juego de Llaves de Torque",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    quantity: 1,
    newPrice: 52.00,
    oldPrice: 55.00,
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
];
export default fashionitem;
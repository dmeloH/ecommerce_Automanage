interface Fruits {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  href: string;
  title: string;
  waight: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  id: number
}

const fruits: Fruits[] = [
  {
    title: "Aceite de motor sintético",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
    category: "Lubricantes",
    newPrice: 10.0,
    oldPrice: 12.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 161,
    quantity: 1,
    waight: "5L",
    rating: 2,
    status: "Available",
  },
  {
    title: "Filtro de aire premium",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/22_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/22_1.jpg",
    category: "Filtros",
    waight: "3 unidades",
    newPrice: 15.0,
    oldPrice: 17.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 162,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Pastillas de freno",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
    category: "Frenos",
    newPrice: 11.0,
    oldPrice: 12.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 1831,
    quantity: 1,
    waight: "500 g",
    rating: 3,
    status: "Out Of Stock",
  },
  {
    title: "Batería 12V 60Ah",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/24_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/24_1.jpg",
    category: "Eléctrico",
    newPrice: 49.0,
    oldPrice: 65.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 56,
    quantity: 1,
    waight: "15 kg",
    rating: 5,
    status: "Available",
  },
  {
    title: "Líquido refrigerante",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
    category: "Refrigeración",
    newPrice: 20.0,
    oldPrice: 21.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 53,
    quantity: 1,
    waight: "",
    rating: 2,
    status: "Available",
  },
  {
    title: "Correa de distribución",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/26_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/26_1.jpg",
    category: "Motor",
    newPrice: 2.0,
    oldPrice: 3.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 58,
    quantity: 1,
    waight: "100 cm",
    rating: 4,
    status: "Available",
  },
  {
    title: "Amortiguadores",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/27_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/27_1.jpg",
    category: "Suspensión",
    newPrice: 10.0,
    oldPrice: 12.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 167,
    quantity: 1,
    waight: "2 kg",
    rating: 5,
    status: "Out Of Stock",
  },
  {
    title: "Kit de limpieza inyectores",
    sale: "sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/28_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/28_1.jpg",
    category: "Limpieza",
    newPrice: 50.0,
    oldPrice: 55.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 168,
    quantity: 1,
    waight: "1L",
    rating: 2,
    status: "Available",
  },
  {
    title: "Bujías de iridio",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/29_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/29_1.jpg",
    category: "Encendido",
    newPrice: 15.0,
    oldPrice: 16.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 169,
    quantity: 1,
    waight: "4 unidades",
    rating: 3,
    status: "Available",
  },
  {
    title: "Filtro de combustible",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/30_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/30_1.jpg",
    category: "Filtros",
    newPrice: 10.0,
    oldPrice: 12.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 170,
    quantity: 1,
    waight: "1 unidad",
    rating: 4,
    status: "Available",
  },
];

export default fruits;

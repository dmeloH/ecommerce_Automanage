interface FashionDeal {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  title: string;
  waight: string;
  rating: any;
  Status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  color1: number;
  color2: number;
  color3: number;
  size1: string;
  size2: string;
  id: number
}

const fashiondeal: FashionDeal[] = [
  {
    title: "Filtro de Aire Premium",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "Filtros",
    newPrice: 45.0,
    oldPrice: 56.0,
    location: "Online",
    brand: "K&N",
    sku: 23456,
    id: 41,
    quantity: 1,
    waight: "0.5kg",
    rating: 4,
    Status: "Available",
    color1: 1,  // Negro
    color2: 2,  // Rojo
    color3: 3,  // Azul
    size1: "S", // Pequeño
    size2: "M"  // Mediano
  },
  {
    title: "Pastillas de Freno Cerámicas",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "Frenos",
    waight: "1.2kg",
    newPrice: 25.0,
    oldPrice: 30.0,
    location: "Online",
    brand: "Brembo",
    sku: 23456,
    id: 132,
    quantity: 1,
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S", // Para compactos
    size2: "M", // Para sedanes
    rating: 3,
    Status: "Available",
  },
  {
    title: "Amortiguadores Deportivos",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "Suspensión",
    newPrice: 78.0,
    oldPrice: 85.0,
    location: "Online",
    brand: "KYB",
    sku: 23456,
    id: 106,
    quantity: 1,
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S", // Pequeño
    size2: "M", // Mediano
    waight: "5.8kg",
    rating: 2,
    Status: "Available",
  },
  {
    title: "Aceite Sintético 5W-30",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    category: "Lubricantes",
    newPrice: 45.0,
    oldPrice: 50.0,
    location: "Online",
    brand: "Mobil 1",
    sku: 23456,
    id: 115,
    quantity: 1,
    color1: 1,  // 1L
    color2: 2,  // 4L
    color3: 3,  // 5L
    size1: "S", // 1L
    size2: "M", // 4L
    waight: "4.5kg",
    rating: 3,
    Status: "Out Of Stock",
  },
  {
    title: "Kit de Herramientas Profesional",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    category: "Herramientas",
    newPrice: 49.0,
    oldPrice: 65.0,
    location: "Online",
    brand: "Stanley",
    sku: 23456,
    id: 73,
    quantity: 1,
    color1: 1,  // 32 piezas
    color2: 2,  // 64 piezas
    color3: 3,  // 128 piezas
    size1: "S", // Básico
    size2: "M", // Profesional
    waight: "3.2kg",
    rating: 2,
    Status: "Available",
  },
  {
    title: "Batería de Gel 12V",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    category: "Eléctrico",
    newPrice: 20.0,
    oldPrice: 21.0,
    location: "Online",
    brand: "Optima",
    sku: 23456,
    id: 1,
    quantity: 1,
    color1: 1,  // 600CCA
    color2: 2,  // 700CCA
    color3: 3,  // 800CCA
    size1: "S", // Pequeña
    size2: "M", // Mediana
    waight: "15kg",
    rating: 2,
    Status: "Available",
  },
  {
    title: "Shampoo para Auto",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    category: "Limpieza",
    newPrice: 2.0,
    oldPrice: 3.0,
    location: "Online",
    brand: "Meguiar's",
    sku: 23456,
    id: 114,
    quantity: 1,
    color1: 1,  // 500ml
    color2: 2,  // 1L
    color3: 3,  // 5L
    size1: "S", // 500ml
    size2: "M", // 1L
    waight: "1kg",
    rating: 2,
    Status: "Out Of Stock",
  }
];

export default fashiondeal;

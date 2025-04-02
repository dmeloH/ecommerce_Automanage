interface Clothe {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  title: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  color1 : any;
  color2 : any;
  color3 : any;
  size1: string;
  size2: string;
  id: number
}

const fashiontwoclothes: Clothe[] = [
  {
    title: "Filtro de Aire K&N",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    category: "Filtros",
    newPrice: 42.0,
    oldPrice: 55.0,
    location: "Online",
    brand: "ACDelco",
    sku: 56438,
    id: 1,
    quantity: 1,
    rating: 4,
    status: "Available",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "Universal",
    size2: ""
  },
  {
    title: "Pastillas Frenos Delanteros",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    category: "Frenos",
    newPrice: 68.0,
    oldPrice: 85.0,
    location: "Online",
    brand: "Brembo",
    sku: 56438,
    id: 62,
    quantity: 1,
    rating: 3,
    status: "Out Of Stock",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "Mediano",
    size2: "Grande"
  },
  {
    title: "Aceite Motor 10W-40",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    category: "Lubricantes",
    newPrice: 35.0,
    oldPrice: 42.0,
    location: "Online",
    brand: "Castrol",
    sku: 56438,
    id: 63,
    quantity: 1,
    rating: 3,
    status: "Available",
    color1: '',
    color2: '',
    color3: '',
    size1: "5L",
    size2: ""
  },
  {
    title: "Batería 12V 60Ah",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    category: "Eléctrico",
    newPrice: 125.0,
    oldPrice: 150.0,
    location: "Online",
    brand: "Bosch",
    sku: 56438,
    id: 114,
    quantity: 1,
    rating: 2,
    status: "Available",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "Amortiguadores Delanteros",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    category: "Suspensión",
    newPrice: 95.0,
    oldPrice: 120.0,
    location: "Online",
    brand: "Monroe",
    sku: 56438,
    id: 115,
    quantity: 1,
    rating: 5,
    status: "Out Of Stock",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "Standard",
    size2: ""
  }
];

export default fashiontwoclothes;

interface Footwear {
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
  id: number
}

const footwear: Footwear[] = [
  {
    title: "Filtro de aire deportivo negro",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/40_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/40_2.jpg",
    category: "Performance",
    newPrice: 100.0,
    oldPrice: 120.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 100,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Filtro de aceite azul",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    category: "Performance",
    newPrice: 150.0,
    oldPrice: 170.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 101,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Pastillas de freno premium",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_2.jpg",
    category: "Lujo",
    newPrice: 110.0,
    oldPrice: 120.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 102,
    quantity: 1,
    rating: 4,
    status: "Out Of Stock",
  },
  {
    title: "Amortiguadores deportivos",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
    category: "Lujo",
    newPrice: 200.0,
    oldPrice: 240.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 103,
    quantity: 1,
    rating: 5,
    status: "Available",
  },
  {
    title: "Kit de limpieza motor",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/44_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/44_2.jpg",
    category: "Unisex",
    newPrice: 250.0,
    oldPrice: 350.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 104,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Líquido de frenos DOT-4",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "Performance",
    newPrice: 500.0,
    oldPrice: 600.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 105,
    quantity: 1,
    rating: 1,
    status: "Out Of Stock",
  },
  {
    title: "Aceite sintético 5W-30",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
    category: "Mantenimiento",
    newPrice: 110.0,
    oldPrice: 120.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 106,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Filtro de aire compacto",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/47_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/47_1.jpg",
    category: "Compactos",
    newPrice: 150.0,
    oldPrice: 170.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 107,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
];

export default footwear;

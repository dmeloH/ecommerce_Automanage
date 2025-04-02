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
    color1 : any;
    color2 : any;
    color3 : any;
    size1: string;
    size2: string;
    id: number
  }
  
  const fashiontwofootwear: Footwear[] = [
    {
      title: "Llantas deportivas negras",
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
      rating: 4,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "16''",
      size2: "17''"
    },
    {
      title: "Llantas deportivas azules",
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
      rating: 3,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Neumáticos de alto rendimiento",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_2.jpg",
      category: "Gama Alta",
      newPrice: 110.0,
      oldPrice: 120.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 23456,
      id: 102,
      quantity: 1,
      rating: 3,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "205/55",
      size2: "225/45"
    },
    {
      title: "Neumáticos de invierno",
      sale: "New",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
      category: "Invierno",
      newPrice: 200.0,
      oldPrice: 240.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 23456,
      id: 103,
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
      title: "Juego de ruedas deportivas",
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
      rating: 5,
      status: "Out Of Stock",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Neumáticos todo terreno",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      category: "Off-Road",
      newPrice: 500.0,
      oldPrice: 600.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 23456,
      id: 105,
      quantity: 1,
      rating: 4,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "265/70",
      size2: "285/75"
    },
    {
      title: "Neumáticos urbanos",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
      category: "Ciudad",
      newPrice: 110.0,
      oldPrice: 120.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 23456,
      id: 106,
      quantity: 1,
      rating: 2,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "185/65",
      size2: "195/55"
    },
    {
      title: "Ruedas compactas",
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
      status: "Out Of Stock",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Llantas deportivas azules",
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
      rating: 3,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Neumáticos de alto rendimiento",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_2.jpg",
      category: "Gama Alta",
      newPrice: 110.0,
      oldPrice: 120.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 23456,
      id: 102,
      quantity: 1,
      rating: 3,
      status: "Out Of Stock",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "205/55",
      size2: "225/45"
    }
  ];
  
export default fashiontwofootwear;
  
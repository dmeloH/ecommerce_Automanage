interface Category {
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
    id: number;
  }
  
  const fashiontwoall: Category[] = [ 
    {
      title: "Bomba de Combustible Eléctrica",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
      category: "Sistema de Combustible",
      newPrice: 89.0,
      oldPrice: 120.0,
      location: "Online",
      brand: "Bosch",
      sku: 24433,
      id: 71,
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
      title: "Kit de Junta de Culata",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      category: "Motor",
      newPrice: 150.0,
      oldPrice: 200.0,
      location: "Online",
      brand: "Fel-Pro",
      sku: 24433,
      id: 2,
      quantity: 1,
      rating: 4,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Aceite de Transmisión ATF",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      category: "Transmisión",
      newPrice: 35.0,
      oldPrice: 45.0,
      location: "Online",
      brand: "Valvoline",
      sku: 24433,
      id: 73,
      quantity: 1,
      rating: 2,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "1L",
      size2: ""
    },
    {
      title: "Radiador de Aluminio",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
      category: "Sistema de Enfriamiento",
      newPrice: 180.0,
      oldPrice: 220.0,
      location: "Online",
      brand: "Denso",
      sku: 24433,
      id: 134,
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
      title: "Filtro de Aire de Alto Flujo",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_2.jpg",
      category: "Motor",
      newPrice: 42.0,
      oldPrice: 60.0,
      location: "Online",
      brand: "K&N",
      sku: 24433,
      id: 75,
      quantity: 1,
      rating: 4,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Líquido de Frenos DOT-4",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      category: "Frenos",
      newPrice: 12.0,
      oldPrice: 15.0,
      location: "Online",
      brand: "Castrol",
      sku: 24433,
      id: 63,
      quantity: 1,
      rating: 3,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "500ml",
      size2: "1L"
    },
    {
      title: "Amortiguadores Traseros",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      category: "Suspensión",
      newPrice: 95.0,
      oldPrice: 130.0,
      location: "Online",
      brand: "KYB",
      sku: 24433,
      id: 106,
      quantity: 1,
      rating: 4,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Correa de Accesorios",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      category: "Motor",
      newPrice: 25.0,
      oldPrice: 35.0,
      location: "Online",
      brand: "Gates",
      sku: 24433,
      id: 62,
      quantity: 1,
      rating: 3,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "6PK",
      size2: "7PK"
    },
    {
      title: "Sensor de Oxígeno",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
      category: "Escape",
      newPrice: 75.0,
      oldPrice: 90.0,
      location: "Online",
      brand: "NGK",
      sku: 24433,
      id: 71,
      quantity: 1,
      rating: 4,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Termostato de Motor",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      category: "Sistema de Enfriamiento",
      newPrice: 18.0,
      oldPrice: 25.0,
      location: "Online",
      brand: "Stant",
      sku: 24433,
      id: 2,
      quantity: 1,
      rating: 4,
      status: "Out Of Stock",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "Standard",
      size2: ""
    },
  ];
  
export default fashiontwoall;
  
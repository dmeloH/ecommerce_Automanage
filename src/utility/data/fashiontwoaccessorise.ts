interface Accessorise {
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
  
  const fashiontwoaccessorise: Accessorise[] = [
    {
      title: "Filtro de Aceite Premium",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      category: "Motor",
      newPrice: 22.0,
      oldPrice: 30.0,
      location: "Online",
      brand: "Bosch",
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
      title: "Pastillas de Freno Delanteras",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      category: "Frenos",
      newPrice: 55.0,
      oldPrice: 70.0,
      location: "Online",
      brand: "Brembo",
      sku: 56439,
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
      title: "Aceite Sintético 5W-30",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      category: "Lubricantes",
      newPrice: 35.0,
      oldPrice: 45.0,
      location: "Online",
      brand: "Mobil",
      sku: 56440,
      id: 63,
      quantity: 1,
      rating: 3,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "1L",
      size2: ""
    },
    {
      title: "Batería 12V 60Ah",
      sale: "New",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
      category: "Eléctrico",
      newPrice: 120.0,
      oldPrice: 150.0,
      location: "Online",
      brand: "ACDelco",
      sku: 56441,
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
      sale: "New",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
      category: "Suspensión",
      newPrice: 85.0,
      oldPrice: 110.0,
      location: "Online",
      brand: "Monroe",
      sku: 56442,
      id: 115,
      quantity: 1,
      rating: 5,
      status: "Out Of Stock",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "Standard",
      size2: ""
    },
    {
      title: "Kit de Correa de Distribución",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      category: "Motor",
      newPrice: 90.0,
      oldPrice: 120.0,
      location: "Online",
      brand: "Gates",
      sku: 56443,
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
      title: "Líquido de Frenos DOT-4",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      category: "Frenos",
      newPrice: 12.0,
      oldPrice: 15.0,
      location: "Online",
      brand: "Castrol",
      sku: 56444,
      id: 73,
      quantity: 1,
      rating: 2,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "500ml",
      size2: "1L"
    },
    {
      title: "Faro Delantero LED",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      category: "Iluminación",
      newPrice: 65.0,
      oldPrice: 80.0,
      location: "Online",
      brand: "Philips",
      sku: 56445,
      id: 68,
      quantity: 1,
      rating: 4,
      status: "Out Of Stock",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    }
  ];
  
export default fashiontwoaccessorise;
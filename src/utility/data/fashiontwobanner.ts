interface Service {
    name: string;
    image: string;
    num : number
  }
  
  const fashiontwobanner: Service[] = [
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/banner/12.jpg",
      name: "Frenos y Suspensión",
      num: 45
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/banner/13.jpg",
      name: "Repuestos de Motor",
      num: 65
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/banner/14.jpg",
      name: "Accesorios y Herramientas",
      num: 55
    },
  ];
  export default fashiontwobanner
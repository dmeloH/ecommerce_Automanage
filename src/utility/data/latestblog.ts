interface Blog {
    name: string;
    image: string;
    date: string
    title: string;
  }
  
  const latestblog: Blog[] = [
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/1.jpg",
      name: "Motor",
      date: "30 Junio 2023",
      title: "Guía de Mantenimiento: 5 pasos para el cuidado óptimo del motor.",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
      date: "02 Abril 2023",
      name: "Frenos",
      title: "Cómo solucionar problemas comunes en sistemas de frenado.",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/3.jpg",
      date: "09 Marzo 2023",
      name: "Transmisión",
      title: "31 estadísticas clave sobre fallas en cajas de velocidad.",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
      date: "25 Enero 2023",
      name: "Eléctrico",
      title: "Ideas innovadoras para mejorar tu taller mecánico.",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/5.jpg",
      date: "10 Diciembre 2022",
      name: "Suspensión",
      title: "Guía completa: 5 pasos para revisar amortiguadores.",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/6.jpg",
      date: "08 Agosto 2022",
      name: "Diagnóstico",
      title: "15 tendencias en scanners automotrices para 2024.",
    }
  ];
  export default latestblog;
interface Blog {
  name: string;
  image: string;
  date: string;
  title: string;
}

const fashionblog: Blog[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/9.jpg",
    name: "Sistema Eléctrico",
    date: "30 Junio 2022",
    title: "5 Claves para Vender Más Repuestos Eléctricos en tu Taller",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/10.jpg",
    date: "02 Abril 2022",
    name: "Frenos",
    title: "Cómo Gestionar el Inventario de Pastillas y Discos de Freno",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/11.jpg",
    date: "09 Marzo 2022",
    name: "Motor",
    title: "Los 10 Repuestos de Motor Más Vendidos en 2023",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/12.jpg",
    date: "25 Enero 2022",
    name: "Filtros",
    title: "Guía Completa: Tipos de Filtros y su Frecuencia de Cambio",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/13.jpg",
    date: "10 Diciembre 2021",
    name: "Transmisión",
    title: "Cómo Identificar Fallas Comunes en Repuestos de Transmisión",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/14.jpg",
    date: "08 Agosto 2021",
    name: "Suspensión",
    title: "Actualización 2023: Precios Referenciales de Amortiguadores",
  },
];
export default fashionblog;

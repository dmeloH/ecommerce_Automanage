interface Blog {
  name: string;
  image: string;
  date: string;
  title: string;
  month: string;
}

const fashiontwoblog: Blog[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/9.jpg",
    name: "Frenos",
    date: "30",
    title: "Guía de Mantenimiento: 5 Pasos para un Sistema de Frenos Óptimo",
    month: "Jun",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/10.jpg",
    date: "02",
    name: "Motor",
    title: "Solución a problemas comunes en reparaciones de motor",
    month: "Abr",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/11.jpg",
    date: "09",
    name: "Transmisión",
    title: "31 datos clave sobre mantenimiento de cajas de velocidad",
    month: "Mar",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/12.jpg",
    date: "25",
    name: "Eléctrico",
    title: "Cómo diagnosticar fallas en el sistema eléctrico de tu auto",
    month: "Ene",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/13.jpg",
    date: "10",
    name: "Suspensión",
    title: "Señales de que necesitas cambiar los amortiguadores",
    month: "Dic",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/14.jpg",
    date: "08",
    name: "Accesorios",
    title: "Los 15 accesorios imprescindibles para tu taller mecánico",
    month: "Ago",
  },
];
export default fashiontwoblog;

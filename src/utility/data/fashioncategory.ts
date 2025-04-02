interface FashionCategory {
  name: string;
  persantine: string;
  image: string;
  item: number;
}

const fashioncategory: FashionCategory[] = [
  {
    persantine: "30%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-1.png",
    name: "Motor",
    item: 320,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-2.png",
    name: "Frenos",
    item: 65,
  },
  {
    persantine: "15%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-3.png",
    name: "Transmisión",
    item: 548,
  },
  {
    persantine: "10%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-4.png",
    name: "Eléctrico",
    item: 48,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-5.png",
    name: "Suspensión",
    item: 59,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-6.png",
    name: "Filtros",
    item: 845,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-7.png",
    name: "Herramientas",
    item: 320,
  },
  {
    persantine: "30%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-1.png",
    name: "Lubricantes",
    item: 320,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-2.png",
    name: "Interior",
    item: 65,
  },
];
export default fashioncategory;

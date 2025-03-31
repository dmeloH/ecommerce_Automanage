interface Category {
  name: string;
  persantine: string;
  icon: string;
  image: string;
  item: number;
  num: number;
}

const category: Category[] = [
  {
    persantine: "30%",
    icon: "",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Valvulas pvc",
    item: 320,
    num: 1,
  },
  {
    persantine: "",
    icon: "",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Pastillas de freno",
    item: 65,
    num: 2,
  },
  {
    persantine: "15%",
    icon: "",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Bombas de combustible",
    item: 548,
    num: 3,
  },
  {
    persantine: "10%",
    icon: "",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Retenedores",
    item: 48,
    num: 4,
  },
  {
    persantine: "",
    icon: "",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Embragues",
    item: 59,
    num: 5,
  },
  {
    persantine: "",
    icon: "",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Bandas de freno",
    item: 845,
    num: 6,
  },
  {
    persantine: "",
    icon: "fi fi-tr-shrimp",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Seafood",
    item: 652,
    num: 1,
  },
  {
    persantine: "20%",
    icon: "fi fi-tr-popcorn",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Fast Food",
    item: 320,
    num: 2,
  },
  {
    persantine: "",
    icon: "fi fi-tr-egg",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Eggs",
    item: 154,
    num: 3,
  },
];
export default category;

interface Team {
  name: string;
  image: string;
  title: string;
}

const team: Team[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/3.jpg",
    name: "Angular",
    title: "Freamwork de front",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/4.jpg",
    name: "Java",
    title: "Lenguaje de programación",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/5.jpg",
    name: "NextJs",
    title: "Freamwork de back",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/6.jpg",
    name: "NodeJs",
    title: "Entorno de ejecición de javaScript",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/7.jpg",
    name: "Railway",
    title: "Plataforma de despliegue",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/8.jpg",
    name: "React",
    title: "Freamwork de front",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/9.jpg",
    name: "Vercel",
    title: "Plataforma de despliegue",
  },
];
export default team;
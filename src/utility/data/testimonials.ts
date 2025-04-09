interface Testimonials {
  name: string;
  image: string;
  subimage: string;
  category: string;
  description: string;
  subimagetwo: string;
}

const testimonials: Testimonials[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/1.jpg",
    name: "Esteban Ricardo",
    subimage: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/top-quotes.svg",
    subimagetwo: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/bottom-quotes.svg",
    category: "Desarrollador",
    description:
      "Apasionado por la tecnología y la resolución de problemas mediante código. Con experiencia en el diseño, desarrollo e implementación de soluciones software robustas y escalables. Dominio de lenguajes como JavaScript, Java y frameworks como React. Comprometido con las mejores prácticas de clean code, testing (unitario/integración) y arquitecturas limpias (MVC, microservicios)..",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/2.jpg",
    subimage: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/top-quotes.svg",
    subimagetwo: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/bottom-quotes.svg",
    name: "Daniela Melo",
    category: "Desarrolladora",
    description:
      "Apasionada por la tecnología y la resolución de problemas mediante código. Con experiencia en el diseño, desarrollo e implementación de soluciones software robustas y escalables. Dominio de lenguajes como JavaScript, Java y frameworks como React, Node.js. Comprometida con las mejores prácticas de clean code, testing (unitario/integración) y arquitecturas limpias (MVC, microservicios)..",
  }
];
export default testimonials;
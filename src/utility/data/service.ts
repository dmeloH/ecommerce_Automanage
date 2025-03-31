interface Service {
  name: string;
  icon: string;
  title: string;
}

const service: Service[] = [
  {
    icon: "fi fi-ts-truck-moving",
    name: "Envío gratis",
    title: "¡Envío gratis en tus primeros 10 pedidos! ✅ Solo aplica en compras mayores a $200.",
  },
  {
    icon: "fi fi-ts-hand-holding-seeding",
    name: "Soporte 24x7",
    title: "¿Necesitas ayuda? 😯 Escríbenos de lunes a domingo, de [8 am a 10 pm].",
  },
  {
    icon: "fi fi-ts-badge-percent",
    name: "Devolución en 15 días",
    title: "Tu satisfacción está primero: cambios aceptados hasta 30 días después 📆",
  },
  {
    icon: "fi fi-ts-donate",
    name: "Pago seguro y fácil",
    title: "¿Preguntas? Estamos de 8 am a 10 pm, ¡todos los días! ⏰",
  },
];
export default service
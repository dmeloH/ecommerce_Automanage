interface Questions {
  questions: string;
  ans: string;
}

const questionstwo: Questions[] = [
  {
    questions: " ¿Cómo sé si un repuesto es compatible con mi vehículo? 🧐",
    ans: "Puedes usar nuestro buscador por modelo/año/motor o ingresar el número VIN de tu auto. Si necesitas ayuda, nuestro chat en vivo te asesorará gratis con fotos o especificaciones técnicas.",
  },
  {
    questions: "¿Tienen inventario en tiempo real? ⌛",
    ans: "Sí, nuestro sistema actualiza cada 30 minutos. Si el producto aparece como Disponible, lo tenemos en stock. Para pedidos mayores a 10 piezas, confirma disponibilidad por WhatsApp.",
  },
  {
    questions: "¿Ofrecen factura electrónica? 📑",
    ans: "Sí, al finalizar tu compra ingresa tus datos fiscales (RFC y dirección). Recibirás tu CFDI 4.0 con IVA desglosado en tu email en menos de 24 horas hábiles.",
  },
  { 
    questions: "¿Cuánto tardan los envíos estándar? 📤",
    ans: "Los envíos estándar tardan de 2 a 8 días hábiles dentro de Colombia, dependiendo de tu ubicación. Para zonas rurales o remotas puede extenderse hasta 8 días. Recibirás un código de seguimiento por correo al despachar tu pedido.",
  },
  {
    questions: " ¿Ofrecen asesoría técnica para diagnosticar fallas en mi vehículo? 🤝",
    ans: "¡Sí! Nuestros mecánicos certificados brindan asesoría gratuita vía WhatsApp o videollamada. Envíanos fotos/videos de la falla, código de error (si tiene scanner) o síntomas, y te recomendaremos los repuestos adecuados con diagramas de instalación. Servicio disponible de lunes a sábado de 8:00 a 18:00 hrs (GMT-6). Útil: ¿Es una emergencia? Marca tu consulta como URGENTE y te atenderemos en menos de 15 minutos.",
    },
];
export default questionstwo;

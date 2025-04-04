import Stripe from "stripe";

// Inicializa Stripe con la clave secreta desde las variables de entorno
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Maneja solicitudes POST para crear un PaymentIntent en Stripe.
 * @param {Request} req - La solicitud HTTP entrante con los datos del pago.
 * @returns {Response} - Respuesta con el clientSecret del PaymentIntent o un error.
 */
export async function POST(req) {
    try {
        // Extrae el monto y la moneda del cuerpo de la solicitud
        const { amount, currency } = await req.json();

        // Crea un PaymentIntent en Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        // Retorna el clientSecret para completar el pago en el cliente
        return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    } catch (error) {
        // Manejo de errores en caso de fallos en la creación del PaymentIntent
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { "Content-Type": "application/json" },
            status: 500,
        });
    }
}

/**
 * Maneja solicitudes GET para verificar si la API de pago está activa.
 * @returns {Response} - Respuesta con un mensaje de confirmación.
 */
export async function GET() {
    return new Response(JSON.stringify({ message: "API de pago activa" }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
// Este archivo define las funciones para manejar las solicitudes de pago a Stripe. 
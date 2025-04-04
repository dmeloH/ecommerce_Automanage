"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Carga la clave pública de Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("/api/payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 5000, currency: "usd" }), // Monto en centavos
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (result.error) {
            console.error(result.error.message);
        } else if (result.paymentIntent.status === "succeeded") {
            alert("Pago exitoso");
        }
    };

    return (

        <>
            <br />
            <div className="text-sm text-gray-500">
                Ingrese los detalles de su tarjeta para completar el pago.
            </div>
            <br />
            <form onSubmit={handleSubmit} className="space-y-4">
                <CardElement className="border p-2 rounded-md" />
                <br />
                <button type="submit" disabled={!stripe || !clientSecret} className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    Pagar
                </button>
            </form>
        </>
    );
};

const PaymentForm = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default PaymentForm;

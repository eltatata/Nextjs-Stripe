import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST(req) {
    const { priceId } = await req.json();

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [{
            price: priceId,
            quantity: 1
        }],
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/pricing"
    });

    return NextResponse.json({ url: session.url });
}
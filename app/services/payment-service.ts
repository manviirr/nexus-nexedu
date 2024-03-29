import axios from "axios";
import stripe from "stripe";

export const createCheckoutSession = (courseId: string, uid: string) => {
    return axios.post("/api/stripe/create-checkout-session", {
        courseId,
        uid
    });
}

export const decodeEvent = async (signature: string, body: string) => {
    const event = stripe.webhooks.constructEvent(body, signature, `${process.env.STRIPE_ENDPOINT_SECRET}`);
    return event;
}
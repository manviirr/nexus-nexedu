// const stripe = require('stripe')('');
import stripe from 'stripe';
import { Course } from '../models/Course';

const stripeClient = new stripe("sk_test_51OsF9x06iDvHdA264ECboAQocnAAPAkCxJJp3UN2pyPBkdFf8JiKWnhNoRWRhDxNGemZtYWBfdqfUuTX0SJsndEn00hqRAm6F8");

export const createStripeCheckoutSession = async (course: Course, uid: string) => {
    const session = await stripeClient.checkout.sessions.create({
        line_items: [{
            price_data: {
                currency: "USD",
                product_data: {
                    name: course.title,
                    description: course.description,
                    images: [course.image]
                },
                unit_amount: course.price * 100
            },
            quantity: 1
        }],
        mode: "payment",
        success_url: "http://localhost:3000/payment/success",
        cancel_url: "http://localhost:3000/payment/error",
        metadata: {
            uid,
            courseId: course._id
        }
    });

    return session;
}
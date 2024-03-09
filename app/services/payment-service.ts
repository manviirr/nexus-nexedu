import axios from "axios"

export const createCheckoutSession = (courseId:string) => {
    return axios.post("/api/stripe/create-checkout-session", {
        courseId
    });
}
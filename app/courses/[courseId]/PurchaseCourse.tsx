"use client"
import { createCheckoutSession } from "@/app/services/payment-service";
import { toast } from "react-toastify";

export default function PurchaseCourse({
    courseId
}: {
    courseId: string
}) {
    const initiatePurchase = async () => {
        try {
            const response = await createCheckoutSession(courseId);
            console.log("response", response.data);
            window.location.href = response.data.url;
        } catch (err) {
            console.log(err);
            toast(err.message, {
                type: "error"
            })
        }
    };

    return (
        <div className="text-center mb-4">
            <button onClick={initiatePurchase} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Purchase Course
            </button>
        </div>

    )
}
"use client"
import { useAuthContext } from "@/app/contexts/authContext";
import { createCheckoutSession } from "@/app/services/payment-service";
import { toast } from "react-toastify";

export default function PurchaseCourse({
    courseId
}: {
    courseId: string
}) {
    const { auth } = useAuthContext();
    const initiatePurchase = async () => {
        try {
            const { currentUser } = auth;
            console.log("currentUser", currentUser);
            const { uid } = currentUser;
            const response = await createCheckoutSession(courseId, uid);
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
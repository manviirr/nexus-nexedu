import { getCourse } from "@/app/services/course-service";
import { createStripeCheckoutSession } from "@/app/utils/stripe-utils";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { courseId, uid } = body;
    console.log("request", body);

    const courseResponse = await getCourse(courseId);
    const course = courseResponse.data.document;
    
    const session = await createStripeCheckoutSession(course, uid);

    console.log("session", session);

    return NextResponse.json({ url: session.url }, { status: 200 });
}
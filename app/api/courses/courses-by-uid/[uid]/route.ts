import { getCoursesByUid } from "@/app/services/course-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {
    params
}: {
    params: {
        uid: string
    }
}) {
    const { uid } = params;
    const courseResponse = await getCoursesByUid(uid);
    const courses = courseResponse.data.documents;

    return NextResponse.json(courses, {
        status: 200
    });
}
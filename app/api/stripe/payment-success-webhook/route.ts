import { addCourseUser } from "@/app/services/course-service";
import { NextRequest, NextResponse } from "next/server";
import { buffer } from "stream/consumers";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { data } = body;
    const { object } = data;
    const { metadata } = object;
    const { uid, courseId } = metadata;

    await addCourseUser(courseId, uid);

    return NextResponse.json({}, { status: 200 });
}
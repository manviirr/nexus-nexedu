import { Course } from "@/app/models/Course";
import { getCourse } from "@/app/services/course-service";
import Image from "next/image";
import { Component, useCallback } from "react";
import { useParams } from "next/navigation";
import moment from "moment";
import ShadowDomWrapper from "@/app/components/ShadowDomWrapper/ShadowDomWrapper";
import { toast } from "react-toastify";
import { createCheckoutSession } from "@/app/services/payment-service";
import PurchaseCourse from "./PurchaseCourse";

export default async function CoursePage({
    params
}: {
    params: {
        courseId: string
    }
}) {
    const { courseId } = params;
    const courseResponse = await getCourse(courseId);
    const course = courseResponse.data?.document;

    return (
        <div className="max-w-5xl mx-auto p-5">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* <Image src={"https://firebasestorage.googleapis.com/v0/b/wired-archery-274511.appspot.com/o/courses%2Ffull-stack-moder-c%23.webp?alt=media&token=3b1492fa-c19a-4a16-a26b-b5c1c1b7fead"} alt="Course Image" width={400} height={400} /> */}

                <div className="bg-cover bg-center h-56 p-4 relative" style={{ backgroundImage: `url('${course.image}')` }}>
                    {/* Overlay with semi-transparent background */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>
                    {/* Ensure your content is positioned relatively on top of the overlay */}
                    <div className="relative z-10">
                        <h2 className="text-white text-3xl font-bold">{course.title}</h2>
                        <p className="text-white">With {course.subtitle}</p>
                    </div>
                </div>


                {/* Course Content */}
                <div className="p-4">
                    <h3 className="text-2xl font-semibold mb-3">Course Description</h3>
                    <p className="text-gray-700 mb-3">
                        {course.description}
                    </p>
                    <div className="mb-4">
                        <ShadowDomWrapper htmlContent={course.body_html} />
                    </div>

                    {/* Purchase Button */}
                    <PurchaseCourse courseId={courseId} />
                    {/* Instructor Info */}
                    <div className="mb-4">
                        <h4 className="text-2xl font-semibold mb-3">Instructor</h4>
                        <div className="flex items-center">
                            <Image sizes="100vw" height={0} width={0} className="h-12 w-12 rounded-full object-cover mr-4" src="/assets/icons/instructor.webp" alt="Instructor" />
                            <div>
                                <p className="text-gray-900">{course.instructor.name}</p>
                                <p className="text-gray-600">{course.instructor.designation}</p>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Student Reviews</h4>
                        <div className="border-t border-gray-200">
                            <div className="pt-3">
                                {/* Repeat for multiple reviews */}
                                {course.reviews?.map((review, index) => (
                                    <div key={index} className="flex mb-3">
                                        <div className="flex-shrink-0 mr-3">
                                            <Image sizes="100vw" height={0} width={0} className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="/assets/icons/student.webp" alt="Student Review" />
                                        </div>
                                        <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                            <strong>{review.studentName}</strong> <span className="text-xs text-gray-400">{moment(review.timestamp).fromNow()}</span>
                                            <p className="text-sm">
                                                {review.message}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {/* End Review */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
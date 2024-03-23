"use client";

import { Course, CourseClass } from "@/app/models/Course";
import { useState } from "react";

export default function CourseVideoComponent({
    courseClasses
}: {
    courseClasses: CourseClass[]
}) {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(courseClasses[0].videoUrl);
    return (
        <>
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Selected Video</h2>
                {/* <video src={selectedVideoUrl} controls className="w-full h-auto" /> */}

                <iframe className="w-full" height={500} src={selectedVideoUrl} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy={"strict-origin-when-cross-origin"} allowFullScreen></iframe>
            </div>
            <div className="md:ml-8 mt-8 md:mt-0">
                <h1 className="text-2xl font-bold mb-4">Course Videos</h1>
                <div className="flex flex-col">
                    {courseClasses.map((courseClass, index) => (
                        <button
                            key={index}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                            onClick={() => setSelectedVideoUrl(courseClass.videoUrl)}
                        >
                            {courseClass.title}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
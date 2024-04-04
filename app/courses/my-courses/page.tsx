"use client"
import { useAuthContext } from '@/app/contexts/authContext';
import { Course } from '@/app/models/Course';
import { getCourses, getMyCourses } from '@/app/services/course-service';
import { Auth } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { RevolvingDot } from 'react-loader-spinner';

function CoursesComponent() {
    const [courses, setCourses] = useState<Course[]>();
    const { auth }: { auth: Auth } = useAuthContext();
    const router = useRouter();

    const fetchCourses = useCallback(async () => {
        auth.onAuthStateChanged(async user => {
            if (user) {
                const response = await getMyCourses(user?.uid);
                const courses = response.data;
                setCourses(courses);
            } else {
                router.push("/");
            }
        })
    }, [auth, router]);

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    if (!courses) {
        return (
            <RevolvingDot
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        )
    }

    if (courses.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <p className="text-xl text-gray-800 mb-4">You haven&apos;t purchased any courses yet.</p>
                    <p className="text-md text-gray-700">Browse our courses and start learning today!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-center items-center m-4">
            {courses.map((course) => (
                <Link href={`/courses/my-course/${course._id}`} key={course._id}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Image className="w-full h-48 object-cover" sizes='100vw' height={0} width={0} src={course.image} alt={course.title} />

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{course.title}</div>
                            <p className="text-gray-700 text-base mb-2">
                                {course.description}
                            </p>
                            <p className="text-gray-700 text-base mb-2">
                                Instructor: <span className="text-black font-semibold">{course.instructor.name}</span>
                            </p>
                            <p className="text-gray-700 text-base">
                                Number of Classes: <span className="text-black font-semibold">{course.classes.length}</span>
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default CoursesComponent;

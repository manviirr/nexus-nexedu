"use client";
import Head from 'next/head';
import { useAuthContext } from '../contexts/authContext';
import { User } from 'firebase/auth';
import { useEffect } from 'react';

export default function Profile() {
    const { user }: { user: User } = useAuthContext();
    
    useEffect(() => {
        console.log("user", user);
    }, [user]);

    // Sample data - in a real app, this would come from your API or state management
    const enrolledCourses = [
        { name: 'Introduction to Web Development', progress: 75 },
        { name: 'Advanced React Techniques', progress: 40 },
        // Add more courses as needed
    ];

    const achievements = [
        { name: 'Web Dev Novice', icon: 'https://firebasestorage.googleapis.com/v0/b/wired-archery-274511.appspot.com/o/badges%2Fweb-dev-novice.webp?alt=media' },
        { name: 'React Beginner', icon: 'https://firebasestorage.googleapis.com/v0/b/wired-archery-274511.appspot.com/o/badges%2Freact-beginner.webp?alt=media' },
        // Add more achievements as needed
    ];

    return (
        <div className="py-10 px-5">
            <Head>
                <title>User Profile</title>
            </Head>

            <main className="max-w-4xl mx-auto">
                <section className="flex items-center mb-10">
                    <img src="https://weimaracademy.org/wp-content/uploads/2021/08/dummy-user.png" alt="Profile Picture" className="rounded-full mr-5 w-24 h-24" />
                    <div>
                        <h1 className="text-2xl font-bold">{user?.email}</h1>
                        <p className="text-md text-gray-600">Eager learner & future developer.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
                    {enrolledCourses.map((course) => (
                        <div key={course.name} className="mb-4">
                            <h3 className="text-lg font-medium">{course.name}</h3>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                    <div className="flex">
                        {achievements.map((achievement) => (
                            <div key={achievement.name} className="mr-5 text-center">
                                <img src={achievement.icon} alt={achievement.name} className="w-24 h-24 mb-2" />
                                <p className="text-sm">{achievement.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}


import CourseCard from "../components/CourseCard/CourseCard";
import { getCourses } from "../services/course-service";

export default async function CoursesPage() {
    const coursesResponse = await getCourses();
    const courses = coursesResponse.data.documents;

    return (
        <div className="px-24">
            <h1 className="text-xl ml-6">Courses</h1>

            <div className="grid grid-cols-3">
                {courses.map(course => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    )
}
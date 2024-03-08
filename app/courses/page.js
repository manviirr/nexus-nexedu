import { getCourses } from "../../services/course-service";

export default async function CoursesPage() {
    const coursesResponse = await getCourses();
    console.log("coursesResponse", coursesResponse.data);

    return (
        <div>
            <h1>Courses Page</h1>
        </div>
    )
}
import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import { getCourses } from './services/course-service';


export default async function Home() {
  const courseResponse = await getCourses();
  const courses = courseResponse.data.documents;

  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <Courses courses={courses} />
      {/* <Mentor /> */}
      {/* <Testimonials /> */}
      <Newsletter />
    </main>
  )
}

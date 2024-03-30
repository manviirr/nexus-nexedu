// pages/instructor-profile.js
import Head from 'next/head';

export default function InstructorProfile() {
  // Sample data for the instructor profile
  const instructorInfo = {
    name: "Jane Doe",
    bio: "Experienced Web Developer and Educator specializing in modern JavaScript frameworks and web accessibility.",
    courses: [
      { title: "Modern Web Development", description: "An overview of modern web technologies and techniques.", thumbnail: "/course1.jpg" },
      // Add more courses as needed
    ],
    publications: [
      { title: "Accessible Web Design", link: "#" },
      // Add more publications as needed
    ],
    testimonials: [
      { student: "John Smith", text: "Jane's courses transformed my understanding of web development." },
      // Add more testimonials as needed
    ],
  };

  return (
    <div className="py-10 px-5">
      <Head>
        <title>Instructor Profile</title>
      </Head>

      <main className="max-w-4xl mx-auto">
        <section className="flex items-center mb-10">
          <img src="/assets/icons/instructor.webp" alt="Instructor Profile" className="rounded-full mr-5 w-24 h-24" />
          <div>
            <h1 className="text-2xl font-bold">{instructorInfo.name}</h1>
            <p className="text-md text-gray-600">{instructorInfo.bio}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Courses Taught</h2>
          {instructorInfo.courses.map((course, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{course.title}</h3>
              <p className="text-md text-gray-500">{course.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Publications</h2>
          {instructorInfo.publications.map((publication, index) => (
            <a key={index} href={publication.link} className="text-blue-500 hover:text-blue-700">{publication.title}</a>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Student Testimonials</h2>
          {instructorInfo.testimonials.map((testimonial, index) => (
            <blockquote key={index} className="italic border-l-4 border-gray-200 pl-4 mb-4">
              &quot;{testimonial.text}&quot; - <span className="font-medium">{testimonial.student}</span>
            </blockquote>
          ))}
        </section>
      </main>
    </div>
  );
}

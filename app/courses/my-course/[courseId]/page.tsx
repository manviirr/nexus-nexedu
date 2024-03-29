import { getCourse } from '@/app/services/course-service';
import React from 'react';
import CourseVideoComponent from './CourseVideoComponent';

const CourseVideos = async ({
  params
}: {
  params: {
    courseId: string
  }
}) => {
  const courseResponse = await getCourse(params.courseId);
  const course = courseResponse.data.document;
  const courseClasses = course.classes;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start">
      <CourseVideoComponent courseClasses={courseClasses} />
    </div>
  );
};

export default CourseVideos;

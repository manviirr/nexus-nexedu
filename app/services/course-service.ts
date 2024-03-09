import { Course } from '../models/Course';
import { axiosMongoDBInstance } from './axios-service';

export const getCourses = (limit?:number) => {
    return axiosMongoDBInstance.post<{
        documents: [Course]
    }>("/action/find", {
        collection: "Courses",
        limit
    })
}

export const getCourse = (courseId: string) => {
    return axiosMongoDBInstance.post<{
        document: Course
    }>("/action/findOne", {
        collection: "Courses",
        filter: {
            _id: {
                $oid: courseId
            }
        }
    })
}
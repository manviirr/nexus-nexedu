import axios from 'axios';
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

export const getCoursesByUid = (uid: string) => {
    return axiosMongoDBInstance.post<{
        documents: Course[]
    }>("/action/find", {
        collection: "Courses",
        filter: {
            "users.uid": uid
        }
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

export const addCourseUser = (courseId: string, uid: string) => {
    return axiosMongoDBInstance.post("/action/updateOne", {
        collection: "Courses",
        filter: {
            _id: {
                $oid: courseId
            }
        },
        update: {
            $push: {
                users: {
                    uid
                }
            }
        }
    })
}

export const getMyCourses = (uid: string) => {
    return axios.get(`/api/courses/courses-by-uid/${uid}`);
}
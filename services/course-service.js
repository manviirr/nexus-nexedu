import { axiosMongoDBInstance } from "./axios-service"

export const getCourses = () => {
    return axiosMongoDBInstance.post("/action/find", {
        collection: "Courses"
    })
}
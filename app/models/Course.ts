export interface Course {
    title: string,
    subtitle: string,
    instructor: {
        name: string,
        designation: string
    },
    rating: number,
    price: number,
    studentCount: number,
    classes: CourseClass[],
    description: string,
    image: string,
    _id: string,
    reviews: [{
        studentName: string,
        timestamp: string,
        message: string
    }],
    body_html: string
}

export interface CourseClass {
    title: string,
    duration: {
        hours: number,
        minutes: number
    },
    videoUrl: string
}
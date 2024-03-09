"use client"
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'
import { Component, ReactNode } from "react";
import { Course } from "@/app/models/Course";
import Link from "next/link";

interface CourseCardProps {
    course: Course
}

export default class CourseCard extends Component<CourseCardProps> {
    render(): ReactNode {
        const { title, subtitle, image, instructor, rating, price, classes, studentCount, _id } = this.props.course;

        return (
            <Link href={`/courses/${_id}`}>
                <div className='bg-white m-3 px-3 pb-12 my-10 shadow-courses rounded-2xl'>
                    <div className="relative rounded-3xl">
                        <Image src={image} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                        </div>
                    </div>
    
                    <div className="px-3">
                        <h4 className='text-2xl font-bold pt-6 text-black'>{title}</h4>
                        <h4 className='text-2xl font-bold pt-1 text-black'>{subtitle}</h4>
    
                        <div>
                            <h3 className='text-base font-normal pt-6 opacity-75'>{instructor.name}</h3>
                        </div>
    
                        <div className="flex justify-between items-center py-6">
                            <div className="flex gap-4">
                                <h3 className="text-red text-22xl font-medium">{rating}</h3>
                                <div className="flex">
                                    <StarIcon className="h-5 w-5 text-gold" />
                                    <StarIcon className="h-5 w-5 text-gold" />
                                    <StarIcon className="h-5 w-5 text-gold" />
                                    <StarIcon className="h-5 w-5 text-gold" />
                                    <StarIcon className="h-5 w-5 text-gold" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-medium">${price}</h3>
                            </div>
                        </div>
    
                        <hr style={{ color: "#C4C4C4" }} />
    
                        <div className="flex justify-between pt-6">
                            <div className="flex gap-4">
                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                <h3 className="text-base font-medium text-black opacity-75">{classes.length} classes</h3>
                            </div>
                            <div className="flex gap-4">
                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                <h3 className="text-base font-medium text-black opacity-75">{studentCount} students</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
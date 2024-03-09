"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'
import { Course } from "@/app/models/Course";
import CourseCard from "../CourseCard/CourseCard";

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

interface CoursesProps {
    courses: [Course]
}

const postData: DataType[] = [
    {
        heading: 'Full stack modern',
        heading2: 'javascript',
        name: "Colt stelle",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Design system',
        heading2: 'with React programme',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Design banner',
        heading2: 'with Figma',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursethree.png',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursethree.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component<CoursesProps> {

    render() {
        const { courses } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Popular courses.</h3>
                        <Link href={'/courses'} className="text-Blueviolet text-lg font-medium space-links">Explore courses&nbsp;&gt;&nbsp;</Link>
                    </div>


                    <Slider {...settings}>
                        {courses.map((course, i) => (
                            <CourseCard key={i} course={course} />
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}

import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Great Experience",
            content: "I had an amazing time learning with NSW SAFE. The instructor was patient and knowledgeable.",
            author: "John Doe"
        },
        {
            title: "Highly Recommended",
            content: "NSW SAFE helped me pass my driving test on the first attempt. Their methods are effective.",
            author: "Jane Smith"
        },
        {
            title: "Professional Service",
            content: "The instructors at NSW SAFE are true professionals. They make learning to drive easy and fun.",
            author: "Mike Johnson"
        },
        {
            title: "Excellent Instructors",
            content: "I had a great experience learning to drive with NSW SAFE. The instructors are friendly and knowledgeable.",
            author: "Sarah Brown"
        },
        {
            title: "Great Value for Money",
            content: "NSW SAFE offers great value for money. I highly recommend them to anyone looking to learn to drive.",
            author: "David Wilson"
        },
        {
            title: "Friendly Instructors",
            content: "The instructors at NSW SAFE are friendly and patient. They make learning to drive a pleasant experience.",
            author: "Emily Jones"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <div className="w-full justify-between bg-light mt-10 flex flex-col md:gap-4 lg:gap-8">
            <div className='w-full p-8 mb-4 flex flex-col justify-center gap-4 md:min-h-96 lg:p-16 lg:gap-8'>
                <h2 className="pt-4 font-bold text-li">
                    <span className='text-2xl text-gray-100 font-bold md:!text-3xl'>Why Choose us</span>
                </h2>
                <p className="text-light text-justify md:pr-8">
                    <span className='text-orange font-Roboto-Condensed'>NSW SAFE Driving School </span>is one of the new dynamic safe driving schools in Sydney. To become a skilled driver, you should always choose a professional safe driving school with a safe driving car and vast knowledge of driving around Sydney, especially in NSW. We assess each student very carefully, knowing that everyone has different skills and comes from different ethnic backgrounds. Our car features the latest technology with dual control and leather interior, allowing you to drive relaxedly during the lesson. Our lessons are stress-free, simple, and effective. We care about your valuable time and money, which is why we care from day one. We ensure you get 100% from us while learning. We evaluate your learning progress week by week to keep you on the right track. At the end, we smile at your success, and you will have great memories with NSW SAFE driving school.
                </p>
            </div>
            <div style={{ backgroundImage: 'url(/images/corousel-bg.webp)' }} className="w-full h-156 bg-cover bg-top bg-no-repeat flex flex-col justify-start items-center gap-20 py-12 !my-4">
                <h2 className='capitalize !font-semibold !text-2xl md:!text-3xl text-light'>what our clients say</h2>
                <div id="default-carousel" className="relative w-[80%] bg-white rounded-lg" data-carousel="slide" >
                    <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
                        <div className='w-full flex justify-center p-4 h-full'>
                            {slides.map((slide, index) => (
                                <div key={index} className={`absolute w-3/4 h-full flex items-center transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="bg-white p-6 h-full flex flex-col justify-center space-y-10">
                                        <div className="flex flex-col gap-4">
                                            <h3 className="">
                                                <span className='text-orange md:text-4xl'>"{slide.title}“</span>
                                            </h3>
                                            <p className="text-gray-600">{slide.content}</p>
                                        </div>
                                        <p className="text-right text-gray-500 italic">- {slide.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Previous and Next Buttons */}
                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full p-4 cursor-pointer group focus:outline-none" onClick={goToPrevSlide}>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full p-4 cursor-pointer group focus:outline-none" onClick={goToNextSlide}>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;

import React from 'react';
import { NavLink } from 'react-router-dom';
// import './banner.css';

const Banner = () => {
    return (
        <div className="bg-[url('/public/images/banner-image.jpg')] mt-[110px] bg-cover bg-center bg-no-repeat max-h-screen w-full md:h-[1000px] lg:bg-top">
            {/** banner content */}
            <div className="flex flex-col justify-start items-start h-full w-[60%] gap-4 text-white px-8 py-10 sm:px-12 sm:py-20 sm:gap-8 md:px-12 md:py-24 md:w-[50%]">
                <h1 className='roboto-condensed text-lg w-[70%] sm:!text-5xl sm:w-full sm:leading-snug'>Your Journey to <span className='text-amber-400 text-2xl sm:!text-6xl md:!text-7xl md:!w-[60%]'>Safe</span>  Driving Starts Here.</h1>
                <p className='text-sm mt-1 w-full bg-gray-200/30 p-2 rounded-md shadow'><span className='text-md underline'>NSW SAFE DRIVING SCHOOL </span>provides high-quality driving lessons in Sydney for all levels learners.</p>
                <button className='im-fell-double-pica-sc-regular w-[60%] p-0 flex flex-nowrap justify-center items-center h-6 !bg-amber-400 text-white mt-2 text-2xl hover:!bg-white hover:!text-amber-500 sm:!p-6 sm:!text-[1.2rem] sm:!mt-4'>
                    <NavLink to="contact-us">book now</NavLink>
                </button>
            </div>
        </div >

    )
}

export default Banner;
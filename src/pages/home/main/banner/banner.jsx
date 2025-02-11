import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-[url('/images/banner-image.jpg')] mt-[110px] bg-cover bg-center bg-no-repeat max-h-screen w-full md:h-[1000px] lg:bg-top">
            {/** banner content */}
            <div className="flex flex-col justify-start items-start h-full w-[90%] gap-4 text-white px-8 py-10 sm:px-12 sm:py-20 sm:gap-8 md:px-12 md:py-24 md:w-[50%]">
                <h1 className='font-Roboto-Condensed !text-2xl w-[70%] sm:!text-5xl sm:w-full sm:leading-snug'>Your Journey to <span className='text-amber-400 text-2xl sm:!text-6xl md:!text-7xl md:!w-[60%]'>Safe</span>  Driving Starts Here.</h1>
                <p className='text-sm mt-1 w-full bg-gray-200/30 p-2 rounded-m' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Welcome to <span className='text-md underline'>NSW SAFE DRIVING SCHOOL</span>, we teach to drive is not just about getting a driving licence but is an essential skill for rest of the life. Driving is our DNA and we are  so successful because we deliver extraordinary individually structured lessons very carefully & effortlessly which is great value for students. Our instructor are extremely extraordinary professional and attentive while they teach lessons .</p>
                <button className='!font-Fell w-[60%] p-0 flex flex-nowrap justify-center items-center h-8 !bg-yellow text-white mt-2 text-2xl hover:!bg-white hover:!text-amber-500 sm:!p-6 sm:!text-[1.2rem] sm:!mt-4'>
                    <NavLink to="contact-us">book now</NavLink>
                </button>
            </div>
        </div >

    )
}

export default Banner;
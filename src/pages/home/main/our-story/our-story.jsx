import React from 'react';
import './our-story.css';
import OurStoryImg from '/images/nsw-safe-1.jpg';

const OurStory = () => {
    return (
        <section className="flex flex-col items-start justify-start p-8 bg-gray-100 m-4 shadow-lg gap-4 md:relative md:bg-white md:shadow-none">
            <img src={OurStoryImg} alt="" className="md:w-3/5" />
            <div className='our-story-content flex flex-col gap-2 p-4 md:border-2 md:absolute md:top-1/4 md:left-2/5 md:w-[55%]  md:bg-white md:z-10 md:p-4 lg:p-8' >
                <h2 className='!font-bold text-gray-800 my-4 '><span className='text-xl lg:text-3xl'>OUR STORY</span></h2>
                <p className='text-md text-justify lg:text-base'>
                    Welcome to <span className='font-Roboto-Condensed text-orange'>NSW SAFE Driving School</span>, we teach to drive is not just about getting a driving licence but is an essential skill for rest of the life. Driving is our DNA and we are so successful because we deliver extraordinary individually structured lessons very carefully & effortlessly which is great value for students. Our instructor are extremely extraordinary professional and attentive while they teach lessons.
                </p>
            </div>
        </section>
    )
}

export default OurStory;

import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-[url('/images/banner-image.jpg')] mt-[110px] bg-cover bg-center bg-no-repeat max-h-screen w-full md:h-[1000px] lg:bg-top">
            {/** banner content */}
            <div className="flex flex-col justify-start items-start h-full w-[70%] gap-4 text-white px-8 py-10 sm:px-12 sm:py-20 sm:gap-8 md:px-12 md:py-24 md:w-[60%] lg:w-[50%] lg:ml-8">
                <h1 className='font-Roboto-Condensed !text-2xl w-[70%] sm:!text-5xl sm:w-full sm:leading-snug md:!text-6xl'>Your Journey to <span className='text-amber-400 text-3xl sm:!text-6xl md:!text-8xl'>Safe</span>  Driving Starts Here.</h1>
                <p className='text-sm sm:text-md md:text-lg mt-1 w-full bg-gray-200/30 p-2 rounded-m' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                    <span className='underline'>NSW SAFE DRIVING SCHOOL </span>provides high-quality driving lessons in Sydney for all levels learners.</p>
                <button className='!font-Fell w-[60%] p-0 flex flex-nowrap justify-center items-center h-8 !bg-yellow text-white mt-2 text-2xl hover:!bg-white hover:!text-amber-500 sm:!p-6 sm:!text-[1.2rem] sm:!mt-4'>
                    <NavLink to="contact-us">book now</NavLink>
                </button>
            </div>
        </div >

    )
}

export default Banner;
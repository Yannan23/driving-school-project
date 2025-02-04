import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/images/logo.svg'
import CallButton from '../buttons/call-button';

const Footer = () => {

    return (
        <footer className='bg-dark text-white-color flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col gap-5 py-4 items-center justify-center sm:!flex-row sm:!items-start sm:!justify-end md:!p-8 lg:!gap-8 lg:!px-12'>

                {/*footer logo */}
                <img src={logo} alt="logo" className='w-[20%] !max-w-40' />

                {/*footer subscribe and contact info*/}
                <div className='w-[80%] flex flex-col items-start justify-center !gap-4 md:!flex-row md:justify-between md:p-4 md:!gap-8'>
                    <div className='flex flex-col items-start gap-4 md:gap-6 md:!w-[60%]'>

                    </div>

                    {/*contact info */}
                    <div className='flex flex-col items-start gap-2 w-full md:!w-[40%]'>
                        <h2 className='font-Fell !text-2xl md:!text-4xl'>contact us</h2>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-start items-center gap-2'>
                                <i className="fa-solid fa-envelope"></i>
                                <p className='hover:text-yellow cursor-pointer'><NavLink to="contact-us">khanrashed2411@gmail.com</NavLink></p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <i className="fa-solid fa-phone"></i>
                                <CallButton />
                            </div>
                        </div>
                        {/*social media */}

                    </div>
                </div>
            </div >

            {/*footer terms info */}
            <div className="w-full border-0 mt-4 !border-t-2 !border-solid !border-gray-500 p-4 text-xs" >
                <div className='flex flex-col justify-between items-center  text-gray-500 md:!flex-row md:!justify-between md:px-8'>
                    <div className='flex flex-col items-center justify-center sm:!flex-row sm:gap-2'>
                        <p>© 2025 NSW Safe Driving School</p>
                        <p className='sm:!border-l-1 !border-solid !border-gray-500 pl-2'>ABN - 12883995421</p>
                        <p className='sm:!border-l-1 !border-solid !border-gray-500 pl-2'>KeyWork</p>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <p>Terms & Condition</p>
                        <p>Copy Right and Logo Trade Mark Reserved</p>
                    </div>
                </div>
            </div >
        </footer >
    );
};

export default Footer;
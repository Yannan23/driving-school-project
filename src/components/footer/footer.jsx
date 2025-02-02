import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/images/logo.svg'

const Footer = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "780268db-f29d-48e5-bffb-1a37f51e60b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            alert("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <footer className='bg-dark-color text-white-color flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col gap-5 py-4 items-center justify-center sm:!flex-row sm:!items-start sm:!justify-end md:!p-8 lg:!gap-8 lg:!px-12'>

                {/*footer logo */}
                <img src={logo} alt="logo" className='w-[20%] !max-w-40' />

                {/*footer subscribe and contact info*/}
                <div className='w-[80%] flex flex-col items-start justify-center !gap-4 md:!flex-row md:justify-between md:p-4 md:!gap-8'>
                    <div className='flex flex-col items-start gap-4 md:gap-6 md:!w-[60%]'>
                        <h2 className='im-fell-double-pica-sc-regular !text-2xl sm:!text-3xl lg:!text-4xl'>subscribe to our newsletter</h2>
                        <form onSubmit={onSubmit} action="" className='flex flex-col gap-3 md:gap-4 lg:gap-8'>
                            <label htmlFor="footer-email" className='text-sm'>Add your email below and we will make sure you have
                                the latest news</label>
                            <input name='email' type="email" id="email" placeholder="Enter your email" className='w-[80%] text-gray-500 bg-amber-50 h-10 !p-2 sm:h-12 md:!p-4 md:!px-12' />

                            {/*submit button */}
                            <div className="w-[60%] bg-red-500 text-white-color flex justify-center cursor-pointer items-center hover:bg-white hover:!text-amber-400">
                                <button className='im-fell-double-pica-sc-regular px-6 py-3 cursor-pointer !text-2xl'>subscribe</button>
                            </div>
                        </form>
                    </div>

                    {/*contact info */}
                    <div className='flex flex-col items-start gap-2 w-full md:!w-[40%]'>
                        <h2 className='im-fell-double-pica-sc-regular !text-2xl md:!text-4xl'>contact info</h2>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-start items-center gap-2'>
                                <i className="fa-solid fa-envelope"></i>
                                <p className='hover:text-amber-400 cursor-pointer'><NavLink to="contact-us">khanrashed2411@gmail.com</NavLink></p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <i className="fa-solid fa-phone"></i>
                                <p className='hover:text-amber-400 cursor-pointer'><NavLink to="contact-us">0470272595</NavLink></p>
                            </div>
                        </div>
                        {/*social media */}
                        <div className='footer-social-media-container flex gap-5'>
                            <i className="fa-brands fa-facebook-f hover:text-amber-400 cursor-pointer"></i>
                            <i className="fa-brands fa-instagram hover:text-amber-400 cursor-pointer"></i>
                            <i className="fa-brands fa-twitter hover:text-amber-400 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/*footer terms info */}
            <div className="w-full border-0 mt-4 !border-t-2 !border-solid !border-gray-500 p-4 text-xs">
                <div className='flex flex-col justify-between items-center  text-gray-500 md:!flex-row md:!justify-between md:px-8'>
                    <div className='flex gap-2'>
                        <p>© 2025 NSW Safe Driving School</p>
                        <p className='!border-l-1 !border-solid !border-gray-500 pl-2'>KeyWork</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p>Terms & Condition</p>
                        <p>Copy Right and Logo Trade mark reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
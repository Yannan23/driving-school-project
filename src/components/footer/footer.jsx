import React from 'react';
import './footer.css';
import logo from '/src/assets/logo.svg';
import { NavLink } from 'react-router-dom';

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
        <footer className='bg-dark-color text-white-color flex items-center justify-center'>
            <div className='footer-container flex flex-col items-center justify-center'>
                <div className='footer-info-container w-full flex flex-col gap-5'>
                    <div className='flex gap-5 '>
                        {/*footer logo */}
                        <div className='footer-logo-container flex items-center justify-center'>
                            <img src="/src/assets/logo.svg" alt="logo" className='footer-logo w-full h-full' />
                        </div>
                        <div className='footer-info'>
                            {/*footer subscribe */}
                            <div>
                                <h2 className='im-fell-double-pica-sc-regular'>Subscribe to our newsletter</h2>
                                <form onSubmit={onSubmit} action="" className='footer-form flex flex-col'>
                                    <label htmlFor="footer-email">Add your email below and we will make sure you have
                                        the latest news</label>
                                    <input name='email' type="email" id="email" placeholder="Enter your email" className='footer-input' />
                                    <div className="footer-btn-container">
                                        <button className='footer-btn px-6 py-3 cursor-pointer rounded-full'>Subscribe</button>
                                    </div>
                                </form>
                            </div>
                            {/*contact info */}
                            <div className='footer-contact-info flex flex-col'>
                                <h2 className='im-fell-double-pica-sc-regular'>Contact Info</h2>
                                <div className='footer-contact-info-details-container flex flex-col'>
                                    <div className='foooter-contact-details flex justify-start items-center'>
                                        <i className="fa-solid fa-envelope"></i>
                                        <p><NavLink to="contact-us">khanrashed2411@gmail.com</NavLink></p>
                                    </div>
                                    <div className='foooter-contact-details flex justify-start items-center'>
                                        <i className="fa-solid fa-phone"></i>
                                        <p><NavLink to="contact-us">0470272595</NavLink></p>
                                    </div>
                                </div>
                                {/*social media */}
                                <div className='footer-social-media-container flex gap-5'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*footer terms info */}
                <div className="footer-terms-container w-full">
                    <div className='flex justify-between items-center  text-white-color'>
                        <div className='flex'>
                            <p>© 2025 NSW Safe Driving School</p>
                            <p className='footer-keywork'>KeyWork</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p>Terms & Condition</p>
                            <p>Copy Right and Logo Trade mark reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
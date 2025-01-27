import React from 'react';
import './footer.css';
import logo from '/src/assets/logo.svg';

const Footer = () => {
    return (
        <footer className='bg-dark-color text-white-color'>
            <div className='m-16'>
                <div className='flex'>
                    <div className='shrink-0'>
                        <img src="/src/assets/logo.svg" alt="logo" />
                    </div>
                    <div>
                        <h2>Subscribe to our newsletter</h2>
                        <form action="" className='flex flex-col'>
                            <label htmlFor="footer-email">Add your email below and we will make sure you have
                                the latest news</label>
                            <input type="email" id="footer-email" placeholder="Enter your email" />
                            <div className="footer-btn">
                                <button>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <h2>Contact Info</h2>
                    <div className='flex'>
                        <i className="fa-regular fa-envelope"></i>
                        <p>khanrashed2411@gmail.com</p>
                    </div>
                    <div className='flex'>
                        <i className="fa-solid fa-phone"></i>
                        <p>0470272595</p>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-white border-solid my-4">
                <div className='flex'>
                    <div className='flex'>
                        <p>© 2025 NSW Safe Driving Schoo</p>
                        <p>KeyWork</p>
                    </div>
                    <div>
                        <p>Terms & Condition</p>
                        <p>Copy Right and Logo Trade mark reserved .</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
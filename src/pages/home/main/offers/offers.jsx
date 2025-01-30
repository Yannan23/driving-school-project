import React from 'react';
import { NavLink } from 'react-router-dom';
import './offers.css'

const Offers = () => {
    return (
        <>
            <div className='home-offer-container flex flex-col justify-center w-full text-dark-color'>
                <h2 className='poppins-semibold capitalize flex justify-center text-3xl '> current offers</h2>
                {/** offer cards */}
                <div className="home-offer-cards">
                    {/* 1st offer card */}
                    <div className="home-offer-card">
                        <div className="home-offer-card-content flex flex-col justify-center items-center">
                            <h3 className='poppins-semibold capitalize'>observation test</h3>
                            <p>1 - hour lesson</p>
                            <p id='home-offer-card-price'>$50</p>
                        </div>
                        <div className="card-offer-btn-container flex justify-center">
                            <button className='card-offer-btn capitalize'><NavLink to="contact-us">BOOK NOW</NavLink></button>
                        </div>
                    </div>
                    {/* 2nd offer card */}
                    <div className="home-offer-card ">
                        <div className="home-offer-card-content flex flex-col justify-center items-center">
                            <h3 className='poppins-semibold capitalize'>Beginner 1 Hour Lesson</h3>
                            <p>1 - hour lesson</p>
                            <p>3 Hours Log Book = 1 Hour</p>
                            <p id='home-offer-card-price'>$70</p>
                        </div>
                        <div className="card-offer-btn-container flex justify-center">
                            <button className='card-offer-btn capitalize'><NavLink to="contact-us">BOOK NOW</NavLink></button>
                        </div>
                    </div>
                    {/* 3rd offer card */}
                    <div className="home-offer-card relative">
                        <div className="hot-offer absolute">
                            <img src="/src/assets/hot.jpg" alt="" />
                        </div>
                        <div className="home-offer-card-content flex flex-col justify-center items-center">
                            <h3 className='poppins-semibold capitalize'>Beginner 2 Hour Lesson</h3>
                            <p>2 - hour lesson</p>
                            <p>6 Hours Logbook = 2 Hours</p>
                            <p id='home-offer-card-price'>$120</p>
                            <p>(save$20)</p>
                        </div>
                        <div className="card-offer-btn-container flex justify-center">
                            <button className='card-offer-btn capitalize'><NavLink to="contact-us">BOOK NOW</NavLink></button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='home-offer-container flex flex-col justify-center w-full text-dark-color'>
                <h2 className='poppins-semibold capitalize flex justify-center text-3xl '> packages</h2>
                {/** package cards */}
                <div className="home-offer-cards">
                    {/* 1st package card */}
                    <div className="home-offer-card relative">
                        <div className="hot-offer absolute">
                            <img src="/src/assets/hot.jpg" alt="" />
                        </div>
                        <div className="home-offer-card-content flex flex-col justify-center items-center">
                            <h3 className='poppins-semibold'>6 Hour Lesson Package</h3>
                            <p>6 - Hour Lesson</p>
                            <p>6 Hours Logbook = 18 Hours</p>
                            <p id='home-offer-card-price'>$200</p>
                            <p>(deposit on first lesson)</p>
                        </div>
                        <div className="card-offer-btn-container flex justify-center">
                            <button className='card-offer-btn capitalize'><NavLink to="contact-us">BOOK NOW</NavLink></button>
                        </div>
                    </div>
                    {/* 2nd package card */}
                    <div className="home-offer-card relative">
                        <div className="hot-offer absolute">
                            <img src="/src/assets/hot.jpg" alt="" />
                        </div>
                        <div className="home-offer-card-content flex flex-col justify-center items-center">
                            <h3 className='poppins-semibold'>10 Hour Lesson Package</h3>
                            <p>10 - hour lesson</p>
                            <p>30 Hours Logbook = 10 Hours</p>
                            <p id='home-offer-card-price'>$300</p>
                            <p>(deposit on first lesson with 2 installment)</p>
                        </div>
                        <div className="card-offer-btn-container flex justify-center">
                            <button className='card-offer-btn capitalize'><NavLink to="contact-us">BOOK NOW</NavLink></button>
                        </div>
                    </div>
                    {/* 3rd package card */}
                    <div className="home-offer-card relative">
                        <div className="hot-offer absolute">
                            <img src="/src/assets/hot.jpg" alt="" />
                        </div>
                        <div className="home-offer-card-content flex flex-col justify-center items-center">
                            <h3 className='poppins-semibold'>20 Hour Lesson Package</h3>
                            <p>20 - hour lesson</p>
                            <p>60 Hours Logbook = 20 Hours</p>
                            <p id='home-offer-card-price'>$500</p>
                            <p>(deposit on first lesson with 2 installment)</p>
                        </div>
                        <div className="card-offer-btn-container flex justify-center">
                            <button className='card-offer-btn capitalize'><NavLink to="contact-us">BOOK NOW</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='see-more-btn-container w-full flex justify-center'>
                <button className='see-more-btn'><NavLink to="package">SEE ALL COURSES</NavLink></button>
            </div>
        </>
    )
}

export default Offers;
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const OfferCard = ({ title, description, price, savings, isHot, limitedTime }) => (
    <>
        <div className="relative py-8 border-2 border-gray-300 w-full bg-white" style={{ border: '1px solid #e2e8f0' }}>
            {isHot && (
                <div className="absolute -top-3 -left-3 w-8 h-8 md:w-14 md:h-14">
                    <img src="/src/assets/hot.jpg" alt="Hot Offer" className="w-full h-full" />
                </div>
            )}
            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-base md:text-lg poppins-semibold mb-4 capitalize">{title}</h3>
                {description.map((line, index) => (
                    <p key={index} className="text-sm text-gray-600">{line}</p>
                ))}
                <p className="text-xl md:text-2xl font-bold mt-2 text-gray-800">{price}</p>
                {savings && <p className="text-sm text-gray-600">{savings}</p>}
            </div>

            <div className="absolute -bottom-5 left-0 w-full flex justify-center">
                <NavLink to="contact-us" className="w-4/5 py-2 px-4 bg-yellow-500 text-white! text-center capitalize transition-colors duration-300 hover:bg-orange-500">
                    BOOK NOW
                </NavLink>
            </div>
            {limitedTime && (
                <div className='h-10 w-full bg-orange-500 flex justify-center items-center text-white mt-4'>
                    <p className='capitalize'>{limitedTime}</p>
                </div>
            )}
        </div>
    </>
);


OfferCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string.isRequired,
    savings: PropTypes.string,
    isHot: PropTypes.bool,
    limitedTime: PropTypes.string,
};

const Offers = () => {
    const offers = [
        { title: "observation test", description: ["1 - hour lesson"], price: "$50" },
        { title: "Beginner 1 Hour Lesson", description: ["1 - hour lesson", "3 Hours Log Book = 1 Hour"], price: "$70" },
        { title: "Beginner 2 Hour Lesson", description: ["2 - hour lesson", "6 Hours Logbook = 2 Hours"], price: "$120", savings: "(save $20)", isHot: true },
    ];

    const packages = [
        { title: "6 Hour Lesson Package", description: ["6 - Hour Lesson", "6 Hours Logbook = 18 Hours"], price: "$360", savings: "(save $60)", isHot: true, limitedTime: "limited time only!" },
        { title: "10 Hour Lesson Package", description: ["10 - hour lesson", "30 Hours Logbook = 10 Hours"], price: "$600", savings: "(save $100)", isHot: true, limitedTime: "limited time only!" },
        { title: "20 Hour Lesson Package", description: ["20 - hour lesson", "60 Hours Logbook = 20 Hours"], price: "$1200", savings: "(save $200)", isHot: true, limitedTime: "won't last long!!" },
    ];

    return (
        <div className="w-full text-dark-color">
            {/* Offers */}
            <section className="my-8 flex flex-col gap-4 md:my-12">
                <h2
                    className='poppins-semibold p-4 md:p-8 md:text-3xl lg:text-4xl text-center mb-6 md:mb-8'
                    style={{ fontSize: '2rem' }}
                >
                    CURRENT OFFERS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8">
                    {offers.map((offer, index) => (
                        <OfferCard key={index} {...offer} />
                    ))}
                </div>
            </section>

            {/* Packages */}
            <section className="my-8 flex flex-col gap-6 md:my-12">
                <h2
                    className='poppins-semibold pt-2 md:p-8 md:text-3xl lg:text-4xl text-center mb-6 md:mb-8'
                    style={{ fontSize: '2rem' }}
                >
                    PACKAGES
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8">
                    {packages.map((pkg, index) => (
                        <OfferCard key={index} {...pkg} />
                    ))}
                </div>
            </section>

            <div className='flex justify-center items-center text-white my-10 md:my-16'>
                <NavLink to="package" className="py-2 px-4 w-4/5 md:w-3/5 lg:w-2/5 bg-gray-800 text-white text-center capitalize transition-colors duration-300 hover:bg-red-600">
                    SEE ALL COURSES
                </NavLink>
            </div>
        </div >
    );
};

export default Offers;

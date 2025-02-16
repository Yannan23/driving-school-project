import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Hot from '/images/hot.png'

const OfferCard = ({ title, description, price, savings, isHot, limitedTime }) => (
    <>
        <div
            className="relative py-8 w-full bg-white"
            style={{
                boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
            }}
        >
            {isHot && (
                <div className="absolute -top-4 -left-4 w-12 h-12 md:-top-5 md:-left-5 md:!w-14 md:!h-14">
                    <img src={Hot} alt="Hot Offer" className="w-full h-full" />
                </div>
            )}
            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-base md:text-lg !font-bold mb-4 capitalize">{title}</h3>
                <div className="flex flex-col gap-2">
                    {description.map((line, index) => (
                        <p key={index} className="text-sm text-gray-600 capitalize px-2 text-center">{line}</p>
                    ))}
                </div>
                <p className="text-xl md:text-2xl font-bold mt-2 text-gray-800">{price}</p>
                {savings && <p className="text-sm text-gray-600">{savings}</p>}
            </div>

            <div className="absolute -bottom-5 left-0 w-full flex justify-center">
                <NavLink to="contact-us" className="w-4/5 py-2 px-4 bg-yellow text-white! text-center capitalize transition-colors duration-300 hover:bg-orange-500">
                    BOOK NOW
                </NavLink>
            </div>
            {limitedTime && (
                <div className='h-10 w-full bg-orange flex justify-center items-center text-white mt-4'>
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
        { title: "RMS DRIVING TEST", description: ["* Pick up & Drop Off Include", "*30 Mins Skim Through  Pre Road Test Before Exam", "*Use Instructor RMS Approved Vehicle"], isHot: false, price: "$200", limitedTime: false },
    ];

    return (
        <div className="w-full text-dark-color px-4 md:px-8 lg:!px-16">
            {/* Offers */}
            <section className="my-8 flex flex-col gap-4 md:my-12">
                <h2
                    className='!font-bold p-4 !text-2xl md:p-8 md:!text-3xl lg:!text-4xl text-center mb-6 md:mb-8'
                    style={{
                        textShadow: '2px 2px 4px rgba(255,255,255,1)'
                    }}
                >
                    CURRENT OFFERS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 px-4 md:px-8">
                    {offers.map((offer, index) => (
                        <OfferCard key={index} {...offer} />
                    ))}
                </div>
            </section>

            {/* Packages */}
            <section className="my-8 flex flex-col gap-6 md:my-12">
                <h2
                    className='!drop-shadow-md !font-bold !text-2xl pt-2 md:p-8 md:!text-3xl lg:!text-4xl text-center mb-6 md:mb-8'
                    style={{
                        fontSize: '2rem',
                        textShadow: '2px 2px 4px rgba(255,255,255,1)'
                    }}
                >
                    PACKAGES
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 px-4 md:px-8">
                    {packages.map((pkg, index) => (
                        <OfferCard key={index} {...pkg} />
                    ))}
                </div>
            </section>

            <div className='flex justify-center items-center text-white my-10 md:my-16'>
                <NavLink to="package" className="py-2 px-4 w-4/5 md:w-3/5 lg:w-2/5 bg-dark text-white text-center capitalize transition-colors duration-300 hover:bg-red-600">
                    SEE ALL COURSES
                </NavLink>
            </div>
        </div >
    );
};

export default Offers;

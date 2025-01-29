import React from 'react';
import './offers.css'

const Offers = () => {
    return (
        <>
            <div className='home-offer-container flex flex-col justify-center gap-5'>
                <h2 className='im-fell-double-pica-sc-regular flex justify-center text-3xl'> current offers</h2>
                {/** offer cards */}
                <div className="home-offer-cards flex justify-center ">
                    <div className="home-offer-card ">
                        <div className="">
                            <h3>observation test</h3>
                            <p>1 - hour lesson</p>
                            <p>$50</p>
                        </div>
                        <div className="card-offer-btn">
                            <button>book now</button>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3>Beginner 1 Hour Lesson</h3>
                            <p>1 - hour lesson</p>
                            <p>3 Hours Log Book = 1 Hour</p>
                            <p>$70</p>
                        </div>
                        <div className="card-offer-btn">
                            <button>book now</button>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3>Beginner 2 Hour Lesson</h3>
                            <p>2 - hour lesson</p>
                            <p>6 Hours Logbook = 2 Hours</p>
                            <p>$120</p>
                            <p>(save$20)</p>
                        </div>
                        <div className="card-offer-btn">
                            <button>book now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers;
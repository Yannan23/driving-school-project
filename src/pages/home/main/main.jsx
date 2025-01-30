import React from 'react';
import Banner from './banner/banner';
import Offers from './offers/offers'
import OurStory from './our-story/our-story'
import WhyChooseUs from './why-choose-us/why-choose-us'
import Reviews from './reviews/reviews'
import Locations from './locations/locations'

const Main = () => {
    return (
        <>
            <Banner />
            <Offers />
            <OurStory />
            <WhyChooseUs />
            <Reviews />
            <Locations />
        </>
    )
}

export default Main;
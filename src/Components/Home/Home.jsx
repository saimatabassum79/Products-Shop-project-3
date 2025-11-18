import React from 'react';
import Hero from '../hero/Hero';

import TourCardSection from '../TourData/TourCardSection';
import PopularTour from '../Popular/POpularTour';
import HeroSection from '../hero/HeroSction';
import OfferSection from '../hero/OfferSection';
import DestinationsSection from '../hero/DestinationSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularTour></PopularTour>
            <TourCardSection></TourCardSection>
            <HeroSection></HeroSection>
            <OfferSection></OfferSection>
            <DestinationsSection></DestinationsSection>
        </div>
    );
};

export default Home;
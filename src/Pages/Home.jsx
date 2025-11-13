import React from 'react';
import FashionBanner from './FaishonBanner/FashionBanner';
import FashionSlider from './Slider/FashionSlider';
import S2 from './FaishonBanner/s2';
import HomeSixCardSection from './HomeSixCardSection/HomeSixCardSection';
import { useLoaderData } from 'react-router';

const Home = () => {
    const homeData = useLoaderData();
 
    return (
        <div>
          <S2></S2>
          <HomeSixCardSection homeData={homeData}></HomeSixCardSection>
          {/* <FashionSlider></FashionSlider> */}

<FashionBanner></FashionBanner>
            
        </div>
    );
};

export default Home;
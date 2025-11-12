import React from 'react';
import FashionBanner from './FaishonBanner/FashionBanner';
import FashionSlider from './Slider/FashionSlider';
import S2 from './FaishonBanner/s2';

const Home = () => {
    return (
        <div>
          <S2></S2>
          {/* <FashionSlider></FashionSlider> */}

<FashionBanner></FashionBanner>
            
        </div>
    );
};

export default Home;
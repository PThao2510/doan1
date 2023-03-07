import React from 'react';
import Slide from '../../components/slider/Slider';
import BannerHeader from '../../components/banner/BannerHeader';
import Flash from '../../components/flash/Flash';
import Scroll from '../../components/Layout/Scroll/index';
import Phone from '../../components/phone/Phone';
import Laptop from '../../components/laptop/Laptop';
import Accessories from '../..//components/accessories/Accessories';
import BannerFooter from '../../components/banner/BannerFooter';

function Home(props) {
  return (
    <div >
      <Slide />
      <BannerHeader />
      <Flash />
      <Scroll />
      <Phone />
      <Laptop />
      <Accessories />
      <BannerFooter />
      {/* <div className='h-[600px]'></div> */}
    </div>
  );
}

export default Home;
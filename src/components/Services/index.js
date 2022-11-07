import React from 'react';
import { sliderConfig } from '../Slider/Data.js';
import Slider from '../Slider/index.js';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements';

const Services = ({isDesktop}) => {
  const driveway = `https://res.cloudinary.com/dqnjw6dip/image/fetch/https://res.cloudinary.com/dqnjw6dip/image/upload/v1667854923/KTC-Images/driveway_f7iiuf.jpg`;
  const patio = `https://res.cloudinary.com/dqnjw6dip/image/fetch/https://res.cloudinary.com/dqnjw6dip/image/upload/v1667854929/KTC-Images/patio_kotkwl.jpg`;
  const sidewalk = `https://res.cloudinary.com/dqnjw6dip/image/fetch/https://res.cloudinary.com/dqnjw6dip/image/upload/v1667854931/KTC-Images/sidewalk_ivbsh1.jpg`;
  const slab = `https://res.cloudinary.com/dqnjw6dip/image/fetch/https://res.cloudinary.com/dqnjw6dip/image/upload/v1667854933/KTC-Images/slab_n4vxom.jpg`;
  const extension = `https://res.cloudinary.com/dqnjw6dip/image/fetch/https://res.cloudinary.com/dqnjw6dip/image/upload/v1667854924/KTC-Images/driveway-ext_pjwytm.jpg`;
  const seawall = `https://res.cloudinary.com/dqnjw6dip/image/fetch/https://res.cloudinary.com/dqnjw6dip/image/upload/v1667854931/KTC-Images/seawall_cyiziq.jpg`;

  const UseCards = function () {
    return (
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={driveway}/>
          <ServicesH2>Driveways</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={patio}/>
          <ServicesH2>Patios</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={sidewalk}/>
          <ServicesH2>Sidewalks</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={slab}/>
          <ServicesH2>Slabs</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={extension}/>
          <ServicesH2>Driveway Extensions</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={seawall}/>
          <ServicesH2>Seawalls</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    );
  };

  const UseSlider = function () {
    return <Slider config={sliderConfig} />;
  };

  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        {isDesktop ? (<UseSlider />) : (<UseCards />)}
    </ServicesContainer>
  );
};

export default Services;
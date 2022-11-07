import React, {useState, useEffect} from 'react';
import driveway from '../../images/driveway.JPEG';
import patio from '../../images/patio.JPEG';
import sidewalk from '../../images/sidewalk.JPEG';
import slab from '../../images/slab.JPEG';
import extension from '../../images/driveway-ext.JPEG';
import seawall from '../../images/seawall.JPEG';
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

  console.log(`Is desktop services ${isDesktop}`);

  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        {isDesktop ? (<UseSlider />) : (<UseCards />)}
    </ServicesContainer>
  );
};

export default Services;
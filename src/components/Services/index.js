import React from 'react';
import Icon3 from '../../images/svg-3.svg';
import driveway from '../../images/pexels-pixabay-259588.jpg';
import patio from '../../images/patio.PNG';
import sidewalk from '../../images/sidewalk.PNG';
import slab from '../../images/slab.PNG';
import extension from '../../images/driveway-ext.PNG';
import seawall from '../../images/seawall.PNG';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={driveway}/>
                <ServicesH2>Driveways</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={patio}/>
                <ServicesH2>Patios</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={sidewalk}/>
                <ServicesH2>Sidewalks</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={slab}/>
                <ServicesH2>Slabs</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={extension}/>
                <ServicesH2>Driveway Extensions</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={seawall}/>
                <ServicesH2>Seawalls</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
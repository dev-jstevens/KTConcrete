'use strict';

import React, { useState } from 'react';
import { 
  Container, 
  ImageContainer, 
  NavButton,
  Title} from './SliderElements';

const Slider = ({ config }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const next = () => {
    setImageIndex(state => state += 1);

    if (imageIndex === config.length - 1) setImageIndex(0);
  };

  const prev = () => {
    setImageIndex(state => state -= 1);

    if (imageIndex === 0) setImageIndex(config.length - 1);
  };

  return (
    <Container>
      <ImageContainer src={config[imageIndex].image} />
      <Title>
        {config[imageIndex].title}
      </Title>
      <NavButton right onClick={next}>
        <i class="fa-solid fa-circle-arrow-right fa-3x"></i>
      </NavButton>
      <NavButton left onClick={prev}>
        <i class="fa-solid fa-circle-arrow-left fa-3x"></i>
      </NavButton>
    </Container>
  )
};

export default Slider;
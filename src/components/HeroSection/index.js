import React, {useState} from 'react';
import video from '../../videos/05_beton_13_upload.mp4';
import heroImg from '../../images/Hero IMG Cement Being Smoothed.jpeg';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {

  // This is for the 'Contact Us' button animation, but it causes a re-render when used,
  // so it causes a bug with setting the Hero section background. If you want to use it,
  // uncomment the two lines below and paste them into the Button component:
  // onMouseEnter={onHover} 
  // onMouseLeave={onHover}

  // Then uncomment the state vairable and onHover() function.
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //     setHover(!hover);
  // }
  
  // Note: I recommend using either the image or the video, not both, if you're going to use
  // the button aninamtion. Alternatively, if you want to conditionally render, re-factor the logic
  // to decouple the animation effect from it.

  function UseVideoBG (props) {
    return <VideoBg autoPlay loop muted src={video} type='video/mp4' />;
  }

  function UseImageBG (props) {
    return <ImgBg src={heroImg} />;
  }

  function HeroBackground (props) {
    if (navigator.connection && !!navigator.connection.effectiveType) {
        if (navigator.connection.effectiveType === '4g') {
            return <UseVideoBG />;
        } else {
          return <UseImageBG />;
        }
      } else {
        return <UseVideoBG />;
      }
  }

  return (
    <HeroContainer id='home'>
        <HeroBg>
          <HeroBackground />
        </HeroBg>
        <HeroContent>
            <HeroH1>Karen Thompson Concrete, LLC</HeroH1>
            <HeroP>
                Give us a call to get an estimate and schedule your next project.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="contact"
                primary='true'
                dark='true'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                    Contact Us <ArrowRight/>{/*hover ? <ArrowForward /> : <ArrowRight/>*/}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
;}

export default HeroSection;
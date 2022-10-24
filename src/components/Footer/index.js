import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { 
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>
                        KTC
                    </SocialLogo>
                    <WebsiteRights>
                        Karen Thompson Concrete, LLC © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/profile.php?id=100087214955026" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
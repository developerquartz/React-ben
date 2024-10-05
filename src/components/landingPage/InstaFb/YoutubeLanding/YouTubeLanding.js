import React from 'react';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FacebookHeader } from '../layout/Header';
import { FooterFacebook } from '../layout/Footer';
import { YouTubeBanner } from './YouTubeBanner';
import { WhatWeDoYouTube } from './WhatWeDoYouTube';
import { ImageShadowYouTube } from './ImageShadowYouTube';
export const YouTubeLanding = () => {
  return (
    <>
     <div className='wrapper-insta'>
     <FacebookHeader/>
     <YouTubeBanner/>
     <WhatWeDoYouTube/>
     <ImageShadowYouTube/>
     <FooterFacebook/>
     </div>
    </>
  )
}

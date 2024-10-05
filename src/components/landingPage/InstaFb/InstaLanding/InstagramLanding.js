import React from 'react'
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FacebookHeader } from '../layout/Header';
import { FooterFacebook } from '../layout/Footer';
import { InstaBanner } from './InstaBanner';
import { InstaTaxSection } from './InstaTaxSection';
import { InstaConsult } from './InstaConsult';
import { InstaLastSection } from './InstaLastSection';

export const InstagramLanding = () => {
  return (
    <>
    <div className='wrapper-insta'>
     <FacebookHeader/>
     <InstaBanner/>
     <InstaTaxSection/>
     <InstaConsult/>
     <InstaLastSection/>
     <FooterFacebook/>
     </div>
    </>
  )
}

import React from 'react'
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FbBanner } from './FbBanner';
import { FacebookHeader } from '../layout/Header';
import { OweSection } from './OweSection';
import { TrustUs } from './TrustUs';
import { ResolveSection } from './ResolveSection';
import { FooterFacebook } from '../layout/Footer';

export const FacebookLanding = () => {
  return (
   <>
   <FacebookHeader/>
    <FbBanner/>
    <OweSection/>
    <TrustUs/>
    <ResolveSection/>
    <FooterFacebook/>
   </>
  )
}

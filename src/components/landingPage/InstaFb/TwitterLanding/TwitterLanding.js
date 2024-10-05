import React from 'react'
import { Link } from "react-router-dom";
import { FacebookHeader } from '../layout/Header';
import { FooterFacebook } from '../layout/Footer';
import { TwitterBanner } from './TwitterBanner';
import { TwitterImageText } from './TwitterImageText';
import { AmericanTextTwitter } from './AmericanTextTwitter';
export const TwitterLanding = () => {
  return (
   <>
   <div className='wrapper-twitter'>
    <FacebookHeader/>
    <TwitterBanner/>
    <TwitterImageText/>
    <AmericanTextTwitter/>
    <FooterFacebook/>
    </div>
   </>
  )
}

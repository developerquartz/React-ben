import React from 'react'
import { FooterFacebook } from '../layout/Footer'
import { FacebookHeader } from '../layout/Header'
import { TikTokBanner } from './TikTokBanner'
import { TikTokPerfectSection } from './TikTokPerfectSection'
import { TikTokThreeImages } from './TikTokThreeImages'

export const TikTokLanding = () => {
    return (
        <>
     <div className='tiktok-wrapper'>
       <FacebookHeader/>
       <TikTokBanner/>
       <TikTokPerfectSection/>
       <TikTokThreeImages/>
       <FooterFacebook/>
       </div>
        </>
    )
}

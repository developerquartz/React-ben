import React from "react";
import AboutBan from "../../components/landingPage/landingAbout/AboutBan";
import GrayContentAbout from "../../components/landingPage/landingAbout/GrayContentAbout";
import GreenTaxAbout from "../../components/landingPage/landingAbout/GreenTaxAbout";
import OurMission from "../../components/landingPage/landingAbout/OurMission";
import WhatWeDo from "../../components/landingPage/landingAbout/WhatWeDo";
import LandingFooter from "../../components/landingPage/layout/landingFooter";
import LandingHeader from "../../components/landingPage/layout/landingHeader";

const LandingAbout = () => {
  return (
    <div className="about-body page-container">
      <LandingHeader />
      <AboutBan />
      <GreenTaxAbout />
      <WhatWeDo />
      <GrayContentAbout />
      <OurMission />
      <LandingFooter />
    </div>
  );
};

export default LandingAbout;

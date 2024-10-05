import React from "react";
import Banner from "../../components/landingPage/landingHome/banner";
import CardsSections from "../../components/landingPage/landingHome/CardsSections";
import ContactHome from "../../components/landingPage/landingHome/ContactHome";
import ImageTextSection from "../../components/landingPage/landingHome/ImageTextSection";
import RoundShapeSection from "../../components/landingPage/landingHome/RoundShapeSection";
import LandingFooter from "../../components/landingPage/layout/landingFooter";
import LandingHeader from "../../components/landingPage/layout/landingHeader";

const LandingHome = () => {
  return (
    <div className="home-body page-container">
      <LandingHeader />
      <Banner />
      <ImageTextSection />
      <RoundShapeSection />
      <CardsSections />
      <ContactHome />
      <LandingFooter />
    </div>
  );
};

export default LandingHome;

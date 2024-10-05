import React from "react";
import ReturnSection from "../../components/landingPage/landingService/ReturnSection";
import ServBanner from "../../components/landingPage/landingService/ServBanner";
import TaxTypes from "../../components/landingPage/landingService/TaxTypes";
import LandingFooter from "../../components/landingPage/layout/landingFooter";
import LandingHeader from "../../components/landingPage/layout/landingHeader";

const LandingServices = () => {
  return (
    <div className="service-body page-container">
      <LandingHeader />
      <ServBanner />
      <TaxTypes />
      <ReturnSection />
      <LandingFooter />
    </div>
  );
};

export default LandingServices;

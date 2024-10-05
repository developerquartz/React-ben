import React from "react";
import ContactMain from "../../components/landingPage/landingContact/ContactMain";
import ContactMap from "../../components/landingPage/landingContact/ContactMap";
import LandingFooter from "../../components/landingPage/layout/landingFooter";
import LandingHeader from "../../components/landingPage/layout/landingHeader";

const LandingContact = () => {
  return (
    <div className="contact-body page-container">
      <LandingHeader />
      <ContactMain />
      <ContactMap />
      <LandingFooter />
    </div>
  );
};

export default LandingContact;

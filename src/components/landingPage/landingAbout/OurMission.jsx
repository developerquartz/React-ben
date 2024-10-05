import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurMission = () => {
  return (
    <>
      <section className="return-serv-main about-what our-mission position-relative pt-5 pb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="ps-0">
              <div className="cotnet-return-serv">
                <h2 className="position-relative">Our Mission</h2>
                <p>
                  Offer in Compromise is a negotiation between the IRS and an
                  individual who struggles to pay their tax liability in full or
                  will experience financial hardship in doing so. This is also a
                  legitimate method to settle tax delinquencies for a reduced
                  amount. There are certain factors to consider such as income,
                  ability to pay, and asset equity.
                </p>
                <p>
                  You must make the required tax returns and estimated payments
                  plus an application to ensure eligibility. You will also be
                  asked to complete Form 433-A for individuals or Form 433-B for
                  businesses and Form 656 in addition to the required documents.
                </p>
                <p>
                  The first-time penalty abatement is the most commonly
                  available type of waiver allowed by the IRS. If you have a
                  good history of filing and paying taxes on time and you don’t
                  have a record of penalties, you may be qualified for
                  first-time penalty abatement where the IRS waives the penalty.
                </p>
              </div>
            </Col>
            <Col md={6} className="ps-5">
              <div className="img-retun-serv">
                <img
                  className="img-fluid"
                  src="../../../assets/images/blue-two.png"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default OurMission;

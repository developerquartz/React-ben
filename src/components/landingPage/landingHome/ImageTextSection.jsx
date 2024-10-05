import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const ImageTextSection = () => {
  return (
    <>
      <section className="Tax-relief-section pt-5 mt-5 pb-5 position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="p-0 pe-5">
              <div className="image-left-tax">
                <img
                  className="img-fluid"
                  src="../../../assets/images/tax.png"
                />
              </div>
            </Col>
            <Col md={6} className="ps-5">
              <div className="content-tax-right">
                <h2 className="position-relative">What is Tax Relief?</h2>
                <p>
                  Falling behind on tax payments to the IRS is something that
                  millions of Americans have dealt with at one time or another.
                  Owing money to the IRS can be very intimidating, but don’t
                  worry and definitely don’t lose hope – there is tax relief
                  available. A reputable tax relief company can help you reach a
                  tax relief agreement with the IRS.
                </p>
                <p>
                  Using proven strategies, our knowledgeable experts can assist
                  you through tax audits, help reduce your tax debt, and stop
                  wage garnishments and bank levies from happening. In some
                  cases, you may be able to settle tax debts for much less than
                  was originally owed.The tax relief experts at Optima Tax
                  Relief are available to be your dedicated resource to save you
                  the most money while resolving your IRS debt in the shortest
                  amount of time possible.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="tab-section-tax mt-5 pt-4 pb-3">
            <h4 className="tabs-heading-tax p-0 position-relative">
              Our Process
            </h4>
            <Tabs
              defaultActiveKey="consultation"
              id="uncontrolled-tab-example"
              className="mb-3 d-block"
            >
              <Tab eventKey="consultation" title="Consultation">
                <div className="content-tab">
                  Falling behind on tax payments to the IRS is something that
                  millions of Americans have dealt with at one time or another.
                  Owing money to the IRS can be very intimidating, but don’t
                  worry and definitely don’t lose hope – there is tax relief
                  available. A reputable tax relief company can help you reach a
                  tax relief agreement with the IRS.
                  <br />
                  <br />
                  Using proven strategies, our knowledgeable experts can assist
                  you through tax audits, help reduce your tax debt, and stop
                  wage garnishments and bank levies from happening. In some
                  cases, you may be able to settle tax debts for much less than
                  was originally owed.The tax relief experts at Optima Tax
                  Relief are available to be your dedicated resource to save you
                  the most money while resolving your IRS debt in the shortest
                  amount of time possible.
                </div>
              </Tab>
              <Tab eventKey="phase1" title="Phase 1: investigation">
                <div className="content-tab">
                  Falling behind on tax payments to the IRS is something that
                  millions of Americans have dealt with at one time or another.
                  Owing money to the IRS can be very intimidating, but don’t
                  worry and definitely don’t lose hope – there is tax relief
                  available. A reputable tax relief company can help you reach a
                  tax relief agreement with the IRS.
                  <br />
                  <br />
                  Using proven strategies, our knowledgeable experts can assist
                  you through tax audits, help reduce your tax debt, and stop
                  wage garnishments and bank levies from happening. In some
                  cases, you may be able to settle tax debts for much less than
                  was originally owed.The tax relief experts at Optima Tax
                  Relief are available to be your dedicated resource to save you
                  the most money while resolving your IRS debt in the shortest
                  amount of time possible.
                </div>
              </Tab>
              <Tab eventKey="phase2" title="Phase 2: resolution">
                <div className="content-tab">
                  Falling behind on tax payments to the IRS is something that
                  millions of Americans have dealt with at one time or another.
                  Owing money to the IRS can be very intimidating, but don’t
                  worry and definitely don’t lose hope – there is tax relief
                  available. A reputable tax relief company can help you reach a
                  tax relief agreement with the IRS.
                  <br />
                  <br />
                  Using proven strategies, our knowledgeable experts can assist
                  you through tax audits, help reduce your tax debt, and stop
                  wage garnishments and bank levies from happening. In some
                  cases, you may be able to settle tax debts for much less than
                  was originally owed.The tax relief experts at Optima Tax
                  Relief are available to be your dedicated resource to save you
                  the most money while resolving your IRS debt in the shortest
                  amount of time possible.
                </div>
              </Tab>
              <Tab eventKey="freedom" title="Freedom">
                <div className="content-tab">
                  Falling behind on tax payments to the IRS is something that
                  millions of Americans have dealt with at one time or another.
                  Owing money to the IRS can be very intimidating, but don’t
                  worry and definitely don’t lose hope – there is tax relief
                  available. A reputable tax relief company can help you reach a
                  tax relief agreement with the IRS.
                  <br />
                  <br />
                  Using proven strategies, our knowledgeable experts can assist
                  you through tax audits, help reduce your tax debt, and stop
                  wage garnishments and bank levies from happening. In some
                  cases, you may be able to settle tax debts for much less than
                  was originally owed.The tax relief experts at Optima Tax
                  Relief are available to be your dedicated resource to save you
                  the most money while resolving your IRS debt in the shortest
                  amount of time possible.
                </div>
              </Tab>
            </Tabs>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ImageTextSection;

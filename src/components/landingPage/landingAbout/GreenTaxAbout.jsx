import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GreenTaxAbout = () => {
  return (
    <>
      <section className="green-about-main pt-5 pb-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-about-green">
                <h2 className="position-relative">How to get tax relief?</h2>
                <p>
                  One of the common avenues for tax relief is an IRS Repayment
                  Plan. This will allow you to split the total amount owed into
                  manageable payments and avoid garnishments and levies. There
                  will still be penalties and interest for the late payments
                  until the balance is completely paid.
                </p>
                <p>
                  This payment plan can be short or long-term. Short terms tax
                  relief spans up to 120 days while long-term plans go over 120
                  days. Only individuals are allowed to choose a short-term
                  payment plan. There is also zero user or setup fee for
                  short-term plans. Short-term payment plans allow $100,000
                  maximum in combined taxes, interest, and penalties owed.
                  Long-term plans have fees and the maximum is $50,000 including
                  combined taxes, interest, and penalties.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default GreenTaxAbout;

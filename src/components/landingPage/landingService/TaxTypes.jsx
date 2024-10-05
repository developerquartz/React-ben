import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TaxTypes = () => {
  return (
    <>
      <section className="Type-tax-section pt-5 pb-5">
        <Container>
          <div className="heading-type-tax text-center">
            <h2>There are different types of tax relief</h2>
            <p>
              including tax deductions, tax credits, and tax forgiveness. In
              essence, tax relief consists of IRS programs that were designed to
              reduce one’s tax bill.
            </p>
          </div>
          <Row className="justify-content-between">
            <Col md={2}>
              <div className="content-tex-type text-center">
                <div className="img-tax-type">
                  <img src="../../../assets/images/serv1.png" />
                </div>
                <p>Offer In Compromise</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="content-tex-type text-center">
                <div className="img-tax-type">
                  <img src="../../../assets/images/serv2.png" />
                </div>
                <p>Notice Of Collection</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="content-tex-type text-center">
                <div className="img-tax-type">
                  <img src="../../../assets/images/serv3.png" />
                </div>
                <p>Installmant Plans</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="content-tex-type text-center">
                <div className="img-tax-type">
                  <img src="../../../assets/images/serv4.png" />
                </div>
                <p>Tax Settlement</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="content-tex-type text-center">
                <div className="img-tax-type">
                  <img src="../../../assets/images/serv5.png" />
                </div>
                <p>Tax Faqs</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default TaxTypes;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CardsSections = () => {
  return (
    <>
      <section className="Cards-section-main mt-5 pt-5">
        <Container>
          <Row>
            <Col md={4} className="col-card-one">
              <div className="card-content">
                <h2 className="position-relative">Who We Are</h2>
                <p>
                  American Tax Settlement LLC is a full service Tax Resolution
                  firm that can handle almost any IRS or State Tax Issue. Our
                  team is on hand to provide answers for clients impacted by
                  garnishments, bank levies, liens and other challenges.
                </p>
              </div>
            </Col>
            <Col md={4} className="col-card-center position-relative">
              <div className="card-content text-center position-relative">
                <h2 className="position-relative">What we do</h2>
                <p>
                  American Tax Settlement LLC is a full service Tax Resolution
                  firm that can handle almost any IRS or State Tax Issue. Our
                  team is on hand to provide answers for clients impacted by
                  garnishments, bank levies, liens and other challenges.
                </p>
              </div>
            </Col>
            <Col md={4} className="col-card-three position-relative">
              <div className="card-content">
                <h2 className="position-relative">Trust Us</h2>
                <p>
                  American Tax Settlement LLC is a full service Tax Resolution
                  firm that can handle almost any IRS or State Tax Issue. Our
                  team is on hand to provide answers for clients impacted by
                  garnishments, bank levies, liens and other challenges.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default CardsSections;

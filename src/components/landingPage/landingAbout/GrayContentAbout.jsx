import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GrayContentAbout = () => {
  return (
    <>
      <section className="gray-content-about pt-5 pb-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="gray-main-about">
                <p className="text-center">
                  The first-time penalty abatement is the most commonly
                  available type of waiver allowed by the IRS. If you have a
                  good history of filing and paying taxes on time and you don’t
                  have a record of penalties, you may be qualified for
                  first-time penalty abatement where the IRS waives the penalty.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default GrayContentAbout;

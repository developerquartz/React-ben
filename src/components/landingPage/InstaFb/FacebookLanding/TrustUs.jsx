import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const TrustUs = () => {
  return (
    <>
      <section className="trust-facebook-section pt-2">
        <Container fluid>
          <Row className='align-items-center'>
            <Col md={6}>
              <div className="left-image-trust position-relative">
                <img src="../../../assets/images/trust-image.png" alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={6}>
              <div className="content-right-trust">
                <h2>Trust Us</h2>
                <p>American Tax Settlement LLC is a full service Tax Resolution firm that can handle almost any IRS or State Tax Issue. Our team is on hand to provide answers for clients impacted by garnishments, bank levies, liens and other challenges.
                </p>
                <p>
                  American Tax Settlement LLC is a full service Tax Resolution firm that can handle almost any IRS or State Tax Issue. Our team is on hand to provide answers for clients impacted by garnishments, bank levies, liens and other challenges.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

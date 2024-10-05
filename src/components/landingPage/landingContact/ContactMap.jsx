import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const ContactMap = () => {
  return (
    <>
      <section className="map-contact-main mt-5 pt-3">
        <Container fluid>
          <Row>
            <Col md={12} className="p-0">
              <div className="maincontent-map">
                <iframe
                  width="100%"
                  height="540"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ContactMap;

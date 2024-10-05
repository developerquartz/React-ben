import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const ServBanner = () => {
  return (
    <>
      <section className="service-banner-main">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <div className="content-servbanner">
                <h2 className="position-relative">Services</h2>
                <p>
                  Many people feel their confidence decreasing once they face
                  the complex and grueling process of dealing with taxes. This
                  is perfectly reasonable. There is a reason professionals such
                  as enrolled agents and certified public accountants and tax
                  relief programs exist. These professionals understand and can
                  stay on top of the rules that apply to your jurisdiction so
                  you don’t have to deal with the stress.
                </p>
                <Link
                  to="/contact"
                  className="btn-portal-header d-flex justify-content-center text-decoration-none align-items-center position-relative"
                >
                  Contact us{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="black" />
                    <path
                      d="M18 23L16.9312 21.95L21.1312 17.75H12V16.25H21.1312L16.9312 12.05L18 11L24 17L18 23Z"
                      fill="#46B98C"
                    />
                  </svg>
                </Link>
              </div>
            </Col>
            <Col md={8} className="p-0">
              <div className="image-servbaner">
                <img
                  className="img-fluid position-relative"
                  src="../../../assets/images/seriv-banner.png"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ServBanner;

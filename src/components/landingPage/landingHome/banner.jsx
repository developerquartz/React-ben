import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <section className="banner-home">
        <Container className="position-relative">
          <Row>
            <Col md={12} className="p-0">
              <div className="main-banner-home">
                <img
                  className="img-fluid position-relative"
                  src="../../../assets/images/banner.jpg"
                />
                <div className="content-home-banner position-absolute">
                  <h2 className="position-relative">
                    This is Perfectly Reasonable.
                  </h2>
                  <p>
                    One of the common avenues for tax relief is an IRS Repayment
                    Plan. This will allow you to split the total amount owed
                    into manageable payments and avoid garnishments and levies
                  </p>
                  <Link
                    to="/contact"
                    className="btn-portal-header d-flex justify-content-center text-decoration-none align-items-center position-relative"
                  >
                    Contact us{" "}
                    <svg
                      className="d-flex position-absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 12L4.93125 10.95L9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12Z"
                        fill="#46B98C"
                      />
                    </svg>{" "}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Banner;

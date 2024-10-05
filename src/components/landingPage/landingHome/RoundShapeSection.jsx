import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
const RoundShapeSection = () => {
  return (
    <>
      <section className="round-bg-section  position-relative">
        <Container fluid>
          <Row>
            <Col md={12} className="p-0">
              <div className="main-img-round">
                <img
                  className="img-fluid w-100"
                  src="../../../assets/images/people.png"
                />
                <div className="content-round-shape h-100 rounded-circle position-absolute text-center d-flex flex-column align-items-center justify-content-center">
                  <h2 className="m-0 pb-4">
                    Lots of People <br />
                    Get Tax Relief
                  </h2>
                  <p className="m-0">
                    The tax code is REALLY complicated. So many Americans end up
                    in a situation where we owe more to the IRS than we can
                    afford to pay. Lots of people end up with big debts to the
                    IRS.
                  </p>
                  <p className="m-0">
                    Now we’re in a really tough situation – because the IRS is
                    the world’s most powerful collection agency. They can do
                    some scary things like seize your home or bank accounts
                  </p>
                  <Link
                    to="/contact"
                    className="m-0 mt-3 btn-round-section btn-portal-header d-flex justify-content-center text-decoration-none align-items-center position-relative"
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
export default RoundShapeSection;

import React from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountLayout = (props) => {
  return (
    <>
      <section
        className="accountLayout py-5 d-flex align-items-center justify-content-center w-100"
        style={{
          minHeight: "100vh",
          backgroundImage: 'url("../assets/images/accountbg.png")',
          backgroundPosition: "top right",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="mb-3 logo-head text-center">
              <Link to="/" className="text-dark">
                <img
                  src="../assets/images/Logo1.png"
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </Col>
            <Col lg="5" md="8" sm="10" className="mt-5">
              {props.children}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default AccountLayout;

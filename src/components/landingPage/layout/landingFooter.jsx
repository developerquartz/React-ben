import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { isEmail, isEmpty } from "validator";
import { toast } from "react-toastify";
import { postSubscribe } from "../../../store/actions";
import Loading from "../../../Common/extra/loading";

const LandingFooter = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  console.log(email, "emaiollllllll");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (isEmpty(value)) {
      setError("Required");
      setEmail(value);
    } else if (!isEmail(value)) {
      setError("Invalid Email");
      setEmail(value);
    } else {
      setError("");
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callback = (res) => {
      setLoading(false);
      if (res.data) {
        toast.success(
          "Thank you for Subscribe. We will get in touch with you soon."
        );
        setEmail("");
      }
    };
    if (error !== "") {
      toast.error("Please Enter Valid Email!");
    } else if (email == "") {
      setError("Required");
    } else {
      setLoading(true);
      dispatch(postSubscribe({ email: email }, callback));
    }
  };
  return (
    <>
      {loading && <Loading className={"cstmLoader"} />}
      <footer className="footer pt-5">
        <Container>
          <Row className="pb-5">
            <Col md={3}>
              <div className="logo-footer-content">
                <img
                  className="img-fluid"
                  src="../../../assets/images/logo.png"
                />
                <p>
                  Many people feel their confidence decreasing once they face
                  the complex and grueling process of dealing with taxes.{" "}
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-menus">
                <h4>Quick Links</h4>
                <ul className="m-0 p-0">
                  <Link to="/">
                    <li className="list-unstyled">Home</li>
                  </Link>
                  <Link to="/landing-service">
                    <li className="list-unstyled">Services</li>
                  </Link>
                  <Link to="/about">
                    <li className="list-unstyled">About</li>
                  </Link>
                  <Link to="/client/login">
                    <li className="list-unstyled">Client Portal</li>
                  </Link>
                  <Link to="/contact">
                    <li className="list-unstyled">Contact</li>
                  </Link>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-menus">
                <h4>Services</h4>
                <ul className="m-0 p-0">
                  <Link to="#">
                    <li className="list-unstyled">Offer In Compromise</li>
                  </Link>
                  <Link to="#">
                    <li className="list-unstyled">Notice Of Collection</li>
                  </Link>
                  <Link to="#">
                    <li className="list-unstyled">Installment Plans</li>
                  </Link>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="newsletter-footer">
                <h4>Subscribe Our Newsletter</h4>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      name="email"
                      type="email"
                      value={email}
                      placeholder="Email Address"
                      onChange={handleChange}
                    />
                    <span className="note error_note py-2 m-0 text-danger">
                      {error}
                    </span>
                  </Form.Group>
                  <button
                    className="subs-btn d-flex align-items-center justify-content-center position-relative text-center"
                    onClick={handleSubmit}
                  >
                    Subscribe Now{" "}
                    <svg
                      className="position-absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <circle cx="17.5" cy="17.5" r="17.5" fill="#46B98C" />
                      <path
                        d="M18 23L16.9312 21.95L21.1312 17.75H12V16.25H21.1312L16.9312 12.05L18 11L24 17L18 23Z"
                        fill="white"
                      />
                    </svg>{" "}
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copyright text-center">
          <p>© 2023 American Tax Settlement, LLC | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
export default LandingFooter;

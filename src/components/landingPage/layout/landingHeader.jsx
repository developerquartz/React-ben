import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContactDetail } from "../../../store/actions";

const LandingHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactDetail());
  }, []);
  return (
    <div className="landing-header">
      <header>
        <Container>
          <Row>
            <Navbar className="nav-main" bg="transparent" expand="lg">
              <Navbar.Brand href="/">
                <img src="../../../assets/images/logo.png" />{" "}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link to="/">Home</Link>
                  <Link to="/landing-service">Services</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  <div className="mobile-hamburger-content">
                    <ul className="social-icon-header d-flex m-0">
                      <Link
                      //  to="/facebook-signin"
                      >
                        <li className="list-unstyled d-flex justify-content-center align-items-center">
                          <img src="../../../assets/images/facebook.svg" />
                        </li>
                      </Link>
                      <Link
                      // to="/twitter-signin"
                      >
                        <li className="list-unstyled d-flex justify-content-center align-items-center">
                          <img src="../../../assets/images/twitter.svg" />
                        </li>
                      </Link>
                      <Link
                      //  to="/insta-signin"
                      >
                        <li className="list-unstyled d-flex justify-content-center align-items-center">
                          <img src="../../../assets/images/instagram.svg" />
                        </li>
                      </Link>
                      <Link
                      //  to="/youtube-signin"
                      >
                        <li className="youtube-icon-header list-unstyled d-flex justify-content-center align-items-center">
                          <img src="../../../assets/images/youtube-icon.svg" />
                        </li>
                      </Link>
                      <Link
                      //  to="/tiktok-signin"
                      >
                        <li className="youtube-icon-header tiktok-icon list-unstyled d-flex justify-content-center align-items-center">
                          <img src="../../../assets/images/tiktok-icon.svg" />
                        </li>
                      </Link>
                    </ul>
                    <Link
                      to="/client/login"
                      className="btn-portal-header d-flex justify-content-center text-decoration-none align-items-center position-relative"
                    >
                      Client Portal{" "}
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
                </Nav>
              </Navbar.Collapse>
              <div className="right-top-header">
                <div className="icon-header d-flex align-items-center">
                  <ul className="social-icon-header d-flex m-0">
                    <Link
                    //  to="/facebook-signin"
                    >
                      <li className="list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/facebook.svg" />
                      </li>
                    </Link>
                    <Link
                    //  to="/twitter-signin"
                    >
                      <li className="list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/twitter.svg" />
                      </li>
                    </Link>
                    <Link
                    //  to="/insta-signin"
                    >
                      <li className="list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/instagram.svg" />
                      </li>
                    </Link>
                    <Link
                    //  to="/youtube-signin"
                    >
                      <li className="youtube-icon-header list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/youtube-icon.svg" />
                      </li>
                    </Link>
                    <Link
                    //  to="/tiktok-signin"
                    >
                      <li className="youtube-icon-header tiktok-icon list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/tiktok-icon.svg" />
                      </li>
                    </Link>
                  </ul>
                  <Link
                    to="/client/login"
                    className="btn-portal-header d-flex justify-content-center text-decoration-none align-items-center position-relative"
                  >
                    Client Portal{" "}
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
            </Navbar>
          </Row>
        </Container>
      </header>
    </div>
  );
};
export default LandingHeader;

import { React, useState } from "react";
import { Container, Nav, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assest/images/Logo1.png";

const Header = ({ setShowSidebar, showSidebar }) => {
  const openSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <>
      <header className="header sticky-top bg-white shadow-sm">
        <Nav>
          <Container fluid className="ps-lg-0">
            <div className="d-flex align-items-center justify-content-end">
              <div className="left">
                <Button
                  className="bg-transparent border-0 rounded-0 menu-btn"
                  onClick={openSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 6H19M5 12H19M5 18H19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Button>
              </div>
              <div className="logo-wrp text-center d-lg-none">
                <Link to="/customers" className="text-dark">
                  <img
                    src={"../assets/images/Logo1.png"}
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="right">
                <Dropdown className="profile-menu">
                  <Dropdown.Toggle className="bg-transparent border-0 rounded-0">
                    <span className="me-2 img-wrp">
                      <img
                        src="/assets/images/dummy-profile"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </span>
                    {localStorage.getItem("name")}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Link className="dropdown-item" to="/client/edit-profile">
                      <span className="icn me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                        >
                          <path
                            d="M2.21053 3.68421C2.21053 1.64948 3.86001 0 5.89474 0C7.92945 0 9.57895 1.64948 9.57895 3.68421C9.57895 5.71893 7.92945 7.36842 5.89474 7.36842C3.86001 7.36842 2.21053 5.71893 2.21053 3.68421ZM5.89474 5.89474C7.11561 5.89474 8.10526 4.90505 8.10526 3.68421C8.10526 2.46337 7.11561 1.47368 5.89474 1.47368C4.67386 1.47368 3.68421 2.46337 3.68421 3.68421C3.68421 4.90505 4.67386 5.89474 5.89474 5.89474Z"
                            fill="black"
                          />
                          <path
                            d="M1.72653 9.83175C0.621047 10.9372 0 12.4366 0 14H1.47368C1.47368 12.8275 1.93947 11.703 2.76858 10.8739C3.59769 10.0447 4.7222 9.57894 5.89474 9.57894C7.06727 9.57894 8.19177 10.0447 9.02086 10.8739C9.85003 11.703 10.3158 12.8275 10.3158 14H11.7895C11.7895 12.4366 11.1684 10.9372 10.063 9.83175C8.95749 8.72634 7.45809 8.10526 5.89474 8.10526C4.33136 8.10526 2.83201 8.72634 1.72653 9.83175Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      Profile
                    </Link> */}
                    {/* <Link className="dropdown-item" to="/change-password">
                      <span className="icn me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M4.08334 10.5C3.11112 10.5 2.28473 10.1597 1.60418 9.47917C0.923621 8.79861 0.583344 7.97222 0.583344 7C0.583344 6.02778 0.923621 5.20139 1.60418 4.52083C2.28473 3.84028 3.11112 3.5 4.08334 3.5C4.87084 3.5 5.55879 3.72108 6.14718 4.16325C6.73518 4.60581 7.14584 5.1625 7.37918 5.83333H12.25C12.5708 5.83333 12.8456 5.94747 13.0743 6.17575C13.3025 6.40442 13.4167 6.67917 13.4167 7C13.4167 7.35 13.2951 7.63194 13.0521 7.84583C12.809 8.05972 12.5417 8.16667 12.25 8.16667V9.33333C12.25 9.65417 12.1359 9.92892 11.9076 10.1576C11.6789 10.3859 11.4042 10.5 11.0833 10.5C10.7625 10.5 10.4878 10.3859 10.2591 10.1576C10.0308 9.92892 9.91668 9.65417 9.91668 9.33333V8.16667H7.37918C7.14584 8.8375 6.73518 9.39419 6.14718 9.83675C5.55879 10.2789 4.87084 10.5 4.08334 10.5ZM4.08334 8.16667C4.40418 8.16667 4.67873 8.05233 4.90701 7.82367C5.13568 7.59539 5.25001 7.32083 5.25001 7C5.25001 6.67917 5.13568 6.40442 4.90701 6.17575C4.67873 5.94747 4.40418 5.83333 4.08334 5.83333C3.76251 5.83333 3.48795 5.94747 3.25968 6.17575C3.03101 6.40442 2.91668 6.67917 2.91668 7C2.91668 7.32083 3.03101 7.59539 3.25968 7.82367C3.48795 8.05233 3.76251 8.16667 4.08334 8.16667Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      Password
                    </Link> */}
                    {/* <div className="dropdown-divider"></div> */}
                    <Link onClick={handleLogout} className="dropdown-item">
                      <span className="icn me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.41667 7.58333V1.75H7.58333V7.58333H6.41667ZM7 12.25C6.28056 12.25 5.60233 12.1116 4.96533 11.8347C4.32872 11.5574 3.77222 11.1806 3.29583 10.7042C2.81944 10.2278 2.44261 9.67128 2.16533 9.03467C1.88844 8.39767 1.75 7.71944 1.75 7C1.75 6.22222 1.91042 5.48819 2.23125 4.79792C2.55208 4.10764 3.00417 3.50972 3.5875 3.00417L4.40417 3.82083C3.9375 4.20972 3.57292 4.68125 3.31042 5.23542C3.04792 5.78958 2.91667 6.37778 2.91667 7C2.91667 8.12778 3.31528 9.09028 4.1125 9.8875C4.90972 10.6847 5.87222 11.0833 7 11.0833C8.1375 11.0833 9.10233 10.6847 9.8945 9.8875C10.6871 9.09028 11.0833 8.12778 11.0833 7C11.0833 6.37778 10.9544 5.78958 10.6966 5.23542C10.4391 4.68125 10.0722 4.20972 9.59583 3.82083L10.4125 3.00417C10.9958 3.50972 11.4479 4.10764 11.7687 4.79792C12.0896 5.48819 12.25 6.22222 12.25 7C12.25 7.71944 12.1116 8.39767 11.8347 9.03467C11.5574 9.67128 11.1831 10.2278 10.7118 10.7042C10.24 11.1806 9.68586 11.5574 9.04925 11.8347C8.41225 12.1116 7.72917 12.25 7 12.25Z"
                            fill="#FF0D0D"
                          />
                        </svg>
                      </span>
                      Logout
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Container>
        </Nav>
      </header>
    </>
  );
};
export default Header;

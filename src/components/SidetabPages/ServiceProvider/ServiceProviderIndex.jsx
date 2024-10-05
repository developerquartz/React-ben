import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ServiceProviderIndex = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Templates</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 card">
                <Row>
                  <Col lg="12" className="my-2">
                    <div className="d-flex align-items-center py-2 justify-content-end flex-wrap border-bottom filter-wrp">
                      <div className="right btn-wrap d-flex align-items-center my-2">
                        <Link
                          to="/service-provider/add"
                          className="d-flex align-items-center justify-content-center me-2 btn btn-primary "
                        >
                          <span className="me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M6.41667 11.0833V7.58334H2.91667V6.41667H6.41667V2.91667H7.58334V6.41667H11.0833V7.58334H7.58334V11.0833H6.41667Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Add New Document Template
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg="3" md="4" sm="6" className="my-3">
                    <Link to="" className="text-dark h-100">
                      <div className="card-box text-center h-100 border rounded px-4 py-4">
                        <div className="icn-wrp">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="90"
                            height="90"
                            viewBox="0 0 90 90"
                            fill="none"
                          >
                            <path
                              d="M22.5 7.5C20.5109 7.5 18.6032 8.29018 17.1967 9.6967C15.7902 11.1032 15 13.0109 15 15V75C15 76.9891 15.7902 78.8968 17.1967 80.3033C18.6032 81.7098 20.5109 82.5 22.5 82.5H67.5C69.4891 82.5 71.3968 81.7098 72.8033 80.3033C74.2098 78.8968 75 76.9891 75 75V30L52.5 7.5H22.5ZM22.5 15H48.75V33.75H67.5V75H22.5V15ZM30 45V52.5H60V45H30ZM30 60V67.5H48.75V60H30Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <div className="content pt-3">
                          <h5 className="m-0 name o py-2 fw-sbold">
                            Product 1
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ServiceProviderIndex;

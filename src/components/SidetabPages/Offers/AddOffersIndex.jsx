import React from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const AddOffersIndex = () => {
  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="">Customers</Breadcrumb.Item>
                  <Breadcrumb.Item active>Add</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder=""
                        className="form-control"
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder=""
                        className="form-control"
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Password
                      </label>
                      <input
                        type="Password"
                        placeholder=""
                        className="form-control"
                      />
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Status
                      </label>
                      <div className="py-2 switch-btn-cstm">
                        <BootstrapSwitchButton
                          width={92}
                          height={36}
                          checked={false}
                          onlabel="Active"
                          offlabel="InActive"
                          // onChange={(checked: boolean) => {
                          //   this.setState({ isUserAdmin: checked });
                          // }}
                        />
                      </div>
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Profile Image
                      </label>
                      <div className="upload-file position-relative">
                        <input type="file" className="position-absolute" />
                        <div className="inner position-relative">
                          <img
                            src="../assets/images/profile.png"
                            alt=""
                            className="img-fluid w-100 h-100 rounded-circle"
                          />
                          <span className="btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M5.2125 11.1975L8.3925 6.9525L14.76 1.65C15.0525 1.3575 15.54 1.3575 15.8175 1.65L16.35 2.1825C16.6425 2.46 16.6425 2.9475 16.35 3.24L11.0475 9.6075L6.8025 12.7875L5.2125 11.1975M6.27 13.32L4.68 11.73L2.5575 12.7875L1.5 15.9675L3.09 14.3775C3.24 14.25 3.4725 14.25 3.6225 14.3775C3.75 14.5275 3.75 14.76 3.6225 14.91L2.0325 16.5L5.2125 15.4425L6.27 13.32Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <p className="small-text m-0 text-muted">
                        Max. upload file size: 5MB
                      </p>
                    </Col>
                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button className="d-flex align-items-center justify-content-center me-2">
                          Submit
                        </Button>
                        <Button className="d-flex align-items-center justify-content-center me-2">
                          <span className="me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="9"
                              viewBox="0 0 12 9"
                              fill="none"
                            >
                              <path
                                d="M2.8725 3.75L5.5575 1.0575L4.5 0L0 4.5L4.5 9L5.5575 7.9425L2.8725 5.25H12V3.75H2.8725Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          Back
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default AddOffersIndex;

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Tab,
  Nav,
} from "react-bootstrap";

import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../Common/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { bookingsList } from "../../../store/actions";
import { toast } from "react-toastify";
import moment from "moment";

const columnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "bookingNumber",
    align: false,
    disablePadding: true,
    label: "Booking ID",
    title: "bookingNumber",
    order: 1,
  },
  {
    id: "customerName",
    numeric: false,
    disablePadding: false,
    label: "Customer",
    title: "customerName",
  }
];

const BirdEyeViewIndex = () => {
  const [bookingListPopup, setBookingListPopup] = useState(false);

  const BookingListPopupClose = () => setBookingListPopup(false);
  const BookingListPopupOpen = () => setBookingListPopup(true);

  const [assignshow, setAssignShow] = useState(false);

  const assignClose = () => setAssignShow(false);
  const assignShow = () => setAssignShow(true);

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12">
              <div className="bg-white card-box rounded">
                <Row>
                  <Col lg="3" className="my-2 location-detail">
                    <div className="top px-2 pe-lg-0">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="dashboard-head m-0">Location</h4>
                        <Button
                          className="theme-clr fw-sbold border-0 p-0 bg-transparent"
                          onClick={BookingListPopupOpen}
                        >
                          Get Bookings
                        </Button>
                      </div>
                      <input type="search" className="form-control" />
                    </div>
                    <Tab.Container
                      id="location-tab"
                      defaultActiveKey="Available"
                    >
                      <Row>
                        <Col sm={12}>
                          <Nav variant="pills" className="">
                            <Nav.Item>
                              <Nav.Link eventKey="Available">
                                Available
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="Busy">Busy</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="Available">
                              <div className="list-wrp">
                                <div className="py-2">
                                  <div className="d-flex align-items-center justify-content-between py-2">
                                    <div className="left  px-2">
                                      <p className="theme-clr m-0 small-text fw-sbold">
                                        John Abrahm
                                      </p>
                                    </div>
                                    <div className="right px-2">
                                      <Button
                                        className="common-btn small-btn d-flex align-items-center justify-content-center"
                                        onClick={assignShow}
                                      >
                                        Assign
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <div className="py-2">
                                  <div className="d-flex align-items-center justify-content-between py-2">
                                    <div className="left  px-2">
                                      <p className="theme-clr m-0 small-text fw-sbold">
                                        John Abrahm
                                      </p>
                                    </div>
                                    <div className="right px-2">
                                      <Button className="common-btn small-btn d-flex align-items-center justify-content-center">
                                        Assign
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <div className="py-2">
                                  <div className="d-flex align-items-center justify-content-between py-2">
                                    <div className="left  px-2">
                                      <p className="theme-clr m-0 small-text fw-sbold">
                                        John Abrahm
                                      </p>
                                    </div>
                                    <div className="right px-2">
                                      <Button className="common-btn small-btn d-flex align-items-center justify-content-center">
                                        Assign
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Busy"></Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Col>

                  <Col lg="9" className="map-wrp my-2 ps-lg-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6611192751716!2d76.69057941501042!3d30.699809481648575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee5f8300cded%3A0x321f921d0247d0ef!2sSuffescom%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1672293505810!5m2!1sen!2sin"
                      className="w-100 border-0"
                      style={{ height: "100vh" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
        className="refund-pop"
        show={bookingListPopup}
        onHide={BookingListPopupClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Show Bookings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-md-4">
            <Row>
              <Col lg="12" className="my-2">
                <Form.Select aria-label="Default select example">
                  <option>Select Booking</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-2 d-flex align-items-center justify-content-center"
            onClick={BookingListPopupClose}
          >
            No, Cancel!
          </Button>
          <Button
            className="btn d-flex align-items-center justify-content-center"
            onClick={BookingListPopupClose}
          >
            Select Booking
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        className="refund-pop"
        show={assignshow}
        onHide={assignClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Assign Driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-md-4">
            <ul className="list-unstyled ps-0 mb-0">
              <li className="py-2 d-flex align-items-center justify-content-between">
                <h6 className="small-text theme-clr fw-sbold m-0">
                  Driver Name
                </h6>
                <p className="text-muted fw-bold small-text m-0">
                  Tamish driver
                </p>
              </li>
              <li className="py-2 d-flex align-items-center justify-content-between">
                <h6 className="small-text theme-clr fw-sbold m-0">
                  Driver Mobile Number:
                </h6>
                <p className="text-muted fw-bold small-text m-0">
                  +91-9876543210
                </p>
              </li>
              <li className="py-2 d-flex align-items-center justify-content-between">
                <h6 className="small-text theme-clr fw-sbold m-0">
                  Driver Email:
                </h6>
                <p className="text-muted fw-bold small-text m-0">
                  tamish@yopmail.com
                </p>
              </li>
            </ul>
            <Form className="">
              <Row>
                <Col lg="12" className="my-2">
                  <Form.Select aria-label="Default select example">
                    <option>Select Store Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col lg="12" className="my-2">
                  <Form.Select aria-label="Default select example">
                    <option>Select Order</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-2 d-flex align-items-center justify-content-center"
            onClick={assignClose}
          >
            No, Cancel!
          </Button>
          <Button
            className="btn d-flex align-items-center justify-content-center"
            onClick={assignClose}
          >
            Assign Driver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default BirdEyeViewIndex;

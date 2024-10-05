import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  Form,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const OffersIndex = () => {
  const [deleteShow, deleteSetShow] = useState(false);

  const deleteClose = () => deleteSetShow(false);
  const deleteShowPop = () => deleteSetShow(true);
  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Offers</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <div className="d-flex align-items-center justify-content-between flex-wrap filter-wrp">
                  <div className="left d-flex align-items-center flex-wrap my-2">
                    <div className="filterby d-flex align-items-center me-2">
                      <label htmlFor="" className="label m-0 me-2">
                        Filter By:
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option>Status</option>
                        <option value="1">Pending</option>
                        <option value="2">Confirmed</option>
                        <option value="3">Completed</option>
                        <option value="4">Cancelled</option>
                      </Form.Select>
                    </div>
                    <div className="form-wrp">
                      <Form className="position-relative search-form">
                        <input
                          type="search"
                          placeholder="Search"
                          className="form-control"
                        />
                        <Button className="position-absolute d-flex align-items-center justify-contnet-center common-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.5 3.75001C9.61358 3.75001 8.73583 3.9246 7.91689 4.26382C7.09794 4.60304 6.35382 5.10024 5.72703 5.72704C5.10023 6.35384 4.60303 7.09795 4.26381 7.9169C3.92459 8.73585 3.75 9.61359 3.75 10.5C3.75 11.3864 3.92459 12.2642 4.26381 13.0831C4.60303 13.9021 5.10023 14.6462 5.72703 15.273C6.35382 15.8998 7.09794 16.397 7.91689 16.7362C8.73583 17.0754 9.61358 17.25 10.5 17.25C12.2902 17.25 14.0071 16.5389 15.273 15.273C16.5388 14.0071 17.25 12.2902 17.25 10.5C17.25 8.7098 16.5388 6.99291 15.273 5.72704C14.0071 4.46117 12.2902 3.75001 10.5 3.75001V3.75001ZM2.25 10.5C2.25017 9.17511 2.56944 7.86973 3.18079 6.69431C3.79214 5.51889 4.67759 4.50799 5.76224 3.74713C6.84689 2.98627 8.09883 2.49784 9.41216 2.32314C10.7255 2.14843 12.0616 2.29261 13.3074 2.74347C14.5533 3.19432 15.6722 3.9386 16.5695 4.91333C17.4669 5.88807 18.1163 7.06459 18.4628 8.34337C18.8094 9.62216 18.8428 10.9656 18.5603 12.26C18.2778 13.5545 17.6878 14.7618 16.84 15.78L21.53 20.47C21.6037 20.5387 21.6628 20.6215 21.7038 20.7135C21.7448 20.8055 21.7668 20.9048 21.7686 21.0055C21.7704 21.1062 21.7518 21.2062 21.7141 21.2996C21.6764 21.393 21.6203 21.4778 21.549 21.549C21.4778 21.6203 21.393 21.6764 21.2996 21.7141C21.2062 21.7519 21.1062 21.7704 21.0055 21.7686C20.9048 21.7668 20.8055 21.7448 20.7135 21.7038C20.6215 21.6628 20.5387 21.6037 20.47 21.53L15.78 16.84C14.5752 17.8435 13.1094 18.4829 11.5543 18.6833C9.99922 18.8837 8.41922 18.6367 6.99941 17.9714C5.5796 17.3061 4.37878 16.25 3.53763 14.9267C2.69648 13.6035 2.24983 12.068 2.25 10.5V10.5Z"
                              fill="white"
                            />
                          </svg>
                        </Button>
                      </Form>
                    </div>
                  </div>
                  <div className="right btn-wrap d-flex align-items-center my-2">
                    <Link
                      to="/offers/add"
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
                      Add New Offers
                    </Link>
                  </div>
                </div>
                <div className="table-responsive py-3">
                  <table className="table common-table">
                    <thead>
                      <tr>
                        <th>Offer Name</th>
                        <th>Orders</th>
                        <th>Amount</th>
                        <th>Starts</th>
                        <th>Expires</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="theme-clr m-0 fw-sbold">asd33d</p>
                        </td>
                        <td>
                          <p className="theme-clr m-0 fw-sbold">3</p>
                        </td>
                        <td>
                          <p className="m-0">$100</p>
                        </td>
                        <td>
                          <p className="m-0">01 Dec 2022, 5:04 PM</p>
                        </td>
                        <td>
                          <p className="m-0">31 Dec 2022, 5:04 PM</p>
                        </td>
                        <td>
                          <p className="m-0 status active-status">Active</p>
                        </td>
                        <td>
                          <div className="action-btn d-flex align-items-center">
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Edit</Tooltip>
                              )}
                              placement="top"
                            >
                              <Button className="btn d-inline-flex align-items-center justify-content-center me-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M10.2583 4.20624L7.77917 1.75624L8.59583 0.939573C8.81944 0.715962 9.09419 0.604156 9.42008 0.604156C9.74558 0.604156 10.0201 0.715962 10.2437 0.939573L11.0604 1.75624C11.284 1.97985 11.4007 2.24974 11.4104 2.56591C11.4201 2.88168 11.3132 3.15138 11.0896 3.37499L10.2583 4.20624ZM9.4125 5.06666L3.22917 11.25H0.75V8.77082L6.93333 2.58749L9.4125 5.06666Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Delete</Tooltip>
                              )}
                              placement="top"
                            >
                              <Button
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                                onClick={deleteShowPop}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M11.8825 5.1975L11.2992 6.20667L4.22333 2.12333L4.80667 1.11417L6.58 2.135L7.37333 1.91917L9.89917 3.3775L10.115 4.17667L11.8825 5.1975ZM3.5 11.0833V4.08333H6.4575L10.5 6.41667V11.0833C10.5 11.3928 10.3771 11.6895 10.1583 11.9083C9.9395 12.1271 9.64275 12.25 9.33333 12.25H4.66667C4.35725 12.25 4.0605 12.1271 3.84171 11.9083C3.62292 11.6895 3.5 11.3928 3.5 11.0833Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Button>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="theme-clr m-0 fw-sbold">asd33d</p>
                        </td>
                        <td>
                          <p className="theme-clr m-0 fw-sbold">3</p>
                        </td>
                        <td>
                          <p className="m-0">$100</p>
                        </td>
                        <td>
                          <p className="m-0">01 Dec 2022, 5:04 PM</p>
                        </td>
                        <td>
                          <p className="m-0">31 Dec 2022, 5:04 PM</p>
                        </td>
                        <td>
                          <p className="m-0 status offline-status">InActive</p>
                        </td>
                        <td>
                          <div className="action-btn d-flex align-items-center">
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Edit</Tooltip>
                              )}
                              placement="top"
                            >
                              <Button className="btn d-inline-flex align-items-center justify-content-center me-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M10.2583 4.20624L7.77917 1.75624L8.59583 0.939573C8.81944 0.715962 9.09419 0.604156 9.42008 0.604156C9.74558 0.604156 10.0201 0.715962 10.2437 0.939573L11.0604 1.75624C11.284 1.97985 11.4007 2.24974 11.4104 2.56591C11.4201 2.88168 11.3132 3.15138 11.0896 3.37499L10.2583 4.20624ZM9.4125 5.06666L3.22917 11.25H0.75V8.77082L6.93333 2.58749L9.4125 5.06666Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Delete</Tooltip>
                              )}
                              placement="top"
                            >
                              <Button
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                                onClick={deleteShowPop}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M11.8825 5.1975L11.2992 6.20667L4.22333 2.12333L4.80667 1.11417L6.58 2.135L7.37333 1.91917L9.89917 3.3775L10.115 4.17667L11.8825 5.1975ZM3.5 11.0833V4.08333H6.4575L10.5 6.41667V11.0833C10.5 11.3928 10.3771 11.6895 10.1583 11.9083C9.9395 12.1271 9.64275 12.25 9.33333 12.25H4.66667C4.35725 12.25 4.0605 12.1271 3.84171 11.9083C3.62292 11.6895 3.5 11.3928 3.5 11.0833Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Button>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal
        show={deleteShow}
        onHide={deleteClose}
        className="deleteAdd-pop delete-pop"
        centered
      >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
          <div className="text-center py-3">
            <div className="icn my-3">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256    C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216    c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"
                  fill="#f8c886"
                ></path>
                <path
                  d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877    C276,137.831,267.046,128.877,256,128.877z"
                  fill="#f8c886"
                ></path>
                <circle cx="256" cy="349.16" r="27" fill="#f8c886"></circle>{" "}
              </svg>
            </div>
            <h2 className="pop-head m-0 pb-2">Are you Sure?</h2>
            <div className="btn-wrap my-2 d-flex align-items-center justify-content-center mt-3">
              <div className="pe-2 w-50">
                <Button
                  className="btn-2 w-100 d-flex align-items-center justify-content-center"
                  onClick={deleteClose}
                >
                  No Cancel!
                </Button>
              </div>
              <div className="pe-2 w-50">
                <Button className=" w-100 d-flex align-items-center justify-content-center">
                  Yes, Delete it
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default OffersIndex;

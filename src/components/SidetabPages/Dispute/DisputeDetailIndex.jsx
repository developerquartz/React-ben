import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import { disputeDetails } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const DisputeDetailIndex = () => {

  const dispatch = useDispatch();
  const id = location.pathname.split("/")[3];

  const [data, setData] = useState({
    _id: "",
    bookingId: "",
    bookingDetails: {},
    customerId: "",
    customerDetails: {},
    providerId: "",
    providerDetails: {},
    disputeReason: "",
    disputeDescription: "",
    bookingAmount: 0,
    readableDate: "",
    disputeDate: "",
    disputeTime: "",
    refundPercent: 0,
    refundAmount: 0,
    disputeStatus: "",
    attachments: [],
    reply: []
  });

  const disputeData = useSelector((s) => s?.Dispute?.disputeDetail?.data);
  const loading = useSelector((s) => s?.Dispute?.loading);

  useEffect(() => {
    setData((pre) => ({
      ...pre,
      _id: disputeData?._id,
      bookingId: disputeData?.bookingId,
      bookingDetails: disputeData?.bookingDetails,
      customerId: disputeData?.customerId,
      customerDetails: disputeData?.customerDetails,
      providerId: disputeData?.providerId,
      providerDetails: disputeData?.providerDetails,
      disputeReason: disputeData?.disputeReason,
      disputeDescription: disputeData?.disputeDescription,
      bookingAmount: disputeData?.bookingAmount,
      readableDate: disputeData?.readableDate,
      disputeDate: disputeData?.disputeDate,
      disputeTime: disputeData?.disputeTime,
      disputeStatus: disputeData?.disputeStatus,
      refundPercent: disputeData?.refundPercent,
      refundAmount: disputeData?.refundAmount,
      attachments: disputeData?.attachment,
      reply: disputeData?.reply,
    }));

  }, [disputeData]);

  useEffect(() => {
    if (id) {
      dispatch(disputeDetails(id));
    }
    setData((pre) => ({
      ...pre,
      _id: id,
    }));
  }, [id]);

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/dispute">Dispute</Breadcrumb.Item>
                  <Breadcrumb.Item active>Detail</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="pe-2">
                      <h6 className="fw-sbold m-0 pb-1">Reason</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {data?.disputeReason}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="pe-2">
                      <h6 className="fw-sbold m-0 pb-1">Description</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {data?.disputeDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Customer Name</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {data?.customerDetails?.name}
                      </p>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Customer Email</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {data?.customerDetails?.email}
                      </p>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Customer Mobile No.</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {data?.customerDetails?.countryCode + data?.customerDetails?.mobileNumber}
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Provider Name</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                      {data?.providerDetails?.name || "--"}
                      </p>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Provider Email</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {data?.providerDetails?.email || "--"}
                      </p>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Provider Mobile No.</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {data?.providerDetails?.countryCode + data?.providerDetails?.mobileNumber  || "--"}
                      </p>
                    </div>
                 
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Booking</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {data?.bookingDetails?.bookingNumber}
                      </p>
                    </div>
                    <div className="px-4">
                        <h6 className="fw-sbold m-0 pb-1 text-center">Booking Amount</h6>
                        <p className="text-theme-clr m-0 small-text py-1 text-center">
                          $  {data?.bookingAmount || "--"}
                        </p>
                      </div>
                   
                      <div className="px-2">
                        <h6 className="fw-sbold m-0 pb-1 text-center">Amount Paid</h6>
                        <p className="text-theme-clr m-0 small-text py-1 text-center">
                          $  {data?.bookingDetails?.advancePayment || "--"}
                        </p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Dispute Status</h6>
                      <p className="m-0 status active-status text-center">{data?.disputeStatus?.charAt(0).toUpperCase() + data?.disputeStatus?.slice(1)}</p>
                    </div>

                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Refund Amount</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        $ {data?.refundAmount || "0"}
                      </p>
                    </div>

                    <div className="px-2">
                      <h6 className="fw-sbold m-0 pb-1 text-center">Created At</h6>
                      <p className="text-theme-clr m-0 small-text py-1 text-center">
                        {moment(data?.readableDate).format("DD-MM-YYYY hh:mm A")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            {data?.attachments?.length > 0 && (
              <Row lg="12" className="my-2">
                <p className="text-muted fw-sbold m-0 py-2">Attachments</p>
                {data?.attachments?.map((attachment, i) => (
                  <Col lg="3" md="4" sm="6" className="my-2">
                    <div className="bg-white card-box px-4 py-3 text-center rounded h-100">
                      <p className="text-muted fw-sbold m-0 py-2">Attachment {i + 1}</p>
                      <div className="img-wrp mt-2">
                        <img
                          src={attachment}
                          alt=""
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default DisputeDetailIndex;

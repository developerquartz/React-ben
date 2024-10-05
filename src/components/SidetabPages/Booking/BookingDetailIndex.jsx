import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { bookingDetail, updateBookingStatus } from "../../../store/actions";
import moment from "moment";
import { toast } from "react-toastify";

const BookingDetailIndex = () => {
  const [orderStatusshow, orderStatussetShow] = useState(false);

  const orderStatusClose = () => orderStatussetShow(false);
  const orderStatusShow = () => orderStatussetShow(true);

  const dispatch = useDispatch();
  const id = location.pathname.split("/")[3];

  const bookingData = useSelector((s) => s?.Dashboard?.bookingDetail?.data);
  const loading = useSelector((s) => s?.Dashboard?.loading);

  const [customerProfileLink, setCustomerProfileLink] = useState(
    "/customers/profile/"
  );
  const [providerProfileLink, setProviderProfileLink] = useState(
    "/service-provider/profile/"
  );
  const [driverProfileLink, setDriverProfileLink] = useState(
    "/service-provider/profile/"
  );

  const [bookingStatus, setBookingStatus] = useState("");

  const [data, setData] = useState({
    bookingId: "",
    bookingNumber: "",
    customerId: "",
    customerName: "",
    customerEmail: "",
    customerMobileNumber: "",
    customerProfileImage: "",
    customerAvgRating: "",
    customerCountryCode: "",

    customerVehicleId: "",
    customerVehicleDetails: {},
    customerVehicleFuelType: "",

    providerId: "",
    providerName: "",
    providerEmail: "",
    providerMobileNumber: "",
    providerProfileImage: "",
    providerAvgRating: "",
    providerCountryCode: "",

    driverId: "",
    driverName: "",
    driverEmail: "",
    driverMobileNumber: "",
    driverProfileImage: "",
    driverAvgRating: "",
    driverCountryCode: "",

    providerServiceDetails: {},
    serviceId: "",
    serviceCategory: "",
    serviceName: "",
    serviceLogo: "",
    serviceCost: 0,
    distanceCost: 0,
    serviceDetails: {},
    serviceDescription: "",
    serviceInstructions: "",

    providerServiceAddOnDetails: {},
    serviceAddOnDetails: {},
    serviceAddOnName: "",
    serviceAddOnLogo: "",
    serviceAddOnCost: 0,
    serviceAddOnDistanceCost: 0,
    serviceAddOnDescription: "",

    startAddress: "",
    startAddressType: "",
    startAddressParkingType: "",
    startAddressParkingNotes: "",
    startLocation: {},

    endAddress: "",
    endAddressType: "",
    endAddressParkingType: "",
    endAddressParkingNotes: "",
    endLocation: {},

    startOTP: "",
    serviceStartCaption: "",
    serviceStartImage: "",
    serviceEndCaption: "",
    serviceEndImage: "",
    taxReceipt: "",

    repairDescription: "",
    repairVehicleImages: [],
    driverQuote: 0,
    providerQuote: 0,

    cancelledBy: "",
    cancellationReason: "",

    cancellationCharges: 0,
    serviceTotal: 0,
    serviceCharge: 0,
    taxPercent: 0,
    tax: 0,
    subTotal: 0,
    promoCodeCost: 0,
    promoCode: "",
    tipAmount: 0,
    totalAmount: 0,
    adminCommission: 0,
    providerCommission: 0,
    advancePayment: 0,
    pendingPayment: 0,

    status: "",
    paymentMethod: "",
    paymentStatus: "",
    paymentType: "",
    customerTransactionId: "",
    providerTransactionId: "",

    bookingAcceptedAt: "",
    bookingRejectedAt: "",
    driverAssignedAt: "",
    driverAcceptedAt: "",
    driverRejectedAt: "",
    providerInRouteAt: "",
    bookingStartedAt: "",
    bookingCompletedAt: "",
    createdAt: "",
    bookingCancelledAt: "",

    bookingType: "",
    bookingDate: "",
    bookingTime: "",
    bookingStartTime: "",
    bookingEndTime: "",
    timezone: "",
    scheduledAt: "",

    refundAmount: 0,
    refundPercent: 0,
    refundTransactionId: "",
    refundStatus: "",

    review: {},
  });

  useEffect(() => {
    setData((pre) => ({
      ...pre,
      bookingNumber: bookingData?.bookingNumber,
      customerName: bookingData?.customerName,
      customerEmail: bookingData?.customerEmail,
      customerMobileNumber: bookingData?.customerMobileNumber,
      customerProfileImage: bookingData?.customerProfileImage,
      customerAvgRating: bookingData?.customerAvgRating,
      customerCountryCode: bookingData?.customerCountryCode,
      customerId: bookingData?.customerId,

      customerVehicleId: bookingData?.customerVehicleId,
      customerVehicleDetails: bookingData?.customerVehicleDetails,
      customerVehicleFuelType: bookingData?.customerVehicleFuelType,

      providerId: bookingData?.providerId,
      providerName: bookingData?.providerName,
      providerEmail: bookingData?.providerEmail,
      providerMobileNumber: bookingData?.providerMobileNumber,
      providerProfileImage: bookingData?.providerProfileImage,
      providerAvgRating: bookingData?.providerAvgRating,
      providerCountryCode: bookingData?.providerCountryCode,

      driverId: bookingData?.driverId,
      driverName: bookingData?.driverName,
      driverEmail: bookingData?.driverEmail,
      driverMobileNumber: bookingData?.driverMobileNumber,
      driverProfileImage: bookingData?.driverProfileImage,
      driverAvgRating: bookingData?.driverAvgRating,
      driverCountryCode: bookingData?.driverCountryCode,

      providerServiceDetails: bookingData?.providerServiceDetails,
      serviceId: bookingData?.serviceId,
      serviceCategory: bookingData?.serviceCategory,
      serviceDetails: bookingData?.serviceDetails,
      serviceName: bookingData?.serviceName,
      serviceLogo: bookingData?.serviceLogo,
      serviceCost: bookingData?.serviceCost,
      distanceCost: bookingData?.distanceCost,
      serviceDescription: bookingData?.serviceDescription,
      serviceInstructions: bookingData?.serviceInstructions,

      providerServiceAddOnDetails: bookingData?.providerServiceAddOnDetails,
      serviceAddOnDetails: bookingData?.serviceAddOnDetails,
      serviceAddOnName: bookingData?.serviceAddOnName,
      serviceAddOnLogo: bookingData?.serviceAddOnLogo,
      serviceAddOnCost: bookingData?.serviceAddOnCost,
      serviceAddOnDistanceCost: bookingData?.serviceAddOnDistanceCost,
      serviceAddOnDescription: bookingData?.serviceAddOnDescription,

      startAddress: bookingData?.startAddress,
      startAddressType: bookingData?.startAddressType,
      startAddressParkingType: bookingData?.startAddressParkingType,
      startAddressParkingNotes: bookingData?.startAddressParkingNotes,
      startLocation: bookingData?.startLocation,

      endAddress: bookingData?.endAddress,
      endAddressType: bookingData?.endAddressType,
      endAddressParkingType: bookingData?.endAddressParkingType,
      endAddressParkingNotes: bookingData?.endAddressParkingNotes,
      endLocation: bookingData?.endLocation,

      startOTP: bookingData?.startOTP,
      serviceStartCaption: bookingData?.serviceStartCaption,
      serviceStartImage: bookingData?.serviceStartImage,
      serviceEndCaption: bookingData?.serviceEndCaption,
      serviceEndImage: bookingData?.serviceEndImage,
      taxReceipt: bookingData?.taxReceipt,

      repairDescription: bookingData?.repairDescription,
      repairVehicleImages: bookingData?.repairVehicleImages,
      driverQuote: bookingData?.driverQuote,
      providerQuote: bookingData?.providerQuote,

      cancelledBy: bookingData?.cancelledBy,
      cancellationReason: bookingData?.cancellationReason,

      cancellationCharges: bookingData?.cancellationCharges,
      serviceTotal: bookingData?.serviceTotal,
      serviceCharge: bookingData?.serviceCharge,
      taxPercent: bookingData?.taxPercent,
      tax: bookingData?.tax,
      subTotal: bookingData?.subTotal,
      promoCodeCost: bookingData?.promoCodeCost,
      promoCode: bookingData?.promoCode,
      tipAmount: bookingData?.tipAmount,
      totalAmount: bookingData?.totalAmount,
      adminCommission: bookingData?.adminCommission,
      providerCommission: bookingData?.providerCommission,
      advancePayment: bookingData?.advancePayment,
      pendingPayment: bookingData?.pendingPayment,

      status: bookingData?.status,
      paymentMethod: bookingData?.paymentMethod,
      paymentStatus: bookingData?.paymentStatus,
      paymentType: bookingData?.paymentType,
      customerTransactionId: bookingData?.customerTransactionId,
      providerTransactionId: bookingData?.providerTransactionId,

      bookingAcceptedAt: bookingData?.bookingAcceptedAt,
      bookingRejectedAt: bookingData?.bookingRejectedAt,
      driverAssignedAt: bookingData?.driverAssignedAt,
      driverAcceptedAt: bookingData?.driverAcceptedAt,
      driverRejectedAt: bookingData?.driverRejectedAt,
      providerInRouteAt: bookingData?.providerInRouteAt,
      bookingStartedAt: bookingData?.bookingStartedAt,
      bookingCompletedAt: bookingData?.bookingCompletedAt,
      createdAt: bookingData?.createdAt,
      bookingCancelledAt: bookingData?.bookingCancelledAt,

      bookingType: bookingData?.bookingType,
      bookingDate: bookingData?.bookingDate,
      bookingStartTime: bookingData?.bookingStartTime,
      bookingEndTime: bookingData?.bookingEndTime,
      timezone: bookingData?.timezone,
      scheduledAt: bookingData?.scheduledAt,

      refundAmount: bookingData?.refundAmount,
      refundPercent: bookingData?.refundPercent,
      refundTransactionId: bookingData?.refundTransactionId,
      refundStatus: bookingData?.refundStatus,

      review: bookingData?.review,
    }));

    setCustomerProfileLink(`/customers/profile/${bookingData?.customerId}`);

    setProviderProfileLink(
      `/service-provider/profile/${bookingData?.providerId}`
    );

    if (bookingData?.driverId) {
      setDriverProfileLink(
        `/service-provider/profile/${bookingData?.driverId}`
      );
    }
  }, [bookingData]);

  useEffect(() => {
    if (id) {
      dispatch(bookingDetail(id));
    }
    setData((pre) => ({
      ...pre,
      bookingId: id,
    }));
  }, [id]);

  const handleStatusChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setBookingStatus(value);
  };

  const changeBookingStatus = () => {
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        dispatch(bookingDetail(id));
      } else {
        toast.error(response.message);
      }
    };
    dispatch(
      updateBookingStatus(
        { bookingId: data.bookingId, status: bookingStatus },
        callBack
      )
    );
    orderStatusClose();
  };

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/bookings">Bookings</Breadcrumb.Item>
                  <Breadcrumb.Item active>Booking Details</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>

            <Col lg="4" className="my-2">
              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="table-responsive py-3">
                    <table className="table common-table">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {data?.bookingNumber}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Booking Id
                            </p>
                          </td>
                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {moment(data?.createdAt).format(
                                "DD/MM/YYYY hh:mm A"
                              )}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Created At
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {data?.paymentMethod?.charAt(0).toUpperCase() +
                                data?.paymentMethod?.slice(1)}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Payment Method
                            </p>
                          </td>

                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {data?.paymentStatus?.charAt(0).toUpperCase() +
                                data?.paymentStatus?.slice(1)}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Payment Status
                            </p>
                          </td>

                          {/* <td>
                            <Button
                              className="m-0 bg-transparent border-0 p-0 theme-clr small-text fw-sbold"
                              onClick={refundShow}
                            >
                              Refund
                            </Button>
                            <p className="m-0 text-muted fw-sbold">Refunds</p>
                          </td> */}
                        </tr>

                        <tr>
                          <td>
                            <p className="m-0 text-dark fw-sbold ">
                              {data?.paymentType?.charAt(0).toUpperCase() +
                                data?.paymentType?.slice(1)}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Payment Type
                            </p>
                          </td>
                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {data?.serviceCategory}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Service Category
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {data?.bookingType?.charAt(0).toUpperCase() +
                                data?.bookingType?.slice(1)}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Booking Type
                            </p>
                          </td>
                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {data?.bookingDate}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Booking Date
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {moment(
                                data?.bookingStartTime,
                                "HH:mm:ss"
                              ).format("hh:mm A")}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Booking Start Time
                            </p>
                          </td>
                          <td>
                            <p className="m-0 text-dark fw-sbold">
                              {moment(data?.bookingEndTime, "HH:mm:ss").format(
                                "hh:mm A"
                              )}
                            </p>
                            <p className="m-0 text-muted fw-sbold">
                              Booking End Time
                            </p>
                          </td>
                        </tr>

                        {/* <tr>
                        <td>
                            <p className="m-0 text-dark fw-sbold">$ {data?.totalAmount}</p>
                            <p className="m-0 text-muted fw-sbold">
                              Booking Amount
                            </p>
                          </td>
                        <td>
                            <p className="m-0 text-dark fw-sbold">$ {data?.advancePayment}</p>
                            <p className="m-0 text-muted fw-sbold">
                              Advance Payment
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p className="m-0 text-dark fw-sbold">$ {data?.serviceTotal}</p>
                            <p className="m-0 text-muted fw-sbold">
                              Service Total
                            </p>

                          </td>
                          <td>
                            <p className="m-0 text-dark fw-sbold">$ {data?.serviceCharge}</p>
                            <p className="m-0 text-muted fw-sbold">
                              Service Charge
                            </p>

                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p className="m-0 text-dark fw-sbold">$ {data?.tax}</p>
                            <p className="m-0 text-muted fw-sbold">
                              Tax
                            </p>

                          </td>
                          <td>
                            <p className="m-0 text-dark fw-sbold">$ {data?.tipAmount}</p>
                            <p className="m-0 text-muted fw-sbold">
                              Tip
                            </p>

                          </td>
                        </tr> */}

                        <tr>
                          <td>
                            <p className="m-0 fw-sbold status confirmed-status">
                              {" "}
                              {data?.status?.charAt(0).toUpperCase() +
                                data?.status?.slice(1)}
                            </p>
                            <p className="m-0 text-muted fw-sbold">Status</p>
                          </td>
                          <td>
                            {data?.status !== "cancelled" &&
                              data?.status !== "completed" && (
                                <Button
                                  className="m-0 bg-transparent border-0 p-0 theme-clr small-text fw-sbold"
                                  onClick={orderStatusShow}
                                >
                                  Change Booking Status
                                </Button>
                              )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top d-flex align-items-start justify-content-between">
                    <h4 className="dashboard-head m-0">Customer</h4>
                    <Link
                      to={customerProfileLink}
                      className="common-btn small-btn px-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.69999 17.3C8.51665 17.1167 8.42499 16.8833 8.42499 16.6C8.42499 16.3167 8.51665 16.0833 8.69999 15.9L12.6 12L8.69999 8.1C8.51665 7.91667 8.42499 7.68334 8.42499 7.4C8.42499 7.11667 8.51665 6.88334 8.69999 6.7C8.88332 6.51667 9.11665 6.425 9.39999 6.425C9.68332 6.425 9.91665 6.51667 10.1 6.7L14.7 11.3C14.8 11.4 14.871 11.5083 14.913 11.625C14.9543 11.7417 14.975 11.8667 14.975 12C14.975 12.1333 14.9543 12.2583 14.913 12.375C14.871 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91665 17.4833 9.68332 17.575 9.39999 17.575C9.11665 17.575 8.88332 17.4833 8.69999 17.3V17.3Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="table-responsive py-3">
                    <table className="table common-table">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 text-muted fw-sbold">
                              {" "}
                              Full Name :
                            </p>
                          </td>
                          <td>
                            <p className="m-0 fw-sbold ">
                              {data?.customerName}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 text-muted fw-sbold">
                              Mobile Number :{" "}
                            </p>
                          </td>
                          <td>
                            <p className="m-0 fw-sbold">
                              {data?.customerCountryCode +
                                data?.customerMobileNumber}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 text-muted fw-sbold">Email :</p>
                          </td>
                          <td>
                            <p className="m-0 fw-sbold">
                              {data?.customerEmail}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 text-muted fw-sbold">
                              Rating Received :{" "}
                            </p>
                          </td>
                          <td>
                            <p className="m-0 fw-sbold">
                              {data?.review?.customerRating || "-"}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top d-flex align-items-start justify-content-between">
                    <h4 className="dashboard-head m-0">Service Provider</h4>
                    <Link
                      to={providerProfileLink}
                      className="common-btn btn small-btn px-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.69999 17.3C8.51665 17.1167 8.42499 16.8833 8.42499 16.6C8.42499 16.3167 8.51665 16.0833 8.69999 15.9L12.6 12L8.69999 8.1C8.51665 7.91667 8.42499 7.68334 8.42499 7.4C8.42499 7.11667 8.51665 6.88334 8.69999 6.7C8.88332 6.51667 9.11665 6.425 9.39999 6.425C9.68332 6.425 9.91665 6.51667 10.1 6.7L14.7 11.3C14.8 11.4 14.871 11.5083 14.913 11.625C14.9543 11.7417 14.975 11.8667 14.975 12C14.975 12.1333 14.9543 12.2583 14.913 12.375C14.871 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91665 17.4833 9.68332 17.575 9.39999 17.575C9.11665 17.575 8.88332 17.4833 8.69999 17.3V17.3Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="table-responsive py-3">
                    <table className="table common-table">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 text-muted fw-sbold">
                              {" "}
                              Full Name :
                            </p>
                          </td>
                          <td>
                            <p className="m-0 fw-sbold">{data?.providerName}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 text-muted fw-sbold">
                              Mobile Number :{" "}
                            </p>
                          </td>
                          <td>
                            <p className="m-0 fw-sbold">
                              {data?.providerCountryCode +
                                data?.providerMobileNumber}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 text-muted fw-sbold">Email :</p>
                          </td>
                          <td>
                            <p className="m-0 fw-sbold">
                              {data?.providerEmail}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 text-muted fw-sbold">
                              Rating Received :{" "}
                            </p>
                          </td>
                          <td>
                            <p className="m-0 fw-sbold">
                              {data?.review?.providerRating || "-"}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {data?.driverId && (
                <div className="py-2">
                  <div className="bg-white px-4 py-3 card-box rounded">
                    <div className="top d-flex align-items-start justify-content-between">
                      <h4 className="dashboard-head m-0">Driver</h4>
                      <Link
                        to={driverProfileLink}
                        className="common-btn btn small-btn px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8.69999 17.3C8.51665 17.1167 8.42499 16.8833 8.42499 16.6C8.42499 16.3167 8.51665 16.0833 8.69999 15.9L12.6 12L8.69999 8.1C8.51665 7.91667 8.42499 7.68334 8.42499 7.4C8.42499 7.11667 8.51665 6.88334 8.69999 6.7C8.88332 6.51667 9.11665 6.425 9.39999 6.425C9.68332 6.425 9.91665 6.51667 10.1 6.7L14.7 11.3C14.8 11.4 14.871 11.5083 14.913 11.625C14.9543 11.7417 14.975 11.8667 14.975 12C14.975 12.1333 14.9543 12.2583 14.913 12.375C14.871 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91665 17.4833 9.68332 17.575 9.39999 17.575C9.11665 17.575 8.88332 17.4833 8.69999 17.3V17.3Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="table-responsive py-3">
                      <table className="table common-table">
                        <tbody>
                          <tr>
                            <td>
                              <p className="m-0 text-muted fw-sbold">
                                {" "}
                                Full Name :
                              </p>
                            </td>
                            <td>
                              <p className="m-0 fw-sbold">{data?.driverName}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="m-0 text-muted fw-sbold">
                                Mobile Number :{" "}
                              </p>
                            </td>
                            <td>
                              <p className="m-0 fw-sbold">
                                {data?.driverCountryCode +
                                  data?.driverMobileNumber}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="m-0 text-muted fw-sbold">Email :</p>
                            </td>
                            <td>
                              <p className="m-0 fw-sbold">
                                {data?.driverEmail}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="m-0 text-muted fw-sbold">
                                Rating Received :{" "}
                              </p>
                            </td>
                            <td>
                              <p className="m-0 fw-sbold">
                                {data?.review?.providerRating || "-"}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="8" className="my-2">
              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <Row>
                    <Col lg="12" className="my-2">
                      <div className="top">
                        <h4 className="dashboard-head m-0">Vehicle Details</h4>
                      </div>
                      <div className="service-list border-top">
                        <div className="py-0 table-responsive ">
                          <table className="table common-table">
                            <tbody>
                              <tr>
                                <td>
                                  <p className="m-0 text-muted fw-sbold">
                                    {" "}
                                    Make:
                                  </p>
                                </td>
                                <td>
                                  <p className="m-0 fw-sbold">
                                    {data?.customerVehicleDetails?.make}
                                  </p>
                                </td>

                                <td>
                                  <p className="m-0 text-muted fw-sbold">
                                    {" "}
                                    Model:
                                  </p>
                                </td>
                                <td>
                                  <p className="m-0 fw-sbold">
                                    {data?.customerVehicleDetails?.model}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="m-0 text-muted fw-sbold">
                                    {" "}
                                    Fuel Type:
                                  </p>
                                </td>
                                <td>
                                  <p className="m-0 fw-sbold">
                                    {data?.customerVehicleDetails?.fuelType}
                                  </p>
                                </td>

                                <td>
                                  <p className="m-0 text-muted fw-sbold">
                                    {" "}
                                    Plate Number:
                                  </p>
                                </td>
                                <td>
                                  <p className="m-0 fw-sbold">
                                    {data?.customerVehicleDetails?.plateNumber}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="m-0 text-muted fw-sbold">
                                    {" "}
                                    Color:
                                  </p>
                                </td>
                                <td>
                                  <p className="m-0 fw-sbold">
                                    {data?.customerVehicleDetails?.color}
                                  </p>
                                </td>

                                <td>
                                  <p className="m-0 text-muted fw-sbold">
                                    {" "}
                                    Vehicle Type:
                                  </p>
                                </td>
                                <td>
                                  <p className="m-0 fw-sbold">
                                    {data?.customerVehicleDetails?.vehicleType}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="m-0 text-muted fw-sbold">
                                    {" "}
                                    Vehicle Image:
                                  </p>
                                </td>
                                <td>
                                  <img
                                    src={data?.customerVehicleDetails?.image}
                                    alt=""
                                    className="img-fluid w-80 h-80"
                                  />
                                </td>
                                <td>
                                  <p className="m-0 fw-sbold"></p>
                                </td>
                                <td>
                                  <p className="m-0"></p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <Row>
                    <Col lg="12" className="my-2">
                      <div className="top">
                        <h4 className="dashboard-head m-0">
                          Booking Address Details
                        </h4>
                      </div>
                      <div className="service-list border-top">
                        <div className="py-0 table-responsive ">
                          {data?.serviceCategory === "Towing" ? (
                            <table className="table common-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      Start Address:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.startAddress}
                                    </p>
                                  </td>

                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      End Address:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.endAddress}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      Start Type:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.startAddressType}
                                    </p>
                                  </td>

                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      End Address Type:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.endAddressType}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      Start Address Parking Type:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.startAddressParkingType}
                                    </p>
                                  </td>

                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      End Address Parking Type:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.endAddressParkingType}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      Start Address Parking Notes:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.startAddressParkingNotes || "-"}
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      End Address Parking Notes:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.endAddressParkingNotes || "-"}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          ) : (
                            <table className="table common-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      Address:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.startAddress}
                                    </p>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      Address Type:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.startAddressType}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      Address Parking Type:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.startAddressParkingType}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="m-0 text-muted fw-sbold">
                                      {" "}
                                      Address Parking Notes:
                                    </p>
                                  </td>
                                  <td>
                                    <p className="m-0 fw-sbold">
                                      {data?.startAddressParkingNotes || "-"}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <Row>
                    <Col lg="8" className="my-2">
                      <div className="top">
                        <h4 className="dashboard-head m-0">Service</h4>
                      </div>
                      <div className="service-list border-top">
                        <div className="py-3">
                          <div className="d-flex align-items-start justify-content-between service-wrp">
                            <div className="left d-flex align-items-start ">
                              <div className="img-wrp me-2">
                                <img
                                  src={data?.serviceLogo}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="content">
                                <h6 className="m-0 text-dark pb-1">
                                  {data?.serviceName}
                                </h6>
                                <p className="text-muted m-0 pb-1">
                                  {" "}
                                  {data?.serviceDescription}
                                </p>
                                <p className="text-muted m-0 pb-1">
                                  {" "}
                                  {data?.serviceInstructions}
                                </p>

                                {data?.serviceAddOnId ? (
                                  <div>
                                    <p className="text-muted m-0 pt-1 fw-sbold text-small">
                                      Addon: {data?.serviceAddOnName}
                                    </p>
                                    <p className="text-muted m-0 pb-1">
                                      {" "}
                                      {data?.serviceAddOnDescription}
                                    </p>

                                    <div className="d-flex align-items-start justify-content-between">
                                      <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                        Add On cost:{" "}
                                      </p>
                                      <p className="right d-flex fw-sbold m-0 pb-1">
                                        $ {data?.serviceAddOnCost}
                                      </p>
                                    </div>

                                    {(data?.serviceCategory === "Towing" ||
                                      data?.serviceCategory === "Fuel") && (
                                      <div>
                                        <div className="d-flex align-items-start justify-content-between">
                                          <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                            Distance cost per unit:{" "}
                                          </p>
                                          <p className="right d-flex fw-sbold m-0 pb-1">
                                            $ {data?.serviceAddOnDistanceCost}
                                          </p>
                                        </div>
                                        <div className="d-flex align-items-start justify-content-between">
                                          <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                            Distance:{" "}
                                          </p>
                                          <p className="right d-flex fw-sbold m-0 pb-1">
                                            {data?.distance || 0}
                                          </p>
                                        </div>
                                        <div className="d-flex align-items-start justify-content-between">
                                          <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                            Total Distance Cost:{" "}
                                          </p>
                                          <p className="right d-flex fw-sbold m-0 pb-1">
                                            ${" "}
                                            {data?.distance *
                                              data?.serviceAddOnDistanceCost ||
                                              0}
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div>
                                    <div className="d-flex align-items-start justify-content-between">
                                      <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                        Service cost:{" "}
                                      </p>
                                      <p className="right d-flex fw-sbold m-0 pb-1">
                                        $ {data?.serviceCost}
                                      </p>
                                    </div>

                                    {(data?.serviceCategory === "Towing" ||
                                      data?.serviceCategory === "Fuel") && (
                                      <div>
                                        <div className="d-flex align-items-start justify-content-between">
                                          <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                            Distance cost per unit:{" "}
                                          </p>
                                          <p className="right d-flex fw-sbold m-0 pb-1">
                                            $ {data?.distanceCost}
                                          </p>
                                        </div>
                                        <div className="d-flex align-items-start justify-content-between">
                                          <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                            Distance:{" "}
                                          </p>
                                          <p className="right d-flex fw-sbold m-0 pb-1">
                                            {data?.distance || 0}
                                          </p>
                                        </div>
                                        <div className="d-flex align-items-start justify-content-between">
                                          <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                            Total Distance Cost:{" "}
                                          </p>
                                          <p className="right d-flex fw-sbold m-0 pb-1">
                                            ${" "}
                                            {data?.distance *
                                              data?.distanceCost || 0}
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}

                                <div className="d-flex align-items-start justify-content-between">
                                  <p className="left d-flex align-items-start m-0 pb-1 text-muted fw-sbold">
                                    Total Service cost:{" "}
                                  </p>
                                  <p className="right d-flex fw-sbold m-0 pb-1">
                                    $ {data?.serviceTotal}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* <div className="right">
                              <p className="text-muted m-0">$ {data?.serviceTotal}</p>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg="4" className="my-2">
                      <div className="top">
                        <h4 className="dashboard-head m-0">Bill</h4>
                      </div>
                      <div className="table-responsive py-3">
                        <table className="table common-table">
                          <tbody>
                            <tr>
                              <td className="px-1">
                                <p className="m-0 fw-sbold">Service Total</p>
                              </td>
                              <td className="px-1">
                                <p className="m-0 theme-clr">
                                  $ {data?.serviceTotal}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-1">
                                <p className="m-0 fw-sbold">
                                  Tax and Fees {data?.taxPercent} %{" "}
                                </p>
                              </td>
                              <td className="px-1">
                                <p className="m-0 theme-clr">$ {data?.tax}</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-1">
                                <p className="m-0 fw-sbold">Tip </p>
                              </td>
                              <td className="px-1">
                                <p className="m-0 theme-clr">
                                  $ {data?.tipAmount}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-1">
                                <p className="m-0 fw-sbold">Total Amount</p>
                              </td>
                              <td className="px-1">
                                <p className="m-0 theme-clr">
                                  $ {data?.totalAmount}
                                </p>
                              </td>
                            </tr>

                            {data?.paymentType === "split" && (
                              <tr>
                                <td className="px-1">
                                  <p className="m-0 fw-sbold">
                                    Advance Payment
                                  </p>
                                </td>
                                <td className="px-1">
                                  <p className="m-0 theme-clr">
                                    $ {data?.advancePayment}
                                  </p>
                                </td>
                              </tr>
                            )}
                            {data?.paymentType === "split" && (
                              <tr>
                                <td className="px-1">
                                  <p className="m-0 fw-sbold">
                                    Pending Payment
                                  </p>
                                </td>
                                <td className="px-1">
                                  <p className="m-0 theme-clr">
                                    ${" "}
                                    {data?.status !== "completed"
                                      ? data?.pendingPayment
                                      : 0}
                                  </p>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
        className="refund-pop"
        show={orderStatusshow}
        onHide={orderStatusClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Booking Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label2 m-0 pb-1">
                  Booking Status
                </label>
                {data?.status === "requested" && (
                  <Form.Select
                    aria-label="Default select example"
                    value={bookingStatus}
                    onChange={(e) => handleStatusChange(e)}
                  >
                    <option>Open this select menu</option>
                    <option value="accepted">Accept</option>
                    <option value="rejected">Reject</option>
                    <option value="cancelled">Cancel</option>
                  </Form.Select>
                )}
                {data?.status === "accepted" &&
                  data?.status !== "inRoute" &&
                  data?.status !== "inProgress" && (
                    <Form.Select
                      aria-label="Default select example"
                      value={bookingStatus}
                      onChange={(e) => handleStatusChange(e)}
                    >
                      <option>Open this select menu</option>
                      <option value="cancelled">Cancel</option>
                    </Form.Select>
                  )}
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-2 d-flex align-items-center justify-content-center"
            onClick={changeBookingStatus}
          >
            Submit
          </Button>
          <Button
            className="btn d-flex align-items-center justify-content-center"
            onClick={orderStatusClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default BookingDetailIndex;

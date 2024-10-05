import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
} from "react-bootstrap";
import { editServiceProvider, blockUnblockProvider, updateServiceProviderStatus, getDriversList } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import NoImage from "../../../assest/images/noimage.jpg";
import { toast } from "react-toastify";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../Common/DataTable";

const serviceColumnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "serviceName",
    align: false,
    disablePadding: true,
    label: "Name",
    title: "name",
    order: 1,
  },
  {
    id: "serviceCategory",
    align: false,
    disablePadding: true,
    label: "Category",
    title: "Category",
    order: 1,
  },
  {
    id: "serviceCost",
    align: true,
    disablePadding: false,
    label: "Service Cost",
    title: "serviceCost",
    order: 1,
  },
  {
    id: "distanceCost",
    align: true,
    disablePadding: false,
    label: "Distance Cost",
    title: "distanceCost",
    order: 1,
  },
  {
    id: "addOns",
    align: false,
    disablePadding: true,
    label: "Add Ons",
    title: "addOn",
    type: "addOnCount",
    order: 1,
  },
  {
    id: "action",
    align: true,
    disablePadding: false,
    title: "action",
    label: "Action",
  },
];

const bookingColumnData = [
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
    id: "providerName",
    numeric: false,
    disablePadding: false,
    label: "Provider",
    title: "providerName",
  },
  {
    id: "totalAmount",
    align: true,
    disablePadding: false,
    label: "Cost",
    title: "totalAmount",
    order: 1,
  },
  {
    id: "status",
    align: true,
    disablePadding: false,
    label: "Status",
    title: "status",
    order: 1,
  },
  {
    id: "action",
    align: true,
    disablePadding: false,
    title: "action",
    label: "Action",
  },
];

const driverColumnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "name",
    align: false,
    disablePadding: true,
    label: "Name",
    title: "Name",
    order: 1,
  },
  {
    id: "email",
    align: true,
    disablePadding: false,
    label: "Email",
    title: "Email",
    order: 1,
  },
  {
    id: "mobileNumber",
    numeric: false,
    disablePadding: false,
    label: "Mobile Number",
    title: "Mobile",
  },
  // {
  //   id: "type",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Type",
  //   title: "type",
  //   type: "type",
  // },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    title: "Mobile",
    type: "tag",
  },
  {
    id: "createdAt",
    align: true,
    disablePadding: false,
    label: "Register At	",
    type: "date",
    title: "Date|Time",
    order: 1,
  },
  {
    id: "action",
    align: true,
    disablePadding: false,
    title: "action",
    label: "Action",
  },
];

const ViewSProviderProfile = () => {
  const EditId = location.pathname.split("/")[3];
  const backLink = "/service-provider/profile/" + EditId;
  const dispatch = useDispatch();
  const ServiceProviderData = useSelector((s) => s.ServiceProvider.editServiceProvider?.data);
  const DriverData = useSelector((s) => s.ServiceProvider.drivers?.data);
  const loading = useSelector((s) => s?.ServiceProvider?.loading);

  const [serviceState, setServiceState] = useState({
    columns: serviceColumnData,
    rowsPerPage: 5,
    page: 0,
    order: -1,
    orderBy: "createdAt",
  });

  const [bookingState, setBookingState] = useState({
    columns: bookingColumnData,
    rowsPerPage: 5,
    page: 0,
    order: -1,
    orderBy: "createdAt",
  });

  const [driverState, setDriverState] = useState({
    columns: driverColumnData,
    rowsPerPage: 5,
    page: 0,
    order: -1,
    orderBy: "createdAt",
    agencyId: ""
  });

  const [data, setData] = useState({
    providerId: "",
    createdAt: "",
    name: "",
    address: "",
    status: "",
    email: "",
    avgRating: "",
    mobileNumber: "",
    countryCode: "",
    type: "",
    role:"",
    profileImage: "",
    accountDetails: {},
    totalBookingsCount: 0,
    totalBookingsRevenue: 0,
    driversCount: 0,
    selectedServices: [],
    upcomingBookings: [],
    pastBookings: []
  });

  useEffect(() => {
    if (EditId) {
      dispatch(editServiceProvider(EditId));
    }
    setDriverState((pre) => ({
      ...pre,
      agencyId: EditId
    }));
  }, [EditId]);

  useEffect(() => {
    if (data?.type === "agency") {
      let body = {
        orderBy: driverState?.orderBy,
        order: driverState?.order,
        page: parseInt(driverState?.page) + 1,
        limit: driverState?.rowsPerPage,
        agencyId: driverState?.agencyId
      };
      dispatch(getDriversList(body));
    }
  }, [data?.type]);


  useEffect(() => {
    setData((pre) => ({
      ...pre,
      providerId: ServiceProviderData?._id,
      createdAt: ServiceProviderData?.createdAt,
      name: ServiceProviderData?.name,
      address: ServiceProviderData?.address,
      status: ServiceProviderData?.status,
      email: ServiceProviderData?.email,
      type: ServiceProviderData?.type,
      role: ServiceProviderData?.type,
      avgRating: ServiceProviderData?.avgRating,
      mobileNumber: ServiceProviderData?.mobileNumber,
      countryCode: ServiceProviderData?.countryCode,
      profileImage: ServiceProviderData?.profileImage,
      accountDetails: ServiceProviderData?.accountDetails,
      totalBookingsCount: ServiceProviderData?.totalBookingsCount,
      totalBookingsRevenue: ServiceProviderData?.totalBookingsRevenue,
      driversCount: ServiceProviderData?.driversCount,
      selectedServices: ServiceProviderData?.selectedServices,
      upcomingBookings: ServiceProviderData?.upcomingBookings,
      pastBookings: ServiceProviderData?.pastBookings,
      documentsList: [
        {
          type: "Licence",
          number: ServiceProviderData?.documentsList?.[0]?.number,
          image: ServiceProviderData?.documentsList?.[0]?.image,
          date: ServiceProviderData?.documentsList?.[0]?.date,
        },
        {
          type: "Background Check",
          number: ServiceProviderData?.documentsList?.[1]?.number,
          image: ServiceProviderData?.documentsList?.[1]?.image,
          date: ServiceProviderData?.documentsList?.[1]?.date,
        },
        {
          type: "Work Eligibility",
          number: ServiceProviderData?.documentsList?.[2]?.number,
          image: ServiceProviderData?.documentsList?.[2]?.image,
          date: ServiceProviderData?.documentsList?.[2]?.date,
        },
        {
          type: "Date of Birth",
          number: ServiceProviderData?.documentsList?.[3]?.number,
          image: ServiceProviderData?.documentsList?.[3]?.image,
          date: ServiceProviderData?.documentsList?.[3]?.date,
        },
      ],
    }));
  }, [ServiceProviderData]);



  const Block_unblock_User = (status) => {
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);

        setData((pre) => ({
          ...pre,
          status: response?.data?.status
        }));

        // dispatch(editServiceProvider(id));
      } else {
        toast.error(response.message);
      }
    };

    dispatch(
      blockUnblockProvider(
        { providerId: data.providerId, status: status },
        callBack
      )
    );
  };

  const Approve_Reject_User = (status) => {
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        console.log("data", data, response?.data?.status);
        setData((pre) => ({
          ...pre,
          status: response?.data?.status
        }));
      } else {
        toast.error(response.message);
      }
    };
    dispatch(updateServiceProviderStatus({ providerId: data?.providerId, status: status }, callBack));
  };

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/service-provider">Service Provider</Breadcrumb.Item>
                  <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>

            <Col lg="4" className="my-2">
              <div className="py-2">
                <div className="bg-white card-box pb-3 rounded">
                  <div className="cover-profile-wrp position-relative ">
                    <div
                      className="cover-profile position-relative text-end rounded"
                      style={{
                        backgroundColor: "#34c38f40",
                      }}
                    >
                      <img
                        src="../assets/images/cover-vector.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="px-3 d-flex align-items-center profile-view">
                      <div className="img-wrp me-2 rounded-circle p-1">
                        <img
                          src={
                            data?.profileImage
                              ? data?.profileImage
                              : "/assets/images/dummy-profile"
                          }
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="content">
                        <h6 className="m-0 fw-sbold">{data?.name}</h6>
                      </div>
                    </div>
                  </div>
                  <ul className="list-unstyled px-3 mb-0 d-flex align-items-center justify-content-between py-2 profile-featured">
                    <li className="px-2 w-33">
                      <h4 className="m-0 pb-1">
                        {" "}
                        {moment(data?.createdAt).format("DD-MM-YYYY")}
                      </h4>
                      <p className="text-muted m-0 py-1">Member Since</p>
                    </li>
                    <li className="px-2 text-center w-33">
                      <h4 className="m-0 pb-1">
                        {" "}
                        {data?.status?.toUpperCase()}
                      </h4>
                      <p className="text-muted m-0 py-1">Status</p>
                    </li>
                    <li className="px-2 text-end w-33">
                      <h4 className="m-0 pb-1">
                        <span className="me-2 icn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10 15.2292L6.54166 17.3125C6.38889 17.4097 6.22916 17.4514 6.0625 17.4375C5.89583 17.4236 5.75 17.3681 5.625 17.2708C5.5 17.1736 5.40278 17.0522 5.33333 16.9067C5.26389 16.7606 5.25 16.5972 5.29166 16.4167L6.20833 12.4792L3.14583 9.83333C3.00694 9.70833 2.92028 9.56583 2.88583 9.40583C2.85083 9.24639 2.86111 9.09028 2.91666 8.9375C2.97222 8.78472 3.05555 8.65972 3.16666 8.5625C3.27778 8.46528 3.43055 8.40278 3.625 8.375L7.66666 8.02083L9.22916 4.3125C9.29861 4.14583 9.40639 4.02083 9.5525 3.9375C9.69805 3.85417 9.84722 3.8125 10 3.8125C10.1528 3.8125 10.3022 3.85417 10.4483 3.9375C10.5939 4.02083 10.7014 4.14583 10.7708 4.3125L12.3333 8.02083L16.375 8.375C16.5694 8.40278 16.7222 8.46528 16.8333 8.5625C16.9444 8.65972 17.0278 8.78472 17.0833 8.9375C17.1389 9.09028 17.1494 9.24639 17.115 9.40583C17.08 9.56583 16.9931 9.70833 16.8542 9.83333L13.7917 12.4792L14.7083 16.4167C14.75 16.5972 14.7361 16.7606 14.6667 16.9067C14.5972 17.0522 14.5 17.1736 14.375 17.2708C14.25 17.3681 14.1042 17.4236 13.9375 17.4375C13.7708 17.4514 13.6111 17.4097 13.4583 17.3125L10 15.2292Z"
                              fill="#FABC3C"
                            />
                          </svg>
                        </span>
                        {data?.avgRating}/5
                      </h4>
                      <p className="text-muted m-0 py-1">Rating</p>
                    </li>
                  </ul>
                  <div className="py-2 px-3">
                    {data?.status == "created" && (
                      <div>
                        <Button
                          onClick={(e) => Approve_Reject_User("approved")}
                          variant="success"
                          className="small-btn"
                        >
                          Approve
                        </Button>

                        <Button
                          onClick={(e) => Approve_Reject_User("rejected")}
                          variant="danger"
                          className="small-btn mx-2"
                        >
                          Reject
                        </Button>
                      </div>

                    )}

                    {data?.status == "approved" && (
                      <Button
                        onClick={(e) => Block_unblock_User("blocked")}
                        variant="danger"
                        className="small-btn"
                      >
                        Block
                      </Button>
                    )}

                    {data?.status == "blocked" && (
                      <Button
                        onClick={(e) => Block_unblock_User("active")}
                        variant="success"
                        className="small-btn"
                      >
                        UnBlock
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top d-flex align-items-start justify-content-between">
                    <h4 className="dashboard-head m-0">Personal Information</h4>
                    {/* <Link
                      to={`/service-provider/edit/${EditId}`}
                      className="common-btn small-btn px-2 d-inline-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M11.2583 5.20624L8.77917 2.75624L9.59583 1.93957C9.81944 1.71596 10.0942 1.60416 10.4201 1.60416C10.7456 1.60416 11.0201 1.71596 11.2437 1.93957L12.0604 2.75624C12.284 2.97985 12.4007 3.24974 12.4104 3.56591C12.4201 3.88168 12.3132 4.15138 12.0896 4.37499L11.2583 5.20624ZM10.4125 6.06666L4.22917 12.25H1.75V9.77082L7.93333 3.58749L10.4125 6.06666Z"
                          fill="white"
                        />
                      </svg>
                    </Link> */}
                  </div>
                  <div className="table-responsive py-3">
                    <table className="table common-table">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Full Name :</p>
                          </td>
                          <td>
                            <p className="m-0"> {data?.name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Mobile Number : </p>
                          </td>
                          <td>
                            <p className="m-0">
                              {" "}
                              {data?.countryCode + " " + data?.mobileNumber}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Email :</p>
                          </td>
                          <td>
                            <p className="m-0">{data?.email}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Address :</p>
                          </td>
                          <td>
                            <p className="m-0">{data?.address}</p>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Type :</p>
                          </td>
                          <td>
                            <p className="m-0">{data?.type?.charAt(0).toUpperCase() + data?.type?.slice(1)}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="py-2 overscroll">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top d-flex align-items-center justify-content-between">
                    <h4 className="dashboard-head m-0">KYC Documents</h4>
                    {/* <Button type="button" className="common-btn2 small-btn px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M11.2583 5.20624L8.77917 2.75624L9.59583 1.93957C9.81944 1.71596 10.0942 1.60416 10.4201 1.60416C10.7456 1.60416 11.0201 1.71596 11.2437 1.93957L12.0604 2.75624C12.284 2.97985 12.4007 3.24974 12.4104 3.56591C12.4201 3.88168 12.3132 4.15138 12.0896 4.37499L11.2583 5.20624ZM10.4125 6.06666L4.22917 12.25H1.75V9.77082L7.93333 3.58749L10.4125 6.06666Z"
                          fill="white"
                        />
                      </svg>
                    </Button> */}
                  </div>

                  <div className="mt-3 card-box2 text-center card-height" >
                    <table className="table common-table  p-1">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Licence Number:</p>
                          </td>
                          <td>
                            <p className="m-0">{data?.documentsList?.[0]?.number || "--"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Expiry Date: </p>
                          </td>
                          <td>
                            <p className="m-0">
                              {" "}
                              {data?.documentsList?.[0]?.date || "--"}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Image :</p>
                          </td>
                          <td>
                            <img
                              src={
                                data?.documentsList?.[0]?.image
                                  ? data?.documentsList?.[0]?.image
                                  : NoImage
                              }
                              alt=""
                              className="img-fluid w-80 h-80"
                            />
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 card-box2 text-center card-height" >
                    <table className="table common-table  p-1">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Background Check Number:</p>
                          </td>
                          <td>
                            <p className="m-0">{data?.documentsList?.[1]?.number || "--"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Expiry Date: </p>
                          </td>
                          <td>
                            <p className="m-0">
                              {" "}
                              {data?.documentsList?.[1]?.date || "--"}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Image :</p>
                          </td>
                          <td>
                            <img
                              src={
                                data?.documentsList?.[1]?.image
                                  ? data?.documentsList?.[1]?.image
                                  : NoImage
                              }
                              alt=""
                              className="img-fluid w-80 h-80"
                            />
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 card-box2 text-center card-height" >
                    <table className="table common-table  p-1">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Work Eligibility Number:</p>
                          </td>
                          <td>
                            <p className="m-0">{data?.documentsList?.[2]?.number || "--"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Expiry Date: </p>
                          </td>
                          <td>
                            <p className="m-0">
                              {" "}
                              {data?.documentsList?.[2]?.date || "--"}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Image :</p>
                          </td>
                          <td>
                            <img
                              src={
                                data?.documentsList?.[2]?.image
                                  ? data?.documentsList?.[2]?.image
                                  : NoImage
                              }
                              alt=""
                              className="img-fluid w-80 h-80"
                            />
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 card-box2 text-center card-height" >
                    <table className="table common-table  p-1">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Date Of Birth Number:</p>
                          </td>
                          <td>
                            <p className="m-0">{data?.documentsList?.[3]?.number || "--"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Date Of Birth: </p>
                          </td>
                          <td>
                            <p className="m-0">
                              {" "}
                              {data?.documentsList?.[3]?.date || "--"}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Image :</p>
                          </td>
                          <td>
                            <img
                              src={
                                data?.documentsList?.[3]?.image
                                  ? data?.documentsList?.[3]?.image
                                  : NoImage
                              }
                              alt=""
                              className="img-fluid w-80 h-80"
                            />
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top d-flex align-items-center justify-content-between">
                    <h4 className="dashboard-head m-0">Bank Account</h4>
                    {/* <Button type="button" className="common-btn2 small-btn px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M11.2583 5.20624L8.77917 2.75624L9.59583 1.93957C9.81944 1.71596 10.0942 1.60416 10.4201 1.60416C10.7456 1.60416 11.0201 1.71596 11.2437 1.93957L12.0604 2.75624C12.284 2.97985 12.4007 3.24974 12.4104 3.56591C12.4201 3.88168 12.3132 4.15138 12.0896 4.37499L11.2583 5.20624ZM10.4125 6.06666L4.22917 12.25H1.75V9.77082L7.93333 3.58749L10.4125 6.06666Z"
                          fill="white"
                        />
                      </svg>
                    </Button> */}
                  </div>
                  <div className="table-responsive py-3">
                    <table className="table common-table">
                      <tbody>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold"> Bank Name :</p>
                          </td>
                          <td>
                            <p className="m-0"> {data?.accountDetails?.bankName || "--"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Account Holder Name : </p>
                          </td>
                          <td>
                            <p className="m-0"> {data?.accountDetails?.accountHolderName || "--"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">
                              Bank Account Number :
                            </p>
                          </td>
                          <td>
                            <p className="m-0">{data?.accountDetails?.accountNumber || "--"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Sort Code :</p>
                          </td>
                          <td>
                            <p className="m-0">{data?.accountDetails?.sortNumber || "--"}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="8" className="my-2">
              {data?.type === "individual" ? (
                <Row className="py-2">
                  <Col lg="6" sm="6" className="my-2">
                    <div className="bg-white px-4 py-3 card-box rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="left">
                          <p className="mb-2 text-muted">Booking</p>
                          <h5 className=" m-0 pt-2">{data?.totalBookingsCount}</h5>
                        </div>
                        <div className="right">
                          <div className="animated-icn position-relative rounded-circle d-flex align-items-center justify-content-center">
                            <span className="icn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M21 3.75V17.25C21 17.4489 20.921 17.6397 20.7803 17.7803C20.6397 17.921 20.4489 18 20.25 18C20.0511 18 19.8603 17.921 19.7197 17.7803C19.579 17.6397 19.5 17.4489 19.5 17.25V4.5H6.75C6.55109 4.5 6.36032 4.42098 6.21967 4.28033C6.07902 4.13968 6 3.94891 6 3.75C6 3.55109 6.07902 3.36032 6.21967 3.21967C6.36032 3.07902 6.55109 3 6.75 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75ZM17.25 6H3.75C3.55109 6 3.36032 6.07902 3.21967 6.21967C3.07902 6.36032 3 6.55109 3 6.75V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H17.25C17.4489 21 17.6397 20.921 17.7803 20.7803C17.921 20.6397 18 20.4489 18 20.25V6.75C18 6.55109 17.921 6.36032 17.7803 6.21967C17.6397 6.07902 17.4489 6 17.25 6Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" sm="6" className="my-2">
                    <div className="bg-white px-4 py-3 card-box rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="left">
                          <p className="mb-2 text-muted">Revenue</p>
                          <h5 className=" m-0 pt-2">$ {data?.totalBookingsRevenue?.toFixed(2)}</h5>
                        </div>
                        <div className="right">
                          <div className="animated-icn position-relative rounded-circle d-flex align-items-center justify-content-center">
                            <span className="icn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_2_2)">
                                  <path
                                    d="M0.88031 0.914062V4.64794C2.97487 4.90959 4.70142 5.81822 6.34861 6.85837L5.18845 7.79883L9.95953 10.2319L8.64984 4.99219L7.43554 5.97656C6.4875 4.10109 5.43033 2.33297 4.02539 0.914062H0.88031ZM13.8823 0.914062C13.1499 2.26242 12.5132 3.63872 11.9239 5.04637L10.5087 4.74609L11.7247 10.0078L14.8681 5.67188L13.481 5.3775C15.0414 3.74873 16.6496 2.1997 18.5464 0.914062H13.8823ZM23.1401 5.313C21.3594 5.42934 19.7632 6.23536 18.2168 7.23047L17.6323 5.70563L13.8794 9.58889L19.2276 9.86719L18.6065 8.24705C20.1177 8.20327 21.6289 8.33269 23.1401 9.249V5.313V5.313ZM14.045 11.3144C13.7975 11.32 13.5664 11.4277 13.251 11.7642L12.9434 12.0908L12.624 11.7758C12.2777 11.4345 12.0045 11.3403 11.7275 11.3525C11.4506 11.3647 11.1249 11.5103 10.7607 11.8051L10.4692 12.0409L10.1924 11.789C9.77522 11.4116 9.41967 11.2997 9.07912 11.3173C8.83125 11.3302 8.57404 11.4235 8.3174 11.5868L10.2378 15.041C10.9622 15.484 12.4425 15.6507 13.4604 15.1377L15.3164 11.6997C14.9644 11.5561 14.648 11.409 14.3745 11.3525C14.2755 11.332 14.1836 11.3171 14.0947 11.3144C14.0781 11.314 14.0615 11.314 14.045 11.3144V11.3144ZM9.82762 15.8233C8.98223 16.4206 8.30344 17.4507 8.04051 18.9595C7.78575 20.4218 8.18714 21.4094 8.89748 22.0825C9.60787 22.7556 10.6741 23.1014 11.7569 23.0873C12.8397 23.0733 13.9195 22.6978 14.6455 22.0122C15.3716 21.3266 15.7822 20.3516 15.5494 18.9565C15.3086 17.5148 14.6869 16.5121 13.8998 15.9053C12.5647 16.611 10.8954 16.461 9.82762 15.8232V15.8233Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_2_2">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              ) : (
                <Row className="py-2">
                  <Col lg="4" sm="6" className="my-2">
                    <div className="bg-white px-4 py-3 card-box rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="left">
                          <p className="mb-2 text-muted">Booking</p>
                          <h5 className=" m-0 pt-2">{data?.totalBookingsCount}</h5>
                        </div>
                        <div className="right">
                          <div className="animated-icn position-relative rounded-circle d-flex align-items-center justify-content-center">
                            <span className="icn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M21 3.75V17.25C21 17.4489 20.921 17.6397 20.7803 17.7803C20.6397 17.921 20.4489 18 20.25 18C20.0511 18 19.8603 17.921 19.7197 17.7803C19.579 17.6397 19.5 17.4489 19.5 17.25V4.5H6.75C6.55109 4.5 6.36032 4.42098 6.21967 4.28033C6.07902 4.13968 6 3.94891 6 3.75C6 3.55109 6.07902 3.36032 6.21967 3.21967C6.36032 3.07902 6.55109 3 6.75 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75ZM17.25 6H3.75C3.55109 6 3.36032 6.07902 3.21967 6.21967C3.07902 6.36032 3 6.55109 3 6.75V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H17.25C17.4489 21 17.6397 20.921 17.7803 20.7803C17.921 20.6397 18 20.4489 18 20.25V6.75C18 6.55109 17.921 6.36032 17.7803 6.21967C17.6397 6.07902 17.4489 6 17.25 6Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" sm="6" className="my-2">
                    <div className="bg-white px-4 py-3 card-box rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="left">
                          <p className="mb-2 text-muted">Revenue</p>
                          <h5 className=" m-0 pt-2">$ {data?.totalBookingsRevenue?.toFixed(2)}</h5>
                        </div>
                        <div className="right">
                          <div className="animated-icn position-relative rounded-circle d-flex align-items-center justify-content-center">
                            <span className="icn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_2_2)">
                                  <path
                                    d="M0.88031 0.914062V4.64794C2.97487 4.90959 4.70142 5.81822 6.34861 6.85837L5.18845 7.79883L9.95953 10.2319L8.64984 4.99219L7.43554 5.97656C6.4875 4.10109 5.43033 2.33297 4.02539 0.914062H0.88031ZM13.8823 0.914062C13.1499 2.26242 12.5132 3.63872 11.9239 5.04637L10.5087 4.74609L11.7247 10.0078L14.8681 5.67188L13.481 5.3775C15.0414 3.74873 16.6496 2.1997 18.5464 0.914062H13.8823ZM23.1401 5.313C21.3594 5.42934 19.7632 6.23536 18.2168 7.23047L17.6323 5.70563L13.8794 9.58889L19.2276 9.86719L18.6065 8.24705C20.1177 8.20327 21.6289 8.33269 23.1401 9.249V5.313V5.313ZM14.045 11.3144C13.7975 11.32 13.5664 11.4277 13.251 11.7642L12.9434 12.0908L12.624 11.7758C12.2777 11.4345 12.0045 11.3403 11.7275 11.3525C11.4506 11.3647 11.1249 11.5103 10.7607 11.8051L10.4692 12.0409L10.1924 11.789C9.77522 11.4116 9.41967 11.2997 9.07912 11.3173C8.83125 11.3302 8.57404 11.4235 8.3174 11.5868L10.2378 15.041C10.9622 15.484 12.4425 15.6507 13.4604 15.1377L15.3164 11.6997C14.9644 11.5561 14.648 11.409 14.3745 11.3525C14.2755 11.332 14.1836 11.3171 14.0947 11.3144C14.0781 11.314 14.0615 11.314 14.045 11.3144V11.3144ZM9.82762 15.8233C8.98223 16.4206 8.30344 17.4507 8.04051 18.9595C7.78575 20.4218 8.18714 21.4094 8.89748 22.0825C9.60787 22.7556 10.6741 23.1014 11.7569 23.0873C12.8397 23.0733 13.9195 22.6978 14.6455 22.0122C15.3716 21.3266 15.7822 20.3516 15.5494 18.9565C15.3086 17.5148 14.6869 16.5121 13.8998 15.9053C12.5647 16.611 10.8954 16.461 9.82762 15.8232V15.8233Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_2_2">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" sm="6" className="my-2">
                    <div className="bg-white px-4 py-3 card-box rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="left">
                          <p className="mb-2 text-muted">Drivers</p>
                          <h5 className=" m-0 pt-2">{data?.driversCount}</h5>
                        </div>
                        <div className="right">
                          <div className="animated-icn position-relative rounded-circle d-flex align-items-center justify-content-center">
                            <span className="icn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M21 3.75V17.25C21 17.4489 20.921 17.6397 20.7803 17.7803C20.6397 17.921 20.4489 18 20.25 18C20.0511 18 19.8603 17.921 19.7197 17.7803C19.579 17.6397 19.5 17.4489 19.5 17.25V4.5H6.75C6.55109 4.5 6.36032 4.42098 6.21967 4.28033C6.07902 4.13968 6 3.94891 6 3.75C6 3.55109 6.07902 3.36032 6.21967 3.21967C6.36032 3.07902 6.55109 3 6.75 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75ZM17.25 6H3.75C3.55109 6 3.36032 6.07902 3.21967 6.21967C3.07902 6.36032 3 6.55109 3 6.75V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H17.25C17.4489 21 17.6397 20.921 17.7803 20.7803C17.921 20.6397 18 20.4489 18 20.25V6.75C18 6.55109 17.921 6.36032 17.7803 6.21967C17.6397 6.07902 17.4489 6 17.25 6Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top">
                    <h4 className="dashboard-head m-0">Services</h4>
                  </div>
                  <div className="table-responsive py-3">
                    <DataTable>
                      <DataTableHead
                        columns={serviceColumnData}
                        orderBy={serviceState.orderBy}
                      // sort={this.handleRequestSort}
                      />
                      <DataTableBody
                        loading={loading}
                        column={serviceColumnData}
                        data={data?.selectedServices}
                        page={serviceState.page}
                        rowsPerPage={serviceState.rowsPerPage}
                        actionBtn={[
                          {
                            label: "View",
                            icon: "",
                            link: "/service-provider/service",
                            backUrl: { backLink },
                            serviceData: data?.selectedServices
                          }
                        ]}
                      />
                    </DataTable>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top">
                    <h4 className="dashboard-head m-0">Upcoming Bookings</h4>
                  </div>
                  <div className="table-responsive py-3">
                    <DataTable>
                      <DataTableHead
                        columns={bookingColumnData}
                        orderBy={bookingState.orderBy}
                      // sort={this.handleRequestSort}
                      />
                      <DataTableBody
                        loading={loading}
                        column={bookingColumnData}
                        data={data?.upcomingBookings}
                        page={bookingState.page}
                        rowsPerPage={bookingState.rowsPerPage}
                        actionBtn={[
                          {
                            label: "View",
                            icon: "",
                            link: "/bookings/booking-detail",
                            backUrl: { backLink }
                          },
                        ]}
                      />
                    </DataTable>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top">
                    <h4 className="dashboard-head m-0">Past Bookings</h4>
                  </div>
                  <div className="table-responsive py-3">
                    <DataTable>
                      <DataTableHead
                        columns={bookingColumnData}
                        orderBy={bookingState.orderBy}
                      // sort={this.handleRequestSort}
                      />
                      <DataTableBody
                        loading={loading}
                        column={bookingColumnData}
                        data={data?.pastBookings}
                        page={bookingState.page}
                        rowsPerPage={bookingState.rowsPerPage}
                        actionBtn={[
                          {
                            label: "View",
                            icon: "",
                            link: "/bookings/booking-detail",
                            backUrl: { backLink }
                          },
                        ]}
                      />
                    </DataTable>
                  </div>
                </div>
              </div>

              {data.type === "agency" && (
                <div className="py-2">
                  <div className="bg-white px-4 py-3 card-box rounded">
                    <div className="top">
                      <h4 className="dashboard-head m-0">Drivers</h4>
                    </div>
                    <div className="table-responsive py-3">
                      <DataTable>
                        <DataTableHead
                          columns={driverColumnData}
                          orderBy={driverState.orderBy}
                        // sort={this.handleRequestSort}
                        />
                        <DataTableBody
                          loading={loading}
                          column={driverColumnData}
                          data={DriverData}
                          page={driverState.page}
                          rowsPerPage={driverState.rowsPerPage}
                          actionBtn={[
                            {
                              label: "View",
                              icon: "",
                              link: "/service-provider/profile",
                            }
                          ]}
                        />
                      </DataTable>
                    </div>
                  </div>
                </div>
              )}

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ViewSProviderProfile;

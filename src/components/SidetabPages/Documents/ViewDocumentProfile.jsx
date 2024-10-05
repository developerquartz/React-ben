import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  Modal,
} from "react-bootstrap";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { blockUnblockUser, editCustomer } from "../../../store/actions";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
} from "../../../Common/DataTable";

import NoImage from "../../../assest/images/noimage.jpg";

const addressColumnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "addressType",
    align: false,
    disablePadding: true,
    label: "Type",
    title: "addressType",
    order: 1,
  },

  {
    id: "houseNo",
    numeric: false,
    disablePadding: false,
    label: "House No",
    title: "houseNo",
  },
  {
    id: "address",
    align: true,
    disablePadding: false,
    label: "Address",
    title: "address",
    order: 1,
  },
  {
    id: "area",
    align: true,
    disablePadding: false,
    label: "Area",
    title: "area",
    order: 1,
  },
  {
    id: "landmark",
    align: true,
    disablePadding: false,
    label: "Landmark",
    title: "landmark",
    order: 1,
  },
  // {
  //   id: "action",
  //   align: true,
  //   disablePadding: false,
  //   title: "action",
  //   label: "Action",
  // },
];

const vehicleColumnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "make",
    align: false,
    disablePadding: true,
    label: "Make",
    title: "make",
    order: 1,
  },

  {
    id: "model",
    numeric: false,
    disablePadding: false,
    label: "Model",
    title: "model",
  },
  {
    id: "plateNumber",
    align: true,
    disablePadding: false,
    label: "Plate Number",
    title: "plateNumber",
    order: 1,
  },
  {
    id: "color",
    align: true,
    disablePadding: false,
    label: "Color",
    title: "color",
    order: 1,
  },
  {
    id: "fuelType",
    align: true,
    disablePadding: false,
    label: "Fuel Type",
    title: "fuelType",
    order: 1,
  },
  {
    id: "vehicleType",
    align: true,
    disablePadding: false,
    label: "Vehicle Type",
    title: "vehicleType",
    order: 1,
  },
  // {
  //   id: "action",
  //   align: true,
  //   disablePadding: false,
  //   title: "action",
  //   label: "Action",
  // },
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

const ViewDocumentProfile = () => {
  const dispatch = useDispatch();
  const id = location.pathname.split("/")[3];
  const backLink = "/customers/profile/" + id;

  const [deleteAddressShow, deleteAddressSetShow] = useState(false);
  const [deleteVehicleShow, deleteVehicleSetShow] = useState(false);

  const userData = useSelector((s) => s?.Customers?.edituser?.data);
  const loading = useSelector((s) => s?.Customers?.loading);

  const [addressState, setAddressState] = useState({
    columns: addressColumnData,
    rowsPerPage: 5,
    page: 0,
    order: -1,
    orderBy: "createdAt",
  });

  const [vehicleState, setVehicleState] = useState({
    columns: vehicleColumnData,
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

  const [data, setData] = useState({
    customerId: "",
    userName: "",
    email: "",
    mobileNumber: "",
    profileImage: "",
    status: "",
    createdAt: "",
    avgRating: "",
    countryCode: "",
    fullName: "",
    totalBookingsCount: 0,
    totalBookingsRevenue: 0,
    addresses: [],
    upcomingBookings: [],
    pastBookings: [],
    vehicles: [],
  });

  const [DeleteAddress, setDeleteAddress] = useState({
    open: false,
    dumpId: "",
  });

  const [DeleteVehicle, setDeleteVehicle] = useState({
    open: false,
    dumpId: "",
  });

  useEffect(() => {
    setData((pre) => ({
      ...pre,
      userName: userData?.name ? userData?.name : "--",
      email: userData?.email ? userData.email : "--",
      mobileNumber: userData?.mobileNumber,
      profileImage: userData?.profileImage,
      status: userData?.status,
      createdAt: userData?.createdAt,
      avgRating: userData?.avgRating,
      countryCode: userData?.countryCode,
      totalBookingsCount: userData?.totalBookingsCount,
      totalBookingsRevenue: userData?.totalBookingsRevenue,
      addresses: userData?.addresses,
      upcomingBookings: userData?.upcomingBookings,
      pastBookings: userData?.pastBookings,
      vehicles: userData?.vehicles,
    }));
  }, [userData]);

  useEffect(() => {
    if (id) {
      dispatch(editCustomer(id));
    }

    setData((pre) => ({
      ...pre,
      customerId: id,
    }));
  }, [id]);

  const Block_unblock_User = (status) => {
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        dispatch(editCustomer(id));
      } else {
        toast.error(response.message);
      }
    };

    dispatch(
      blockUnblockUser(
        { customerId: data.customerId, status: status },
        callBack
      )
    );
  };

  const DeleteAddressPopup = (addressState, id = "") => {
    setDeleteAddress((pre) => ({
      ...pre,
      open: addressState,
      dumpId: id,
    }));
  };

  const handleAddressDelete = () => {
    const callBack = (response) => {
      // console.log(response, "response");
      if (response.status == "success") {
        toast.success(response.message);
        setDelete(false);
        dispatch();
      } else {
        toast.error(response.message);
      }
    };
    // dispatch(deleteAddress(Delete.dumpId, callBack));
  };

  const DeleteVehiclePopup = (vehicleState, id = "") => {
    setDeleteAddress((pre) => ({
      ...pre,
      open: vehicleState,
      dumpId: id,
    }));
  };

  const handleVehicleDelete = () => {
    const callBack = (response) => {
      // console.log(response, "response");
      if (response.status == "success") {
        toast.success(response.message);
        setDelete(false);
        dispatch();
      } else {
        toast.error(response.message);
      }
    };
    // dispatch(deleteAddress(Delete.dumpId, callBack));
  };

  const deleteAddressClose = () => deleteAddressSetShow(false);
  const deleteAddressShowPop = () => deleteAddressSetShow(true);

  const deleteVehicleClose = () => deleteVehicleSetShow(false);
  const deleteVehicleShowPop = () => deleteVehicleSetShow(true);
  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/customers">Customers</Breadcrumb.Item>
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
                        src="/assets/images/cover-vector.png"
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
                        <h6 className="m-0 fw-sbold">{data?.userName}</h6>
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
                        {data?.status == "blocked" ? "Blocked" : "Active"}
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
                        {data?.avgRating}{" "}
                      </h4>
                      <p className="text-muted m-0 py-1">Rating</p>
                    </li>
                  </ul>
                  <div className="py-2 px-3">
                    {data?.status == "active" ? (
                      <Button
                        onClick={(e) => Block_unblock_User("blocked")}
                        variant="danger"
                        className="small-btn"
                      >
                        Block
                      </Button>
                    ) : (
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
                      to={`/customers/edit/${id}`}
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
                            <p className="m-0"> {data?.userName}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Mobile Number : </p>
                          </td>
                          <td>
                            <p className="m-0">
                              {data?.countryCode + " " + data?.mobileNumber}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Email :</p>
                          </td>
                          <td>
                            <p className="m-0">{userData?.email}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="m-0 fw-sbold">Wallet Amount :</p>
                          </td>
                          <td>
                            <p className="m-0">
                              $ {userData?.walletDetails?.balance || 0}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          {/* <td>
                            <p className="m-0 fw-sbold">Loyalty Points :</p>
                          </td>
                          <td>
                            <p className="m-0">0 = $0</p>
                          </td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="8" className="my-2">
              <Row className="py-2">
                <Col lg="6" sm="6" className="my-2">
                  <div className="bg-white px-4 py-3 card-box rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="left">
                        <p className="mb-2 text-muted">Booking</p>
                        <h5 className=" m-0 pt-2">
                          {userData?.totalBookingsCount}
                        </h5>
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
                        <h5 className=" m-0 pt-2">
                          ${userData?.totalBookingsRevenue?.toFixed(2)}
                        </h5>
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

              <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top d-flex align-items-start justify-content-between">
                    <h4 className="dashboard-head m-0">Addresses</h4>
                    {/* <Button type="button" className="common-btn small-btn px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.99999 14.1667C10.2361 14.1667 10.4342 14.0867 10.5942 13.9267C10.7536 13.7672 10.8333 13.5694 10.8333 13.3333V10.8333H13.3542C13.5903 10.8333 13.7847 10.7533 13.9375 10.5933C14.0903 10.4339 14.1667 10.2361 14.1667 10C14.1667 9.76389 14.0867 9.56583 13.9267 9.40583C13.7672 9.24639 13.5694 9.16666 13.3333 9.16666H10.8333V6.64583C10.8333 6.40972 10.7536 6.21528 10.5942 6.0625C10.4342 5.90972 10.2361 5.83333 9.99999 5.83333C9.76388 5.83333 9.5661 5.91305 9.40666 6.0725C9.24666 6.2325 9.16666 6.43055 9.16666 6.66666V9.16666H6.64582C6.40971 9.16666 6.21527 9.24639 6.06249 9.40583C5.90971 9.56583 5.83332 9.76389 5.83332 10C5.83332 10.2361 5.91305 10.4339 6.07249 10.5933C6.23249 10.7533 6.43055 10.8333 6.66666 10.8333H9.16666V13.3542C9.16666 13.5903 9.24666 13.7847 9.40666 13.9375C9.5661 14.0903 9.76388 14.1667 9.99999 14.1667V14.1667ZM9.99999 18.3333C8.84721 18.3333 7.76388 18.1144 6.74999 17.6767C5.7361 17.2394 4.85416 16.6458 4.10416 15.8958C3.35416 15.1458 2.76055 14.2639 2.32332 13.25C1.88555 12.2361 1.66666 11.1528 1.66666 10C1.66666 8.84722 1.88555 7.76389 2.32332 6.75C2.76055 5.73611 3.35416 4.85416 4.10416 4.10416C4.85416 3.35416 5.7361 2.76028 6.74999 2.3225C7.76388 1.88528 8.84721 1.66666 9.99999 1.66666C11.1528 1.66666 12.2361 1.88528 13.25 2.3225C14.2639 2.76028 15.1458 3.35416 15.8958 4.10416C16.6458 4.85416 17.2394 5.73611 17.6767 6.75C18.1144 7.76389 18.3333 8.84722 18.3333 10C18.3333 11.1528 18.1144 12.2361 17.6767 13.25C17.2394 14.2639 16.6458 15.1458 15.8958 15.8958C15.1458 16.6458 14.2639 17.2394 13.25 17.6767C12.2361 18.1144 11.1528 18.3333 9.99999 18.3333ZM9.99999 16.6667C11.8472 16.6667 13.4203 16.0175 14.7192 14.7192C16.0175 13.4203 16.6667 11.8472 16.6667 10C16.6667 8.15278 16.0175 6.57972 14.7192 5.28083C13.4203 3.9825 11.8472 3.33333 9.99999 3.33333C8.15277 3.33333 6.57999 3.9825 5.28166 5.28083C3.98277 6.57972 3.33332 8.15278 3.33332 10C3.33332 11.8472 3.98277 13.4203 5.28166 14.7192C6.57999 16.0175 8.15277 16.6667 9.99999 16.6667Z"
                          fill="white"
                        />
                      </svg>
                    </Button> */}
                  </div>
                  <div className="address-wrp">
                    <div className="py-2">
                      <div className="cstm-card">
                        <DataTable>
                          <DataTableHead
                            columns={addressColumnData}
                            orderBy={addressState.orderBy}
                            // sort={this.handleRequestSort}
                          />
                          <DataTableBody
                            loading={loading}
                            column={addressColumnData}
                            data={data?.addresses}
                            page={addressState.page}
                            rowsPerPage={addressState.rowsPerPage}
                            // actionBtn={[
                            //   {
                            //     label: "Edit",
                            //     icon: "",
                            //     link: "/customers/address/edit",
                            //     backUrl: {backLink}
                            //   },
                            //   { label: "Delete", icon: "", action: DeleteAddressPopup },
                            // ]}
                          />
                        </DataTable>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="py-2">
                <div className="bg-white px-4 py-3 card-box rounded">
                  <div className="top">
                    <h4 className="dashboard-head m-0">Vehicles</h4>
                  </div>
                  <div className="table-responsive py-3">
                    <DataTable>
                      <DataTableHead
                        columns={vehicleColumnData}
                        orderBy={vehicleState.orderBy}
                      // sort={this.handleRequestSort}
                      />
                      <DataTableBody
                        loading={loading}
                        column={vehicleColumnData}
                        data={data?.vehicles}
                        page={vehicleState.page}
                        rowsPerPage={vehicleState.rowsPerPage}
                      // actionBtn={[
                      //   {
                      //     label: "Edit",
                      //     icon: "",
                      //     link: "/customers/address/edit",
                      //     backUrl: {backLink}
                      //   },
                      //   { label: "Delete", icon: "", action: DeleteAddressPopup },
                      // ]}
                      />
                    </DataTable>
                  </div>
                </div>
              </div> */}

              {/* <div className="py-2">
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
                            backUrl: { backLink },
                          },
                        ]}
                      />
                    </DataTable>
                  </div>
                </div>
              </div> */}

              {/* <div className="py-2">
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
                            backUrl: { backLink },
                          },
                        ]}
                      />
                    </DataTable>
                  </div>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      <Modal
        show={DeleteAddress?.open}
        onHide={deleteAddressClose}
        className="deleteAdd-pop delete-pop"
        centered
      >
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
                  onClick={() => {
                    setDeleteAddress(false);
                  }}
                >
                  No Cancel!
                </Button>
              </div>
              <div className="pe-2 w-50">
                <Button
                  onClick={handleAddressDelete}
                  className=" w-100 d-flex align-items-center justify-content-center"
                >
                  Yes, Delete it
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={DeleteVehicle?.open}
        onHide={deleteVehicleClose}
        className="deleteAdd-pop delete-pop"
        centered
      >
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
                  onClick={() => {
                    setDeleteVehicle(false);
                  }}
                >
                  No Cancel!
                </Button>
              </div>
              <div className="pe-2 w-50">
                <Button
                  onClick={handleVehicleDelete}
                  className=" w-100 d-flex align-items-center justify-content-center"
                >
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
export default ViewDocumentProfile;

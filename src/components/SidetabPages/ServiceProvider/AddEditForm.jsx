import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { GoogleAutocomplete } from "../../../Common/addressInput/addressInput";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";

import {
  addServiceprovider,
  editServiceProvider,
  fileUpload,
  updateServiceProvider,
} from "../../../store/actions";
import { isEmail, isEmpty } from "validator";
import { COUNTRY_OPTIONS } from "../../../Common/worldCountries";
import { PASS_REGEX, Numeric } from "../../../Services/URLS";
import { SearchSelectInput } from "../../../Common/searchSelectInput";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

const AddServiceProviderIndex = () => {
  const EditId = location.pathname.split("/")[3];
  const [num, setNum] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compMounted = useRef();

  const ServiceProviderData = useSelector(
    (s) => s.ServiceProvider.editServiceProvider?.data
  );

  const [data, setData] = useState({
    providerId: "",
    name: "",
    address: "",
    providerLocation: {
      lat: "",
      lng: "",
    },
    email: "",
    type: "agency",
    mobileNumber: "",
    countryCode: "",
    profileImage: "",
    accountDetails: {},
    status: "",
    documentsList: [
      {
        type: "Licence",
        number: "",
        image: "",
        date: "",
      },
      {
        type: "Background Check",
        number: "",
        image: "",
        date: "",
      },
      {
        type: "Work Eligibility",
        number: "",
        image: "",
        date: "",
      },
      {
        type: "Date of Birth",
        number: "",
        image: "",
        date: "",
      }
    ],
    expDateMin: addDays(new Date(), 1).toISOString().split("T")[0]
  });

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    profileImage: "",
    countryCode: "",
    status: "",
    disabled: true,
  });

  const [showPass, setShowpass] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (compMounted.current) {
      setData((pre) => ({
        ...pre,
        name: ServiceProviderData?.name,
        address: ServiceProviderData?.address,
        providerLocation: {
          lat: ServiceProviderData?.providerLocation?.coordinates?.[0],
          lng: ServiceProviderData?.providerLocation?.coordinates?.[1],
        },
        email: ServiceProviderData?.email,
        type: ServiceProviderData?.type,
        mobileNumber: ServiceProviderData?.mobileNumber,
        countryCode: ServiceProviderData?.countryCode,
        profileImage: ServiceProviderData?.profileImage,
        status: ServiceProviderData?.status,
        accountDetails: ServiceProviderData?.accountDetails,
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
          }, {
            type: "Date of Birth",
            number: ServiceProviderData?.documentsList?.[3]?.number,
            image: ServiceProviderData?.documentsList?.[3]?.image,
            date: ServiceProviderData?.documentsList?.[3]?.date,
          }
        ],
      }));
    } else {
      compMounted.current = true;
    }
  }, [ServiceProviderData]);

  // const imgUrl = useSelector((s) => s?.fileUpload?.uploadfile?.data?.url);

  const handleAddress = (address, event) => {
    setData((prevState) => ({
      ...prevState,
      address: address.address,
      providerLocation: {
        lat: address?.lat,
        lng: address?.lng,
      },
    }));
  };

  const handleNestedChange = (docName, name) => (value) => {
    // console.log("docName, name, value", docName, name, value);
    let newDoc = [...data.documentsList];
    let index = newDoc.findIndex(s => s.type == docName);
    if (name === "number") {
      newDoc[index].number = value;
    }
    else if (name === "date") {
      newDoc[index].date = value;
    }
    else if (name === "image") {
      newDoc[index].image = value;
    }
    setData(prev => ({
      ...prev,
      documentsList: newDoc
    }))
    // console.log("data", data.documentsList);
  };

  const handleFileProvider = (name) => (event) => {
    let image = event.target.files[0];
    let payload = {
      file: image,
    };
    let formData = new FormData();
    for (var key in payload) {
      formData.append(key, payload[key]);
    }

    const callback = (name, data) => {
      handleNestedChange(name, "image")(data);
    };

    dispatch(fileUpload(formData, name, callback));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "name": {
        Error[name] = "";
        if (value.length < 5) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      }
      case "profileImage": {
        Error[name] = "";
        if (value.length < 1) {
          // Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      }
      case "mobileNumber": {
        Error[name] = "";

        if (value.length < 5) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          if (!Numeric.test(value)) {
            Error[name] = "Invalid Mobile Number";
            Error["disabled"] = true;
          } else {
            Error["disabled"] = false;
          }
        }

        break;
      }
      case "email": {
        if (isEmpty(value)) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else if (!isEmail(value)) {
          Error[name] = "Invalid Email";

          Error["disabled"] = true;
        } else {
          Error[name] = "";
          Error["disabled"] = false;
        }
        break;
      }
      case "password": {
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else if (!PASS_REGEX.test(value)) {
          Error[name] = "Password should be at least 8 characters, one uppercase, lowercase, special character & numeric value";

          Error["disabled"] = true;
        } else {
          Error[name] = "";
          Error["disabled"] = false;
        }

        break;
      }
      default:
        break;
    }
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleType = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setData((pre) => ({
      ...pre,
      type: value,
    }));
    setError((prevState) => ({
      ...prevState,
      disabled: false,
    }));
  };

  const handleStatus = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setData((pre) => ({
      ...pre,
      status: value,
    }));
    setError((prevState) => ({
      ...prevState,
      disabled: false,
    }));
  };

  const handleFileUpload = (event) => {
    let image = event.target.files[0];
    let payload = {
      file: image,
    };
    let formData = new FormData();
    for (var key in payload) {
      formData.append(key, payload[key]);
    }

    const callback = (url) => {
      setData((pre) => ({ ...pre, profileImage: url }));
    };

    dispatch(fileUpload(formData, null, callback));
    setError((prevState) => ({
      ...prevState,
      disabled: false,
    }));
  };

  const validateDocuments = (data) => {
    if (!data.documentsList[0].image) {
      toast.error("Please upload licence");
      return true;
    }
    if (!data.documentsList[0].number) {
      toast.error("Please enter Licence Number!");
      return true;
    }
    if (!data.documentsList[0].date) {
      toast.error("Please enter Licence Exp Date!");
      return true;
    }
    if (!data.documentsList[1].image) {
      toast.error("Please upload Background Check Certificate!");
      return true;
    }
    if (!data.documentsList[2].image) {
      toast.error("Please upload Work Eligibility Certificate!");
      return true;
    }
    if (!data.documentsList[3].date) {
      toast.error("Please enter Date of Birth!");
      return true;
    }
    if (!data.documentsList[3].image) {
      toast.error("Please upload Date of Birth Certificate!");
      return true;
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/service-provider");
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    if (EditId) {
      if (data.password) {
        data.password = data.password;
      }
      if (data.providerId) {
        data.providerId = data.providerId;
      }
      var error = validateDocuments(data);
      if (!error) {
        dispatch(updateServiceProvider(data, callBack));
      }
    }
    else {
      var error = validateDocuments(data);
      if (!error) {
        dispatch(addServiceprovider(data, callBack));
      }
    }
  };

  useEffect(() => {
    if (EditId) {
      dispatch(editServiceProvider(EditId));
    }
    setData((pre) => ({
      ...pre,
      providerId: EditId,
    }));
  }, [EditId]);

  const handleSwitch = () => {
    setToggle(!toggle);
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
                  <Breadcrumb.Item active>
                    {EditId ? "Edit" : "Add"}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="top mb-3">
                    <h4 className="dashboard-head m-0">Profile Information</h4>
                  </div>
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
                          value={data?.name}
                          name="name"
                          onChange={handleChange}
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.name}
                        </span>
                      </Col>
                      <Col lg="2" className="my-2 col-4">
                        <label for="" className="form-label2 m-0">
                          Code
                        </label>
                        <SearchSelectInput
                          fullWidth
                          name="countryCode"
                          value={data?.countryCode}
                          onChange={handleChange}
                          errors={{}}
                          data={COUNTRY_OPTIONS}
                          type="number"
                          className="under-wrap form-control"
                          required
                        />
                      </Col>
                      <Col lg="4" className="my-2 col-8">
                        <label for="" className="form-label2 m-0">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          value={data?.mobileNumber}
                          name={"mobileNumber"}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.mobileNumber}
                        </span>
                      </Col>
                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder=""
                          className="form-control"
                          value={data?.email}
                          name="email"
                          onChange={handleChange}
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.email}
                        </span>
                      </Col>

                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Address
                        </label>
                        <GoogleAutocomplete
                          address={data?.address}
                          lat={data?.providerLocation?.lat}
                          lng={data?.providerLocation?.lng}
                          name={"address"}
                          onChange={handleAddress}
                        />
                      </Col>

                      {/* {data?.status === "created" && (
                        <Col lg="6" className="my-2">
                          <label htmlFor="" className="form-label2 m-0">
                            Status
                          </label>
                          <Form.Select
                            aria-label="Default select example"
                            value={data?.status}
                            onChange={(e) => handleStatus(e)}
                          >
                            <option value="">Select...</option>
                            <option value="approved">Approve</option>
                            <option value="rejected">Reject</option>
                            <option value="blocked">Block</option>
                          </Form.Select>
                        </Col>
                      )}

                      {data?.status === "approved" && (
                        <Col lg="6" className="my-2">
                          <label htmlFor="" className="form-label2 m-0">
                            Status
                          </label>
                          <Form.Select
                            aria-label="Default select example"
                            value={data?.status}
                            onChange={(e) => handleStatus(e)}
                          >
                            <option value="">Select...</option>
                            <option value="blocked">Block</option>
                          </Form.Select>
                        </Col>
                      )}
                      
                      {data?.status === "blocked" && (
                        <Col lg="6" className="my-2">
                          <label htmlFor="" className="form-label2 m-0">
                            Status
                          </label>
                          <Form.Select
                            aria-label="Default select example"
                            value={data?.status}
                            onChange={(e) => handleStatus(e)}
                          >
                            <option value="">Select...</option>
                            <option value="approved">Active</option>
                          </Form.Select>
                        </Col>
                      )} */}

                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Type
                        </label>
                        <Form.Select
                          aria-label="Default select example"
                          value={data?.type}
                          onChange={(e) => handleType(e)}
                        >
                          <option value="agency">Agency</option>
                          <option value="individual">Individual</option>
                        </Form.Select>
                      </Col>

                      {EditId ? (
                        <Col lg="6" className="my-2">
                          <div className="edit-pass d-flex align-items-center">
                            <label className="m-0 form-label2 m-0 me-3">
                              Password
                            </label>
                            <Switch onChange={handleSwitch} checked={toggle} />
                          </div>
                          <div className={toggle ? "my-3" : "d-none"}>
                            <div
                              className={"icon-with-div pass position-relative"}
                            >
                              <a
                                onClick={() => setShowpass(!showPass)}
                                className="icon-wrp2 position-absolute"
                              >
                                {showPass == false ? (
                                  <svg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                  </svg>
                                ) : (
                                  <svg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill="none"
                                      d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
                                    ></path>
                                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                  </svg>
                                )}
                              </a>

                              <input
                                type={showPass == false ? "password" : "text"}
                                value={data?.password}
                                name="password"
                                onChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <span className="note error_note py-2 m-0 text-danger">
                              {errors.password}
                            </span>
                          </div>
                        </Col>
                      )
                        : (
                          <Col lg="6" className="my-2">
                            <div className="edit-pass d-flex align-items-center">
                              <label className="m-0 form-label2 m-0 me-3">
                                Password
                              </label>
                            </div>
                            <div
                              className={"icon-with-div pass position-relative"}
                            >
                              <a
                                onClick={() => setShowpass(!showPass)}
                                className="icon-wrp2 position-absolute"
                              >
                                {showPass == false ? (
                                  <svg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                  </svg>
                                ) : (
                                  <svg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill="none"
                                      d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
                                    ></path>
                                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                  </svg>
                                )}
                              </a>

                              <input
                                type={showPass == false ? "password" : "text"}
                                value={data?.password}
                                name="password"
                                onChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <span className="note error_note py-2 m-0 text-danger">
                              {errors.password}
                            </span>
                          </Col>
                        )}

                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Profile Image
                        </label>
                        <div className="upload-file position-relative">
                          <input
                            type="file"
                            className="position-absolute"
                            onChange={(e) => handleFileUpload(e)}
                          />
                          <div className="inner position-relative">
                            <img
                              src={
                                data?.profileImage
                                  ? data?.profileImage
                                  : "../assets/images/dummy-profile"
                              }
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


                    </Row>
                  </Form>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="top mb-3">
                    <h4 className="dashboard-head m-0">KYC Documents</h4>
                  </div>
                  <Form>
                    <Row className="mb-3 card-box2">
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Licence Number
                        </label>
                        <input
                          // type="no."
                          placeholder=""
                          value={data?.documentsList[0]?.number}
                          name="number"
                          onChange={(e) =>
                            handleNestedChange(
                              "Licence",
                              "number"
                            )(e.target.value)
                          }
                          className="form-control"
                        />
                      </Col>
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Expire Date of Licence
                        </label>
                        <input
                          type="date"
                          placeholder=""
                          value={data?.documentsList[0]?.date}
                          name="date"
                          min={data?.expDateMin}
                          className="form-control"
                          onChange={(e) =>
                            handleNestedChange(
                              "Licence",
                              "date"
                            )(e.target.value)
                          }
                        />
                      </Col>
                      <Col lg="4" className="my-2 text-center">
                        <label htmlFor="" className="form-label2 m-0">
                          Licence Image
                        </label>
                        <div className="upload-file position-relative mx-auto">
                          <input
                            type="file"
                            className="position-absolute"
                            onChange={(e) => handleFileProvider("Licence")(e)}
                          />
                          <div className="inner position-relative">
                            <img
                              src={
                                data?.documentsList?.[0]?.image
                                  ? data?.documentsList?.[0]?.image
                                  : "../assets/images/NoImage.jpeg"
                              }
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
                    </Row>
                    <Row className="mb-3 card-box2">
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Background Check Number
                        </label>
                        <input
                          type="no."
                          placeholder=""
                          value={data?.documentsList[1]?.number}
                          name="text"
                          className="form-control"
                          onChange={(e) =>
                            handleNestedChange(
                              "Background Check",
                              "number"
                            )(e.target.value)
                          }
                        />
                      </Col>
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Background Check Expiry Date
                        </label>
                        <input
                          type="date"
                          placeholder=""
                          value={data?.documentsList[1]?.date}
                          min={data?.expDateMin}
                          name="date"
                          className="form-control"
                          onChange={(e) =>
                            handleNestedChange(
                              "Background Check",
                              "date"
                            )(e.target.value)
                          }
                        />
                      </Col>
                      <Col lg="4" className="my-2 text-center">
                        <label htmlFor="" className="form-label2 m-0">
                          Background Check Document
                        </label>
                        <div className="upload-file position-relative mx-auto">
                          <input
                            type="file"
                            className="position-absolute"
                            onChange={(e) => handleFileProvider("Background Check")(e)}
                          />
                          <div className="inner position-relative">
                            <img
                              src={
                                data?.documentsList?.[1]?.image
                                  ? data?.documentsList?.[1]?.image
                                  : "../assets/images/NoImage.jpeg"
                              }
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
                    </Row>
                    <Row className="mb-3 card-box2">
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Work Eligibility Number
                        </label>
                        <input
                          type="no."
                          placeholder=""
                          value={data?.documentsList[2]?.number}
                          name="text"
                          className="form-control"
                          onChange={(e) =>
                            handleNestedChange(
                              "Work Eligibility",
                              "number"
                            )(e.target.value)
                          }
                        />
                      </Col>
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Work Eligibility Expiry Date
                        </label>
                        <input
                          type="date"
                          placeholder=""
                          value={data?.documentsList[2]?.date}
                          min={data?.expDateMin}
                          name="date"
                          className="form-control"
                          onChange={(e) =>
                            handleNestedChange(
                              "Work Eligibility",
                              "date"
                            )(e.target.value)
                          }
                        />
                      </Col>
                      <Col lg="4" className="my-2 text-center">
                        <label htmlFor="" className="form-label2 m-0">
                          Work Eligibility Document
                        </label>
                        <div className="upload-file position-relative  mx-auto">
                          <input
                            type="file"
                            className="position-absolute"
                            onChange={(e) => handleFileProvider("Work Eligibility")(e)}
                          />
                          <div className="inner position-relative">
                            <img
                              src={
                                data?.documentsList?.[2]?.image
                                  ? data?.documentsList?.[2]?.image
                                  : "../assets/images/NoImage.jpeg"
                              }
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
                    </Row>
                    <Row className="mb-3 card-box2">
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Date of Birth Number
                        </label>
                        <input
                          type="no."
                          placeholder=""
                          value={data?.documentsList[3]?.number}
                          name="text"
                          className="form-control"
                          onChange={(e) =>
                            handleNestedChange(
                              "Date of Birth",
                              "number"
                            )(e.target.value)
                          }
                        />
                      </Col>
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          placeholder=""
                          value={data?.documentsList[3]?.date}
                          max={data?.expDateMin}
                          name="date"
                          className="form-control"
                          onChange={(e) =>
                            handleNestedChange(
                              "Date of Birth",
                              "date"
                            )(e.target.value)
                          }
                        />
                      </Col>
                      <Col lg="4" className="my-2 text-center">
                        <label htmlFor="" className="form-label2 m-0">
                          Date of Birth Document
                        </label>
                        <div className="upload-file position-relative  mx-auto">
                          <input
                            type="file"
                            className="position-absolute"
                            onChange={(e) => handleFileProvider("Date of Birth")(e)}
                          />
                          <div className="inner position-relative">
                            <img
                              src={
                                data?.documentsList?.[3]?.image
                                  ? data?.documentsList?.[3]?.image
                                  : "../assets/images/NoImage.jpeg"
                              }
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
                    </Row>

                  </Form>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white card-box px-4 py-3 rounded">
                  <div className="top mb-3">
                    <h4 className="dashboard-head m-0">
                      Bank Information(Optional)
                    </h4>
                  </div>
                  <Form>
                    <Row>
                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Bank Name
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          value={data?.accountDetails?.bankName}
                        />
                      </Col>
                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Account Holder Name
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          value={data?.accountDetails?.accountHolderName}
                        />
                      </Col>
                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Bank Account Number
                        </label>
                        <input
                          type="number"
                          placeholder=""
                          className="form-control"
                          value={data?.accountDetails?.accountNumber}
                        />
                      </Col>
                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Sort Code
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          value={data?.accountDetails?.sortCode}
                        />
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
              <div className="py-2">
                <Row>
                  <Col lg="12" className="my-2">
                    <div className="pt-3 btn-wrp d-flex algign-items-center">
                      <Button
                        disabled={errors.disabled}
                        onClick={handleSubmit}
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        Submit
                      </Button>
                      <Link
                        to="/service-provider"
                        className="d-flex btn-2 border align-items-center justify-content-center me-2"
                      >
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
                      </Link>
                    </div>
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
export default AddServiceProviderIndex;

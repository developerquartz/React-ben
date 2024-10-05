import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import {
  addUser,
  editCustomer,
  fileUpload,
  updateUser,
} from "../../../store/actions";
import { isEmail, isEmpty } from "validator";
import { PASS_REGEX, Numeric } from "../../../Services/URLS";
import { COUNTRY_OPTIONS } from "../../../Common/worldCountries";
// import Loader from "../../../assest/images/loader.gif";
import { SearchSelectInput } from "../../../Common/searchSelectInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";
import { GoogleAutocomplete } from "../../../Common/addressInput/addressInput";

const AddCustomIndex = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compMounted = useRef();

  const userData = useSelector((s) => s?.Customers?.edituser?.data);
  // console.log(userData, "userData");
  // const imgUrl = useSelector((s) => s?.fileUpload?.uploadfile?.data);
  const id = location.pathname.split("/")[3];
  const [data, setData] = useState({
    userId: "",
    name: "",
    email: "",
    mobileNumber: "",
    profileImage: "",
    status: "",
    countryCode: "",
    location: "",
    lat: "",
    lng: "",
    // password: "",
  });
  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    disabled: true,
  });
  const [showPass, setShowpass] = useState(false);

  useEffect(() => {
    if (compMounted.current) {
      setData((pre) => ({
        ...pre,
        name: userData?.name ? userData?.name : "--",
        email: userData?.email ? userData.email : "--",
        mobileNumber: userData?.mobileNumber,
        profileImage: userData?.profileImage,
        status: userData?.status,
        createdAt: userData?.createdAt,
        avgRating: userData?.avgRating,
        location: userData?.location,
        lat: userData?.lat,
        lng: userData?.lng,
        countryCode: userData?.countryCode,
      }));
    } else {
      compMounted.current = true;
    }
  }, [userData]);
  useEffect(() => {
    if (id) {
      dispatch(editCustomer(id));
    }
    setData((pre) => ({
      ...pre,
      userId: id,
    }));
  }, [id]);
  // useEffect(() => {
  //   setData((pre) => ({ ...pre, profileImage: imgUrl?.url }));
  // }, [imgUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "name":
        Error[name] = "";
        if (value.length < 5) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      case "profileImage":
        Error[name] = "";
        if (value.length < 1) {
          // Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
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
          Error[name] =
            "Password should be at least 8 characters, one uppercase, lowercase, special character & numeric value";

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
  const handleAddress = (address, event) => {
    setData((prevState) => ({
      ...prevState,
      location: address.address,
      lat: address?.lat,
      lng: address?.lng,
    }));
  };
  const [toggle, setToggle] = useState(false);
  const handleSwitch = () => {
    setToggle(!toggle);
  };
  const onStatusChange = (value) => {
    setData((pre) => ({
      ...pre,
      status: value,
    }));
    errors.disabled = false;
  };

  const handleFileProvider = (event) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/customers");
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    if (id) {
      if (data.password) {
        data.password = data.password;
      }
      if (data.userId) {
        data.userId = data.userId;
      }
      dispatch(updateUser(data, callBack));
    } else {
      dispatch(addUser(data, callBack));
    }
  };
  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/customers">Customers</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {id ? "Edit" : "Add"}
                  </Breadcrumb.Item>
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
                        name="name"
                        value={data?.name}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
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
                        type="number"
                        value={data?.mobileNumber}
                        name={"mobileNumber"}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.mobileNumber}
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
                        Home Telephone
                      </label>
                      <input
                        type="number"
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
                        Home Address
                      </label>
                      <GoogleAutocomplete
                        address={data?.location}
                        lat={data?.lat}
                        lng={data?.lng}
                        name={"address"}
                        onChange={handleAddress}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Address 2
                      </label>
                      <GoogleAutocomplete
                        address={data?.location}
                        lat={data?.lat}
                        lng={data?.lng}
                        name={"address"}
                        onChange={handleAddress}
                      />
                    </Col>

                    {/* {id ? (
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
                    ) : (
                      <Col lg="6" className="my-2">
                        <div className="edit-pass d-flex align-items-center">
                          <label className="m-0 form-label2 m-0 me-3">
                            Password
                          </label>
                        </div>
                        <div className={"icon-with-div pass position-relative"}>
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
                    )} */}
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        City
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={data?.email}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.email}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        State
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={data?.email}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.email}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Zip
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={data?.email}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.email}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Status
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={data?.name}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.name}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Document Template
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={data?.name}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.name}
                      </span>
                    </Col>

                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button
                          disabled={errors.disabled}
                          onClick={handleSubmit}
                          className="d-flex align-items-center justify-content-center me-2"
                        >
                          Submit
                        </Button>
                        <Link
                          // to="/customers/profile/"
                          to={`/customers/`}
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
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default AddCustomIndex;

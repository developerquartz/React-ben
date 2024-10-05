import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Switch from "react-switch";
import { PASS_REGEX, Numeric } from "../../../Services/URLS";
import { isEmail, isEmpty } from "validator";
import { SearchSelectInput } from "../../../Common/searchSelectInput";
import { COUNTRY_OPTIONS } from "../../../Common/worldCountries";
import { GoogleAutocomplete } from "../../../Common/addressInput/addressInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

import {
  addAdmin,
  adminList,
  editCustomer,
  fileUpload,
  updateAdmin,
} from "../../../store/actions";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const AddUserIndex = () => {
  const EditId = location.pathname.split("/")[3];
  const adminData = useSelector((s) => s.Customers.edituser?.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compMounted = useRef();

  const [AddEditAdmin, setAddEditAdmin] = useState({
    userId: "",
    name: "",
    mobileNumber: "",
    role: "SUBADMIN",
    email: "",
    password: "",
    // status: "",
    profileImage: "",
    address: "",
    countryCode: "",
    permissions: [],
  });
  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    profileImage: "",
    address: "",
    // status: "",
    role: "",
    permissions: [],
    disabled: true,
  });
  const [showPass, setShowpass] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setAddEditAdmin((pre) => ({
      ...pre,
      userId: EditId,
    }));
    if (EditId) {
      dispatch(editCustomer(EditId));
    }
  }, [EditId]);

  useEffect(() => {
    if (compMounted.current) {
      setAddEditAdmin((pre) => ({
        ...pre,
        name: adminData?.name,
        email: adminData?.email,
        // password: adminData?.password,
        mobileNumber: adminData?.mobileNumber,
        address: adminData?.address,
        status: adminData?.status,
        role: adminData?.role,
        profileImage: adminData?.profileImage,
        countryCode: adminData?.countryCode,
        permissions: adminData?.permissions,
      }));
    } else {
      compMounted.current = true;
    }
  }, [adminData]);
  const handleSwitch = () => {
    setToggle(!toggle);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "name":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      case "address":
        Error[name] = "";
        if (value.length < 4) {
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
            "password should be at least 8 characters, one uppercase,lowercase, special character (@,-,~,_), numeric value";

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
    setAddEditAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleAddress = (address, event) => {
    setAddEditAdmin((prevState) => ({
      ...prevState,
      address: address.address,
    }));
  };
  const handlePermissionsChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setAddEditAdmin((pre) => ({ ...pre, permissions: value }));
  };

  const onStatusChange = (value) => {
    setAddEditAdmin((pre) => ({
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
      setAddEditAdmin((pre) => ({ ...pre, profileImage: url }));
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
          navigate("/systemaccess");
          dispatch(adminList());
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    if (EditId) {
      if (AddEditAdmin.EditId) {
        AddEditAdmin.userId = AddEditAdmin.userId;
      }

      dispatch(updateAdmin(AddEditAdmin, callBack));
    } else {
      dispatch(addAdmin(AddEditAdmin, callBack));
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
                  <Breadcrumb.Item href="/systemaccess">
                    System Access
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {EditId ? "Edit" : "Add"}
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
                        placeholder=""
                        className="form-control"
                        type="text"
                        value={AddEditAdmin?.name}
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
                        value={AddEditAdmin?.countryCode}
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
                        value={AddEditAdmin?.mobileNumber}
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
                        value={AddEditAdmin?.email}
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
                        address={AddEditAdmin?.address}
                        name={"address"}
                        onChange={handleAddress}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Role
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option>Sub Admin</option>
                      </Form.Select>
                    </Col>

                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0 d-block">
                        Permissions
                      </label>
                      <div className="cstm-select">
                        <Select
                          className="demo-simple-select-label"
                          id="demo-simple-select"
                          multiple
                          value={AddEditAdmin?.permissions}
                          onChange={handlePermissionsChange}
                          MenuProps={MenuProps}
                        >
                          {
                            <MenuItem key="DASHBOARD TAB" value="dashboardTab">
                              Dashboard{" "}
                            </MenuItem>
                          }
                          {
                            <MenuItem key="CUSTOMERS TAB" value="customersTab">
                              Customers{" "}
                            </MenuItem>
                          }
                          {
                            <MenuItem
                              key="SERVICE PROVIDERS TAB"
                              value="serviceProviderTab"
                            >
                              Service Providers{" "}
                            </MenuItem>
                          }
                          {
                            <MenuItem key="CATELOG TAB" value="catelogTab">
                              Catalog
                            </MenuItem>
                          }
                          {
                            <MenuItem key="BOOKINGS TAB" value="bookingsTab">
                              Bookings
                            </MenuItem>
                          }
                          {
                            <MenuItem
                              key="BIRD EYE VIEW TAB"
                              value="birdEyeviewTab"
                            >
                              Bird Eye View{" "}
                            </MenuItem>
                          }
                          {
                            <MenuItem
                              key="PROMOCODES TAB"
                              value="promoCodesTab"
                            >
                              PromoCodes{" "}
                            </MenuItem>
                          }
                          {
                            <MenuItem
                              key="SYSTEM ACCESS TAB"
                              value="systeAccessTab"
                            >
                              System Access
                            </MenuItem>
                          }
                          {
                            <MenuItem key="DISPUTE TAB" value="disputeTab">
                              Dispute{" "}
                            </MenuItem>
                          }
                          {
                            <MenuItem key="REPORT TAB" value="reportTab">
                              Report
                            </MenuItem>
                          }
                          {
                            <MenuItem
                              key="ACCOUNTING TAB"
                              value="accountingTab"
                            >
                              Accounting{" "}
                            </MenuItem>
                          }
                          {
                            <MenuItem
                              key="CONFIGURATION TAB"
                              value="configurationTab"
                            >
                              Configuration
                            </MenuItem>
                          }
                        </Select>
                      </div>
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
                              value={AddEditAdmin?.password}
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
                            value={AddEditAdmin?.password}
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
                    {/* <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Status
                      </label>
                      <div className=" switch-btn-cstm">
                        <BootstrapSwitchButton
                          width={92}
                          height={36}
                          checked={false}
                          onlabel="Active"
                          offlabel="InActive"
                          onChange={(e) =>
                            onStatusChange(
                              AddEditAdmin?.status == "active"
                                ? "inactive"
                                : "active"
                            )
                          }
                        />
                      </div>
                    </Col> */}

                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Status
                      </label>
                      <div className=" switch-btn-cstm">
                        <BootstrapSwitchButton
                          width={92}
                          height={36}
                          checked={
                            AddEditAdmin?.status == "active" ? true : false
                          }
                          onlabel="Active"
                          offlabel="Blocked"
                          onChange={(e) =>
                            onStatusChange(
                              AddEditAdmin?.status == "active"
                                ? "blocked"
                                : "active"
                            )
                          }
                        />
                      </div>
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Profile Image
                      </label>
                      <div className="upload-file position-relative">
                        <input
                          type="file"
                          onChange={(e) => handleFileProvider(e)}
                          className="position-absolute"
                        />
                        <div className="inner position-relative">
                          <img
                            src={
                              AddEditAdmin?.profileImage
                                ? AddEditAdmin?.profileImage
                                : "/assets/images/dummy-profile"
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
                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button
                          onClick={handleSubmit}
                          disabled={errors.disabled}
                          className="d-flex align-items-center justify-content-center me-2"
                        >
                          Submit
                        </Button>
                        <Link
                          to="/systemaccess"
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
export default AddUserIndex;

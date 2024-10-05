import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import {
  addServiceAddOn,
  updateServiceAddOn,
  getServiceAddOnDetails,
  fileUpload,
  serviceList,
} from "../../../../store/actions";

const EditAddOnIndex = () => {
  const EditId = location.pathname.split("/")[4];
  // console.log("EditId", EditId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compMounted = useRef();

  const ITEM_HEIGHT = 50;
  const ITEM_PADDING_TOP = 10;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 450,
      },
    },
  };

  const categories = [
    { key: "Towing", value: "Towing" },
    { key: "Wash", value: "Wash" },
    { key: "Fuel", value: "Fuel" },
    { key: "Repair", value: "Repair" },
  ];

  const [data, setData] = useState({
    addOnId: "",
    name: "",
    shortDesc: "",
    logo: "",
    category: "",
    addOnCost: 0,
    adminCommission: 0,
    distanceCost: 0,
    setPrice: "no",
    serviceId: "",
    serviceDetails: {},
  });

  const [errors, setError] = useState({
    addOnId: "",
    name: "",
    shortDesc: "",
    logo: "",
    category: "",
    addOnCost: 0,
    adminCommission: 0,
    distanceCost: 0,
    setPrice: "no",
    serviceId: "",
    serviceDetails: {},
    disabled: true,
  });

  const ServiceAddOnData = useSelector(
    (s) => s.Catalog.serviceAddOnDetails?.data
  );

  useEffect(() => {
    if (compMounted.current) {
      setData((pre) => ({
        ...pre,
        name: ServiceAddOnData?.name,
        shortDesc: ServiceAddOnData?.shortDesc,
        logo: ServiceAddOnData?.logo,
        category: ServiceAddOnData?.category,
        addOnCost: ServiceAddOnData?.addOnCost,
        adminCommission: ServiceAddOnData?.adminCommission,
        distanceCost: ServiceAddOnData?.distanceCost,
        setPrice: ServiceAddOnData?.setPrice,
        serviceId: ServiceAddOnData?.serviceId,
        serviceDetails: ServiceAddOnData?.serviceDetails,
      }));
    } else {
      compMounted.current = true;
    }
  }, [ServiceAddOnData]);

  useEffect(() => {
    if (EditId) {
      dispatch(getServiceAddOnDetails(EditId.toString()));
    }
    setData((pre) => ({
      ...pre,
      addOnId: EditId,
    }));
  }, [EditId]);

  useEffect(() => {
    if (data.category) {
      dispatch(serviceList({ category: data?.category, limit: 100 }));
    }
  }, [data?.category]);

  const serviceData = useSelector((s) => s.Catalog.serviceList?.data);

  const handleFileUpload = (event) => {
    let payload = {
      file: event.target.files[0],
    };

    let formData = new FormData();
    for (var key in payload) {
      formData.append(key, payload[key]);
    }

    const callback = (url) => {
      setData((pre) => ({ ...pre, logo: url }));
    };

    dispatch(fileUpload(formData, null, callback));

    setError((prevState) => ({
      ...prevState,
      disabled: false,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "name": {
        Error[name] = "";
        if (value.length < 3) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      }
      case "shortDesc": {
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
      case "category": {
        Error[name] = "";
        if (value.length < 3) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      }
      case "logo": {
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
      default:
        break;
    }
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleSwitch = () => {
    const Error = { ...errors };
    setData((pre) => ({
      ...pre,
      setPrice: data.setPrice === "yes" ? "no" : "yes",
    }));
    Error["disabled"] = false;
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      // console.log("response", response);
      if (response.status === "success") {
        if (EditId) {
          toast.success("Add On updated successfully!");
        } else {
          toast.success("Add On added successfully!");
        }
        setTimeout(() => {
          navigate("/catalog/add-on");
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    if (EditId) {
      if (data.addOnId) {
        data.addOnId = data.addOnId;
      }
      if (data.setPrice === "yes") {
        data.serviceCost = 0;
        data.distanceCost = 0;
      }
      dispatch(updateServiceAddOn(data, callBack));
    } else {
      if (data.setPrice === "yes") {
        data.serviceCost = 0;
        data.distanceCost = 0;
      }
      // console.log("data", data);
      dispatch(addServiceAddOn(data, callBack));
    }
  };

  const handleServiceChange = (event) => {
    event.preventDefault();
    const Error = { ...errors };
    const { value } = event.target;
    // console.log("value", event.target)
    setData((pre) => ({ ...pre, serviceId: value }));
    Error["disabled"] = false;
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleCategoryChange = (event) => {
    event.preventDefault();
    const Error = { ...errors };
    const { value } = event.target;
    // console.log("value", event.target)
    if (value) {
      setData((pre) => ({ ...pre, category: value }));
    }
    Error["disabled"] = false;
    setError((pre) => ({ ...pre, ...Error }));
  };

  // console.log("data", data);

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row className="justify-content-center">
            <Col lg="10" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/catalog/add-on">
                    Add On
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {EditId ? "Edit" : "Add"}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>

            <Col lg="10" className="my-2">
              <Row>
                <Col lg="8" className="my-2">
                  <div className="py-2">
                    <div className="bg-white card-box px-4 py-3 rounded">
                      <Form>
                        <Row>
                          <Col lg="12" className="my-2">
                            {/* <p className="text-muted small-text m-0">
                                                            Configure your Add On Showcase...
                                                        </p> */}

                            <label htmlFor="" className="form-label2 m-0">
                              Name<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control my-1"
                              name="name"
                              onChange={handleChange}
                              value={data?.name}
                            />
                            <p className="text-muted small-text m-0">
                              Type your add on name, customer can find this add
                              on using this name.
                            </p>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="bg-white card-box px-4 py-3 rounded">
                      <Form>
                        <Row>
                          <Col lg="12" className="my-2">
                            <label htmlFor="" className="form-label2 m-0">
                              Short Description
                              <span className="text-danger">*</span>
                            </label>
                            {/* <input type="text" className="form-control my-1" /> */}
                            <textarea
                              name="shortDesc"
                              id=""
                              className="form-control my-1"
                              rows="3"
                              onChange={handleChange}
                              value={data?.shortDesc}
                            ></textarea>
                            <p className="text-muted small-text m-0">
                              2-3 line description text about your add on, we
                              suggest you to put in bullet points.
                            </p>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="bg-white card-box px-4 py-3 rounded">
                      <Form>
                        <Col lg="12" className="my-2 ">
                          <label htmlFor="" className="form-label2 m-0">
                            Category<span className="text-danger">*</span>
                          </label>
                          <FormControl>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={data?.category}
                              onChange={handleCategoryChange}
                              name="category"
                              MenuProps={MenuProps}
                              defaultValue=""
                            >
                              {categories?.map((category) => (
                                <MenuItem
                                  key={category?.key}
                                  value={category?.value}
                                >
                                  {category?.value}
                                </MenuItem>
                              ))}
                            </Select>
                            <p className="text-muted small-text m-0">
                              Select category from dropdown, customer can find
                              this add on using this category.
                            </p>
                          </FormControl>
                        </Col>
                      </Form>
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="bg-white card-box px-4 py-3 rounded">
                      <Form>
                        <Col lg="12" className="my-2 ">
                          <label htmlFor="" className="form-label2 m-0">
                            Service<span className="text-danger">*</span>
                          </label>
                          <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={data?.serviceId}
                              onChange={handleServiceChange}
                              MenuProps={MenuProps}
                              defaultValue=""
                            >
                              {serviceData?.map((service) => (
                                <MenuItem
                                  key={service?.name}
                                  value={service?._id}
                                >
                                  {service?.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <p className="text-muted small-text m-0">
                            Select service from dropdown after you select
                            category above, for which you want to add this add
                            on.
                          </p>
                        </Col>
                      </Form>
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="bg-white card-box px-4 py-3 rounded">
                      <Form>
                        <Row>
                          <Col lg="12" className="my-2">
                            <label htmlFor="" className="form-label2 m-0">
                              Featured Image{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="py-2">
                              <div className="position-relative upload-file-doc upload-file py-3 d-flex align-items-center justify-content-center">
                                <input
                                  type="file"
                                  className="position-absolute"
                                  name="logo"
                                  onChange={(e) => handleFileUpload(e)}
                                />

                                <div className="inner text-center">
                                  {data?.logo ? (
                                    <img
                                      src={data?.logo}
                                      alt=""
                                      className="img-fluid w-100 h-100 rounded-circle"
                                    />
                                  ) : (
                                    <div className="icn my-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                      >
                                        <path
                                          d="M13.2375 16.7625C13.75 17.25 13.75 18.05 13.2375 18.5375C12.75 19.025 11.95 19.025 11.4625 18.5375C10.2917 17.365 9.63412 15.7757 9.63412 14.1188C9.63412 12.4618 10.2917 10.8725 11.4625 9.7L15.8875 5.275C17.06 4.10422 18.6493 3.44664 20.3062 3.44664C21.9632 3.44664 23.5525 4.10422 24.725 5.275C25.8958 6.44754 26.5534 8.03678 26.5534 9.69375C26.5534 11.3507 25.8958 12.94 24.725 14.1125L22.8625 15.975C22.875 14.95 22.7125 13.925 22.3625 12.95L22.95 12.35C23.3004 12.0034 23.5786 11.5907 23.7685 11.1358C23.9583 10.6809 24.0561 10.1929 24.0561 9.7C24.0561 9.2071 23.9583 8.71908 23.7685 8.26421C23.5786 7.80934 23.3004 7.39664 22.95 7.05C22.6033 6.69958 22.1906 6.42139 21.7358 6.23152C21.2809 6.04166 20.7929 5.9439 20.3 5.9439C19.8071 5.9439 19.3191 6.04166 18.8642 6.23152C18.4093 6.42139 17.9966 6.69958 17.65 7.05L13.2375 11.4625C12.8871 11.8091 12.6089 12.2218 12.419 12.6767C12.2292 13.1316 12.1314 13.6196 12.1314 14.1125C12.1314 14.6054 12.2292 15.0934 12.419 15.5483C12.6089 16.0032 12.8871 16.4159 13.2375 16.7625M16.7625 11.4625C17.25 10.975 18.05 10.975 18.5375 11.4625C19.7083 12.635 20.3659 14.2243 20.3659 15.8812C20.3659 17.5382 19.7083 19.1275 18.5375 20.3L14.1125 24.725C12.94 25.8958 11.3507 26.5534 9.69374 26.5534C8.03677 26.5534 6.44752 25.8958 5.27499 24.725C4.10421 23.5525 3.44662 21.9632 3.44662 20.3063C3.44662 18.6493 4.10421 17.06 5.27499 15.8875L7.13749 14.025C7.12499 15.05 7.28749 16.075 7.63749 17.0625L7.04999 17.65C6.69957 17.9966 6.42137 18.4093 6.23151 18.8642C6.04165 19.3191 5.94389 19.8071 5.94389 20.3C5.94389 20.7929 6.04165 21.2809 6.23151 21.7358C6.42137 22.1907 6.69957 22.6034 7.04999 22.95C7.39663 23.3004 7.80933 23.5786 8.2642 23.7685C8.71907 23.9583 9.20708 24.0561 9.69999 24.0561C10.1929 24.0561 10.6809 23.9583 11.1358 23.7685C11.5906 23.5786 12.0033 23.3004 12.35 22.95L16.7625 18.5375C17.1129 18.1909 17.3911 17.7782 17.581 17.3233C17.7708 16.8684 17.8686 16.3804 17.8686 15.8875C17.8686 15.3946 17.7708 14.9066 17.581 14.4517C17.3911 13.9968 17.1129 13.5841 16.7625 13.2375C16.6411 13.1237 16.5443 12.9863 16.4782 12.8336C16.412 12.681 16.3779 12.5164 16.3779 12.35C16.3779 12.1836 16.412 12.019 16.4782 11.8664C16.5443 11.7137 16.6411 11.5763 16.7625 11.4625V11.4625Z"
                                          fill="#515462"
                                        ></path>
                                      </svg>
                                      <p className="text-muted m-0">
                                        Upload File
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <p className="py-1 text-muted small-text m-0">
                              We recommend good quality Add on image that is
                              helpful to showcase your Add on. Max. upload file
                              size: 5MB
                            </p>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="pt-4 btn-wrp d-flex algign-items-center">
                      <Button
                        className="d-flex align-items-center justify-content-center me-2"
                        disabled={errors.disabled}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                      <Link
                        to="/catalog/add-on"
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
                  </div>
                </Col>

                <Col lg="4" className="my-2">
                  <div className="py-2">
                    <div className="bg-white card-box px-4 py-3 rounded">
                      <Form>
                        <Row>
                          <Col lg="12" className="my-2">
                            <label htmlFor="" className="form-label2 m-0">
                              Can Provider Set Price?
                            </label>
                            <div className="py-2 switch-btn-cstm">
                              <BootstrapSwitchButton
                                width={96}
                                height={36}
                                checked={
                                  data?.setPrice === "yes" ? true : false
                                }
                                onlabel="Yes"
                                offlabel="No"
                                name="setPrice"
                                onChange={handleSwitch}
                                value={data?.setPrice}
                                // onChange={(checked: boolean) => {
                                //   this.setState({ isUserAdmin: checked });
                                // }}
                              />
                            </div>
                            <p className="py-1 text-muted small-text m-0">
                              If you want provider to set prices, enable it. By
                              default, it is disabled and you can set your
                              prices.
                            </p>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div>

                  {data?.setPrice === "no" && (
                    <div className="py-2">
                      <div className="bg-white card-box px-4 py-3 rounded">
                        <Form>
                          <Row>
                            <Col lg="12" className="my-2">
                              <label htmlFor="" className="form-label2 m-0">
                                Add On Charges{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="addOnCost"
                                onChange={handleChange}
                                value={data?.addOnCost}
                              />
                              <p className="text-muted m-0 small-text py-1">
                                Fixed Add On Cost
                              </p>
                            </Col>
                            <Col lg="12" className="my-2">
                              <label htmlFor="" className="form-label2 m-0">
                                Admin Commission{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="adminCommission"
                                onChange={handleChange}
                                value={data?.adminCommission}
                              />
                              <p className="text-muted m-0 small-text py-1">
                                Fixed Admin Commission
                              </p>
                            </Col>
                            {(data?.category === "Towing" ||
                              data?.category === "Fuel") && (
                              <Col lg="12" className="my-2">
                                <label htmlFor="" className="form-label2 m-0">
                                  Delivery Charges
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  name="distanceCost"
                                  onChange={handleChange}
                                  value={data?.distanceCost}
                                />
                                <p className="text-muted m-0 small-text py-1">
                                  Price per unit distance
                                </p>
                              </Col>
                            )}
                          </Row>
                        </Form>
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EditAddOnIndex;

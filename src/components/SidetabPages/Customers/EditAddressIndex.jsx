import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import {
//     getaddressDetails,
//     updateAddress,
// } from "../../../../store/actions";

const EditAddressIndex = () => {
  const id = location.pathname.split("/")[4];

  const bLocation = useLocation();
  const backLink = bLocation?.state?.backLink;
  // console.log("backLink", bLocation);

  const [address, setAddress] = useState({
    AddressId: "",
    addressType: "",
    houseNo: "",
    area: "",
    address: "",
    landmark: "",
    addressLocation: [],
  });
  const [errors, setError] = useState({
    addressType: "",
    houseNo: "",
    area: "",
    address: "",
    landmark: "",
    addressLocation: [],
    disabled: true,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AddressDetails = useSelector((s) => s?.Customers?.addressDetails?.data);
  // console.log(AddressDetails, "AddressDetails");

  useEffect(() => {
    setAddress((pre) => ({
      ...pre,
      addressType: AddressDetails?.addressType,
      houseNo: AddressDetails?.houseNo,
      area: AddressDetails?.area,
      address: AddressDetails?.address,
      landmark: AddressDetails?.landmark,
      addressLocation: AddressDetails?.addressLocation,
    }));
  }, [AddressDetails]);

  useEffect(() => {
    setAddress((pre) => ({
      ...pre,
      AddressId: id,
    }));
    if (id) {
      // dispatch(getAddressDetails(id));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "area":
        Error[name] = "";
        if (value.length < 2) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      case "houseNo":
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
        if (value.length < 2) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      case "addressType":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      default:
        break;
    }
    setContentPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/customers/profile/");
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(updateAddress(address, callBack));
  };

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="">Customer Address</Breadcrumb.Item>
                  <Breadcrumb.Item active>Edit</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Address Type
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        value={address?.addressType}
                        name="addressType"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.name}
                      </span>
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        House No
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        value={address?.houseNo}
                        name="houseNo"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.houseNo}
                      </span>
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Area
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        value={address?.area}
                        name="area"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.area}
                      </span>
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        value={address?.address}
                        name="address"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.address}
                      </span>
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Landmark
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        value={address?.landmark}
                        name="landmark"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.landmark}
                      </span>
                    </Col>

                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex align-items-center">
                        <Button
                          onClick={handleUpdate}
                          disabled={errors.disabled}
                          className="d-flex align-items-center justify-content-center me-2"
                        >
                          Submit
                        </Button>
                        <Link
                          to={backLink}
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
export default EditAddressIndex;

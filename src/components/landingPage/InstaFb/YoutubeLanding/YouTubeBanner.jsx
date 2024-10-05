import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkValidations } from "../../../../Services/Helper";
import { isEmail, isEmpty } from "validator";
import { postTwitter, postYoutube } from "../../../../store/actions";
import { toast } from "react-toastify";

export const YouTubeBanner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    message: "",
  });

  const [errors, setError] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    message: "",
  });
  const contactDetail = useSelector((s) => s?.login?.contactDetail?.data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const Error = { ...errors };

    switch (name) {
      case "firstname": {
        if (value.length < 1) {
          Error[name] = "Required";
          setDisabled(true);
        } else {
          Error[name] = "";
        }
        break;
      }

      case "lastname": {
        if (value.length < 1) {
          Error[name] = "Required";
          setDisabled(true);
        } else {
          Error[name] = "";
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
        }
        break;
      }

      case "message": {
        if (value.length < 1) {
          Error[name] = "Required";
          setDisabled(true);
        } else {
          Error[name] = "";
        }
        break;
      }

      default:
        break;
    }

    setError((pre) => ({ ...pre, ...Error }));
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handlePhone = (name, phoneNumber, dialCode, validate) => {
    if (!phoneNumber || !dialCode) return false;
    const Error = { ...errors };
    switch (name) {
      case "phone":
        if (!validate) {
          Error[name] = "Invalid Number";
        } else {
          Error[name] = "";
        }
        break;

      default:
        break;
    }
    setData((pre) => ({
      ...pre,
      [name]: phoneNumber,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validate = checkValidations(data);
    const callBack = (res) => {
      setLoading(false);
      if (res.data) {
        toast.success(res.message);
        setTimeout(() => {
          setData({
            email: "",
            firstname: "",
            lastname: "",
            phone: "",
            message: "",
          });
        }, 200);
      } else {
      }
    };

    let body = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: "+" + data.phone,
      message: data.message,
    };

    if (!validate.error) {
      setLoading(true);
      dispatch(postYoutube(body, callBack));
    } else if (validate.error) {
      if (data.email == "") {
        setError((pre) => ({ ...pre, email: "Required" }));
      }
      if (data.firstname == "") {
        setError((pre) => ({ ...pre, firstname: "Required" }));
      }
      if (data.lastname == "") {
        setError((pre) => ({ ...pre, lastname: "Required" }));
      }
      if (data.phone == "") {
        setError((pre) => ({ ...pre, phone: "Required" }));
      }
      if (data.message == "") {
        setError((pre) => ({ ...pre, message: "Required" }));
      }
    }
  };
  return (
    <>
      <section className="banneryou-tube youtube-baner-main position-relative">
        <Container>
          <Row>
            <Col md={6}>
              <div className="main-banner-facebook">
                <div className="text-main-facebook-banner position-absolute">
                  <h2>
                    Finding Solutions for <br />
                    your Tax Resolution
                  </h2>
                  <p>Life's a Journey Travel Tax-free with us</p>
                  <form action="#">
                    <Row md={8} className="fields-facebook">
                      <Col md={6}>
                        <input
                          type="text"
                          id="fname"
                          name="firstname"
                          value={data.firstname}
                          placeholder="First Name"
                          onChange={handleChange}
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.firstname}
                        </span>
                      </Col>
                      <Col md={6}>
                        <input
                          type="text"
                          id="lname"
                          name="lastname"
                          value={data.lastname}
                          placeholder="Last Name"
                          onChange={handleChange}
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.lastname}
                        </span>
                      </Col>
                    </Row>
                    <Row md={8} className="fields-facebook">
                      <Col md={6}>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={data.email}
                          placeholder="Email Address"
                          onChange={handleChange}
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.email}
                        </span>
                      </Col>
                      <Col md={6}>
                        <PhoneInput
                          country={"us"}
                          value={data.phone}
                          onChange={(data, country) => {
                            let validateWithLength = country.format?.split(".");
                            validateWithLength = validateWithLength?.length - 1;
                            if (validateWithLength == data.length) {
                              handlePhone(
                                "phone",
                                data,
                                country.dialCode,
                                true
                              );
                            } else {
                              handlePhone(
                                "phone",
                                data,
                                country.dialCode,
                                false
                              );
                            }
                          }}
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.phone}
                        </span>
                      </Col>
                    </Row>
                    <Row md={8}>
                      <Col md={12} className="textrea-landing-form">
                        <textarea
                          id="w3review"
                          name="message"
                          value={data.message}
                          rows="5"
                          cols="50"
                          placeholder="Message"
                          onChange={handleChange}
                        ></textarea>
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.message}
                        </span>
                      </Col>
                    </Row>

                    <Button
                      className="btn-fb-lnding submit-black-btn"
                      type="button"
                      onClick={handleSubmit}
                      disabled={
                        errors.email == "Invalid Email" ||
                        errors.phone == "Invalid Number"
                          ? true
                          : false
                      }
                    >
                      submit
                    </Button>
                  </form>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="right-insta-banner position-absolute">
                <img
                  src="../../../assets/images/youtube-ban-rightimg.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="wave-image-blue">
          <img
            src="../../../assets/images/Vector-btoom-youtube.svg"
            alt=""
            className="img-fluid"
          />
        </div>
      </section>
    </>
  );
};

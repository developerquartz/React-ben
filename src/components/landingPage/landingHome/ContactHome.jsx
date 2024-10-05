import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { isEmail, isEmpty } from "validator";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";
import { postContact } from "../../../store/actions";
import { checkValidations } from "../../../Services/Helper";
import Loading from "../../../Common/extra/loading";

const ContactHome = () => {
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
  console.log(contactDetail, "contact  Detailll");

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
      dispatch(postContact(body, callBack));
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
      {loading && <Loading className={"cstmLoader"} />}
      <section className="Contact-home-main pt-5 pb-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="contact-icon-details">
                <h2>Contact us</h2>
                <ul className="m-0 p-0">
                  <li className="list-unstyled d-flex align-items-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      class=""
                    >
                      <path
                        d="M16 8.25C15.0605 8.25 14.1422 8.52858 13.361 9.05052C12.5799 9.57246 11.9711 10.3143 11.6116 11.1823C11.2521 12.0502 11.158 13.0053 11.3413 13.9267C11.5245 14.8481 11.9769 15.6945 12.6412 16.3588C13.3055 17.0231 14.1519 17.4755 15.0733 17.6587C15.9947 17.842 16.9498 17.7479 17.8177 17.3884C18.6857 17.0289 19.4275 16.4201 19.9495 15.639C20.4714 14.8578 20.75 13.9395 20.75 13C20.75 11.7402 20.2496 10.532 19.3588 9.64124C18.468 8.75045 17.2598 8.25 16 8.25ZM16 16.25C15.3572 16.25 14.7289 16.0594 14.1944 15.7023C13.6599 15.3452 13.2434 14.8376 12.9974 14.2437C12.7514 13.6499 12.687 12.9964 12.8124 12.366C12.9378 11.7355 13.2474 11.1564 13.7019 10.7019C14.1564 10.2474 14.7355 9.93785 15.366 9.81245C15.9964 9.68705 16.6499 9.75141 17.2437 9.99739C17.8376 10.2434 18.3452 10.6599 18.7023 11.1944C19.0594 11.7289 19.25 12.3572 19.25 13C19.25 13.862 18.9076 14.6886 18.2981 15.2981C17.6886 15.9076 16.862 16.25 16 16.25ZM16 2.25C13.1499 2.25331 10.4176 3.38696 8.40226 5.40226C6.38696 7.41756 5.25331 10.1499 5.25 13C5.25 16.8638 7.0425 20.9675 10.4338 24.8675C11.9644 26.6364 13.6871 28.2295 15.57 29.6175C15.696 29.7057 15.8462 29.753 16 29.753C16.1538 29.753 16.304 29.7057 16.43 29.6175C18.3129 28.2295 20.0356 26.6364 21.5662 24.8675C24.9575 20.9675 26.75 16.8675 26.75 13C26.7467 10.1499 25.613 7.41756 23.5977 5.40226C21.5824 3.38696 18.8501 2.25331 16 2.25ZM16 28.0638C14.125 26.6163 6.75 20.4525 6.75 13C6.75 10.5467 7.72455 8.19397 9.45926 6.45926C11.194 4.72455 13.5467 3.75 16 3.75C18.4533 3.75 20.806 4.72455 22.5407 6.45926C24.2754 8.19397 25.25 10.5467 25.25 13C25.25 20.4525 17.875 26.6163 16 28.0638Z"
                        fill="white"
                      />
                    </svg>
                    <p>
                      {contactDetail &&
                        contactDetail?.contact_address.join(", ")}
                    </p>
                  </li>
                  <li className="list-unstyled d-flex align-items-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M20.4797 5.10659C20.5067 5.0054 20.5533 4.91052 20.617 4.82737C20.6807 4.74422 20.7601 4.67445 20.8508 4.62202C20.9414 4.5696 21.0416 4.53556 21.1454 4.52185C21.2492 4.50815 21.3547 4.51504 21.4559 4.54214C23.3806 5.04419 25.1366 6.0503 26.5431 7.45681C27.9497 8.86333 28.9558 10.6194 29.4578 12.5441C29.4849 12.6452 29.4918 12.7508 29.4781 12.8546C29.4644 12.9584 29.4304 13.0585 29.3779 13.1492C29.3255 13.2398 29.2557 13.3193 29.1726 13.3829C29.0894 13.4466 28.9946 13.4933 28.8934 13.5203C28.8262 13.5381 28.757 13.5471 28.6875 13.5468C28.5119 13.5469 28.3413 13.4891 28.202 13.3822C28.0627 13.2753 27.9626 13.1254 27.9172 12.9558C27.4862 11.3025 26.6221 9.79412 25.414 8.58601C24.2058 7.37789 22.6974 6.51379 21.0442 6.08276C20.943 6.05578 20.8481 6.00912 20.7649 5.94545C20.6818 5.88178 20.612 5.80234 20.5596 5.71168C20.5072 5.62101 20.4731 5.52091 20.4594 5.41708C20.4457 5.31326 20.4526 5.20775 20.4797 5.10659ZM19.9817 10.3328C21.9141 10.8481 23.1519 12.0859 23.6672 14.0183C23.7126 14.1879 23.8127 14.3378 23.952 14.4447C24.0913 14.5516 24.2619 14.6094 24.4375 14.6093C24.507 14.6096 24.5762 14.6006 24.6434 14.5828C24.7446 14.5558 24.8394 14.5091 24.9226 14.4454C25.0057 14.3818 25.0755 14.3023 25.1279 14.2117C25.1804 14.121 25.2144 14.0209 25.2281 13.9171C25.2418 13.8133 25.2349 13.7077 25.2078 13.6066C24.5438 11.1217 22.8783 9.4562 20.3934 8.79214C20.2922 8.7651 20.1867 8.75826 20.0829 8.77199C19.9791 8.78573 19.879 8.81978 19.7884 8.87219C19.6053 8.97805 19.4718 9.15229 19.4172 9.35659C19.3626 9.56089 19.3914 9.77851 19.4973 9.96158C19.6031 10.1446 19.7774 10.2782 19.9817 10.3328ZM30.5323 23.2156C30.3047 24.9517 29.4527 26.5456 28.1355 27.6993C26.8183 28.853 25.126 29.4876 23.375 29.4843C12.9758 29.4843 4.51564 21.0242 4.51564 10.6249C4.51228 8.87454 5.14626 7.18276 6.29914 5.86564C7.45202 4.54851 9.04496 3.69612 10.7804 3.46768C11.1799 3.41913 11.5844 3.50151 11.9331 3.70244C12.2817 3.90336 12.5558 4.212 12.7142 4.58198L15.5165 10.8374C15.6402 11.1206 15.6914 11.4302 15.6655 11.7382C15.6395 12.0461 15.5372 12.3427 15.3677 12.6012C15.3507 12.6275 15.332 12.6528 15.312 12.6769L12.5136 16.0052C12.4966 16.0397 12.4878 16.0776 12.4878 16.1161C12.4878 16.1545 12.4966 16.1925 12.5136 16.227C13.531 18.3095 15.7144 20.477 17.8261 21.493C17.8614 21.5091 17.8999 21.5167 17.9386 21.5153C17.9773 21.514 18.0152 21.5036 18.0492 21.485L21.3284 18.696C21.3518 18.6756 21.3766 18.6569 21.4027 18.6402C21.6601 18.4686 21.9561 18.364 22.2641 18.3357C22.5721 18.3074 22.8822 18.3563 23.1665 18.4782L29.4406 21.2898C29.8056 21.4516 30.1089 21.7266 30.3055 22.0742C30.5021 22.4217 30.5816 22.8233 30.5323 23.2196V23.2156ZM28.9531 23.019C28.9576 22.9635 28.9445 22.9079 28.9156 22.8603C28.8868 22.8126 28.8437 22.7752 28.7924 22.7534L22.517 19.9417C22.4828 19.9285 22.446 19.9229 22.4093 19.9251C22.3727 19.9274 22.3369 19.9376 22.3045 19.955L19.0267 22.7441C19.0028 22.764 18.9776 22.7826 18.9524 22.7999C18.685 22.9782 18.376 23.0841 18.0555 23.1074C17.7349 23.1307 17.4139 23.0705 17.1235 22.9327C14.6851 21.7546 12.2546 19.3467 11.0766 16.9309C10.938 16.6423 10.8763 16.3227 10.8975 16.0033C10.9187 15.6838 11.022 15.3752 11.1974 15.1074C11.2145 15.0807 11.2336 15.0554 11.2545 15.0317L14.0516 11.7034C14.0676 11.6686 14.0758 11.6308 14.0758 11.5925C14.0758 11.5542 14.0676 11.5164 14.0516 11.4816L11.2545 5.22081C11.2361 5.17056 11.2029 5.12706 11.1593 5.09602C11.1157 5.06497 11.0637 5.04782 11.0102 5.04682H10.9796C9.62884 5.22651 8.38964 5.8917 7.49342 6.91819C6.5972 7.94468 6.10523 9.26228 6.10939 10.6249C6.10939 20.1449 13.855 27.8906 23.375 27.8906C24.7379 27.8947 26.0557 27.4025 27.0822 26.506C28.1087 25.6096 28.7738 24.37 28.9531 23.019Z"
                        fill="white"
                      />
                    </svg>
                    {/* {contactDetail?.contact_phones &&
                      contactDetail?.contact_phones.length > 0 &&
                      contactDetail?.contact_phones.map((item) => {
                        return ( */}
                    <p>
                      {contactDetail &&
                        contactDetail?.contact_phones.join(", ")}
                    </p>
                    {/* );
                      })} */}
                  </li>
                </ul>
                <div className="follow-section">
                  <h4>Follow us</h4>
                  <ul className="social-icon-header d-flex m-0 p-0">
                    <Link
                      to={
                        contactDetail && contactDetail?.contact_social?.facebook
                      }
                      target="_blank"
                    >
                      <li className="list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/facebook.svg" />
                      </li>
                    </Link>
                    <Link
                      to={
                        contactDetail && contactDetail?.contact_social?.twitter
                      }
                      target="_blank"
                    >
                      <li className="list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/twitter.svg" />
                      </li>
                    </Link>
                    <Link
                      to={
                        contactDetail &&
                        contactDetail?.contact_social?.instagram
                      }
                      target="_blank"
                    >
                      <li className="list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/instagram.svg" />
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="Get-touch-section">
                <h2>Get in Touch</h2>

                <Form>
                  <div className="field-input d-flex justify-content-between gap-4">
                    <Form.Group className="mb-3 w-50" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        placeholder="First Name"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.firstname}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        name="lastname"
                        value={data.lastname}
                        placeholder="Last Name"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.lastname}
                      </span>
                    </Form.Group>
                  </div>
                  <div className="field-input d-flex justify-content-between gap-4">
                    <Form.Group
                      className="mb-3 w-50"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="Email Address"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.email}
                      </span>
                    </Form.Group>

                    <Form.Group
                      className="us-field mb-3 w-50"
                      controlId="formBasicTel"
                    >
                      <PhoneInput
                        country={"us"}
                        value={data.phone}
                        onChange={(data, country) => {
                          let validateWithLength = country.format?.split(".");
                          validateWithLength = validateWithLength?.length - 1;
                          if (validateWithLength == data.length) {
                            handlePhone("phone", data, country.dialCode, true);
                          } else {
                            handlePhone("phone", data, country.dialCode, false);
                          }
                        }}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.phone}
                      </span>
                    </Form.Group>
                  </div>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={data.message}
                    placeholder="Message"
                    style={{ height: "100px" }}
                    onChange={handleChange}
                  />
                  <span className="note error_note py-2 m-0 text-danger">
                    {errors.message}
                  </span>
                </Form>
                <button
                  className="m-0 mt-3 btn-round-section btn-portal-header d-flex justify-content-center text-decoration-none align-items-center position-relative home-contact"
                  onClick={handleSubmit}
                  disabled={
                    errors.email == "Invalid Email" ||
                    errors.phone == "Invalid Number"
                      ? true
                      : false
                  }
                >
                  Contact us{" "}
                  <svg
                    className="d-flex position-absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M6 12L4.93125 10.95L9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12Z"
                      fill="#46B98C"
                    />
                  </svg>{" "}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ContactHome;

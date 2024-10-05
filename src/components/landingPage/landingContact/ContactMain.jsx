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

const ContactMain = () => {
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
      <section className="Contact-home-main contact-main-page">
        <Container>
          <Row>
            <Col md={4} className="ps-0">
              <div className="contact-icon-details pt-5 mt-3">
                <h2 className="position-relative">Contact us</h2>
                <ul className="m-0 p-0">
                  <li className="list-unstyled d-flex align-items-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="28"
                      viewBox="0 0 22 28"
                      fill="none"
                    >
                      <path
                        d="M11 6.25C10.0605 6.25 9.14217 6.52858 8.36104 7.05052C7.57991 7.57246 6.97109 8.31431 6.61157 9.18225C6.25206 10.0502 6.15799 11.0053 6.34127 11.9267C6.52455 12.8481 6.97694 13.6945 7.64124 14.3588C8.30554 15.0231 9.15191 15.4755 10.0733 15.6587C10.9947 15.842 11.9498 15.7479 12.8177 15.3884C13.6857 15.0289 14.4275 14.4201 14.9495 13.639C15.4714 12.8578 15.75 11.9395 15.75 11C15.75 9.74022 15.2496 8.53204 14.3588 7.64124C13.468 6.75045 12.2598 6.25 11 6.25ZM11 14.25C10.3572 14.25 9.72886 14.0594 9.1944 13.7023C8.65994 13.3452 8.24338 12.8376 7.99739 12.2437C7.75141 11.6499 7.68705 10.9964 7.81245 10.366C7.93785 9.73552 8.24738 9.15643 8.7019 8.7019C9.15642 8.24738 9.73552 7.93785 10.366 7.81245C10.9964 7.68705 11.6499 7.75141 12.2437 7.99739C12.8376 8.24338 13.3452 8.65994 13.7023 9.1944C14.0594 9.72886 14.25 10.3572 14.25 11C14.25 11.862 13.9076 12.6886 13.2981 13.2981C12.6886 13.9076 11.862 14.25 11 14.25ZM11 0.25C8.14994 0.253308 5.41756 1.38696 3.40226 3.40226C1.38696 5.41756 0.253308 8.14994 0.25 11C0.25 14.8638 2.0425 18.9675 5.43375 22.8675C6.96439 24.6364 8.68707 26.2295 10.57 27.6175C10.696 27.7057 10.8462 27.753 11 27.753C11.1538 27.753 11.304 27.7057 11.43 27.6175C13.3129 26.2295 15.0356 24.6364 16.5662 22.8675C19.9575 18.9675 21.75 14.8675 21.75 11C21.7467 8.14994 20.613 5.41756 18.5977 3.40226C16.5824 1.38696 13.8501 0.253308 11 0.25ZM11 26.0638C9.125 24.6163 1.75 18.4525 1.75 11C1.75 8.54675 2.72455 6.19397 4.45926 4.45926C6.19397 2.72455 8.54675 1.75 11 1.75C13.4533 1.75 15.806 2.72455 17.5407 4.45926C19.2754 6.19397 20.25 8.54675 20.25 11C20.25 18.4525 12.875 24.6163 11 26.0638Z"
                        fill="#333333"
                      />
                    </svg>
                    <p>
                      240 n east promontory, ste 200
                      <br />
                      Farmington, ut 84025
                    </p>
                  </li>
                  <li className="list-unstyled d-flex align-items-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M16.4797 2.10665C16.5067 2.00546 16.5533 1.91058 16.617 1.82743C16.6807 1.74429 16.7601 1.67451 16.8508 1.62208C16.9414 1.56966 17.0416 1.53562 17.1454 1.52191C17.2492 1.50821 17.3547 1.5151 17.4559 1.5422C19.3806 2.04426 21.1366 3.05036 22.5431 4.45687C23.9497 5.86339 24.9558 7.61945 25.4578 9.54415C25.4849 9.64531 25.4918 9.75082 25.4781 9.85464C25.4644 9.95847 25.4304 10.0586 25.3779 10.1492C25.3255 10.2399 25.2557 10.3193 25.1726 10.383C25.0894 10.4467 24.9946 10.4933 24.8934 10.5203C24.8262 10.5382 24.757 10.5471 24.6875 10.5469C24.5119 10.547 24.3413 10.4891 24.202 10.3822C24.0627 10.2754 23.9626 10.1255 23.9172 9.95587C23.4862 8.3026 22.6221 6.79418 21.414 5.58607C20.2058 4.37796 18.6974 3.51385 17.0442 3.08282C16.943 3.05584 16.8481 3.00918 16.7649 2.94551C16.6818 2.88184 16.612 2.8024 16.5596 2.71174C16.5072 2.62108 16.4731 2.52097 16.4594 2.41714C16.4457 2.31332 16.4526 2.20781 16.4797 2.10665ZM15.9817 7.33282C17.9141 7.84814 19.1519 9.08595 19.6672 11.0184C19.7126 11.188 19.8127 11.3379 19.952 11.4447C20.0913 11.5516 20.2619 11.6095 20.4375 11.6094C20.507 11.6096 20.5762 11.6007 20.6434 11.5828C20.7446 11.5558 20.8394 11.5092 20.9226 11.4455C21.0057 11.3818 21.0755 11.3024 21.1279 11.2117C21.1804 11.1211 21.2144 11.021 21.2281 10.9171C21.2418 10.8133 21.2349 10.7078 21.2078 10.6067C20.5438 8.12173 18.8783 6.45626 16.3934 5.7922C16.2922 5.76516 16.1867 5.75832 16.0829 5.77206C15.9791 5.78579 15.879 5.81984 15.7884 5.87225C15.6053 5.97811 15.4718 6.15235 15.4172 6.35665C15.3626 6.56095 15.3914 6.77857 15.4973 6.96164C15.6031 7.14471 15.7774 7.27823 15.9817 7.33282ZM26.5323 20.2156C26.3047 21.9518 25.4527 23.5457 24.1355 24.6994C22.8183 25.8531 21.126 26.4876 19.375 26.4844C8.97579 26.4844 0.515638 18.0242 0.515638 7.62501C0.512284 5.8746 1.14626 4.18282 2.29914 2.8657C3.45202 1.54857 5.04496 0.696183 6.7804 0.467745C7.1799 0.419196 7.58437 0.50157 7.93305 0.702497C8.28174 0.903424 8.55583 1.21206 8.71415 1.58204L11.5165 7.83751C11.6402 8.1207 11.6914 8.43027 11.6655 8.73822C11.6395 9.04617 11.5372 9.34279 11.3677 9.60126C11.3507 9.62757 11.332 9.65285 11.312 9.67696L8.51361 13.0052C8.49662 13.0397 8.48778 13.0777 8.48778 13.1161C8.48778 13.1546 8.49662 13.1925 8.51361 13.227C9.53095 15.3095 11.7144 17.477 13.8261 18.4931C13.8614 18.5091 13.8999 18.5168 13.9386 18.5154C13.9773 18.514 14.0152 18.5036 14.0492 18.4851L17.3284 15.696C17.3518 15.6757 17.3766 15.657 17.4027 15.6402C17.6601 15.4687 17.9561 15.364 18.2641 15.3357C18.5721 15.3074 18.8822 15.3564 19.1665 15.4782L25.4406 18.2899C25.8056 18.4516 26.1089 18.7267 26.3055 19.0742C26.5021 19.4218 26.5816 19.8234 26.5323 20.2196V20.2156ZM24.9531 20.0191C24.9576 19.9635 24.9445 19.908 24.9156 19.8603C24.8868 19.8127 24.8437 19.7753 24.7924 19.7534L18.517 16.9418C18.4828 16.9286 18.446 16.9229 18.4093 16.9252C18.3727 16.9275 18.3369 16.9377 18.3045 16.9551L15.0267 19.7442C15.0028 19.7641 14.9776 19.7827 14.9524 19.7999C14.685 19.9782 14.376 20.0842 14.0555 20.1075C13.7349 20.1307 13.4139 20.0705 13.1235 19.9327C10.6851 18.7547 8.25462 16.3468 7.07658 13.9309C6.93802 13.6423 6.87634 13.3228 6.89751 13.0033C6.91869 12.6838 7.022 12.3753 7.19743 12.1074C7.21454 12.0808 7.23363 12.0555 7.25454 12.0317L10.0516 8.70345C10.0676 8.66866 10.0758 8.63083 10.0758 8.59255C10.0758 8.55427 10.0676 8.51644 10.0516 8.48165L7.25454 2.22087C7.23609 2.17062 7.20288 2.12712 7.15927 2.09608C7.11566 2.06503 7.06369 2.04788 7.01017 2.04689H6.97962C5.62884 2.22657 4.38964 2.89176 3.49342 3.91825C2.5972 4.94474 2.10523 6.26234 2.10939 7.62501C2.10939 17.145 9.85501 24.8906 19.375 24.8906C20.7379 24.8947 22.0557 24.4026 23.0822 23.5061C24.1087 22.6096 24.7738 21.3701 24.9531 20.0191Z"
                        fill="#333333"
                      />
                    </svg>
                    <p>
                      (801) 441-2646
                      <br />
                      (877) 229-9525
                    </p>
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
                        <img src="../../../assets/images/facebook-contact.svg" />
                      </li>
                    </Link>
                    <Link
                      to={
                        contactDetail && contactDetail?.contact_social?.twitter
                      }
                      target="_blank"
                    >
                      <li className="list-unstyled d-flex justify-content-center align-items-center">
                        <img src="../../../assets/images/twiiter-contact.svg" />
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
                        <img src="../../../assets/images/insta-contact.svg" />
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={8} className="p-0">
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

                    <Form.Group className="mb-3 w-50" controlId="formBasicTel">
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
                  className="cont-btn m-0 mt-0 btn-round-section btn-portal-header d-flex justify-content-center text-decoration-none align-items-center position-relative"
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
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="black" />
                    <path
                      d="M18 23L16.9312 21.95L21.1312 17.75H12V16.25H21.1312L16.9312 12.05L18 11L24 17L18 23Z"
                      fill="#46B98C"
                    />
                  </svg>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ContactMain;

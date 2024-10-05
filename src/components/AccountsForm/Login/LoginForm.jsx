import React from "react";
import AccountLayout from "../AccountLayout";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginOtp, loginUser } from "../../../store/actions";
import ReactPinField from "react-pin-field";
import { toast } from "react-toastify";
import { isEmail, isEmpty } from "validator";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [field, setField] = useState("login");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowpass] = useState(false);

  const [passwordType, setPasswordType] = useState("password");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "email") {
      if (isEmpty(value)) {
        setError("Required");
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      } else if (!isEmail(value)) {
        setError("Invalid Email");
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      } else {
        setError("");
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ otp: otp, ...data }));
  };

  const handleRequestOtp = (e) => {
    e.preventDefault();

    const callback = (res) => {
      if (res.data) {
        setField("otp");
        toast.success(res.data.message);
      } else {
        toast.error(res.error);
      }
    };

    dispatch(loginOtp(data, callback));
  };

  const handleField = () => {
    if (field == "login") {
    } else {
      setField("login");
    }
  };

  const handleOtpChange = (val) => {
    setOtp(val);
  };

  return (
    <>
      <AccountLayout>
        <div className="account-card px-4 py-4 bg-white">
          <div className="head-div mb-3">
            <h2 className="mb-0 pb-2 head text-center">
              {field == "login" ? "Sign In" : "Enter OTP"}
            </h2>
          </div>
          <Form onSubmit={handleSubmit}>
            {field == "login" ? (
              <Row>
                <Col lg="12" className="my-3">
                  <label className="form-label m-0">Your email</label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={data?.email}
                    placeholder="Your email"
                    onChange={handleChange}
                  />
                  <span className="note error_note py-2 m-0 text-danger">
                    {error}
                  </span>
                </Col>
                <Col lg="12" className="my-3">
                  <div className="edit-pass d-flex align-items-center">
                    <label className="m-0 form-label2 m-0 me-3">Password</label>
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
                </Col>

                <Col lg="12" className="text-end">
                  <Link to="/client/forgetpassword" className="form-link">
                    Forget Password
                  </Link>
                </Col>
                <Col lg="12" className="my-3 btn-wrap">
                  <Button
                    type="submit"
                    className="w-100 text-white submit-btn"
                    onClick={handleRequestOtp}
                    disabled={!data?.password || !data?.email || error !== ""}
                  >
                    Sign in
                  </Button>
                </Col>
                {/* <Col lg="12" className="text-center">
                  New User?{" "}
                  <Link to="/client/create-password" className="form-link">
                    Create Password
                  </Link>
                </Col> */}
              </Row>
            ) : (
              <Row>
                <Col lg="12" className="my-3 btn-wrap otp-field">
                  <ReactPinField
                    style={{ width: "50px", height: "40px" }}
                    class="pin-field"
                    validate="0123456789"
                    length="6"
                    onChange={handleOtpChange}
                  />
                </Col>
                <Col lg="12" className="my-3 btn-wrap">
                  <Button
                    type="submit"
                    className="w-100 text-white submit-btn"
                    // disabled={!data?.password || !data?.email}
                    onClick={handleSubmit}
                  >
                    Verify OTP
                  </Button>
                </Col>
              </Row>
            )}
          </Form>
        </div>
      </AccountLayout>
    </>
  );
};
export default LoginForm;

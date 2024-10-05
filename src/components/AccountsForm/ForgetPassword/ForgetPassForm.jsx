import React, { useState } from "react";
import AccountLayout from "../AccountLayout";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ReactPinField from "react-pin-field";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { checkForgotOtp, forgotPassOtp } from "../../../store/actions";
import { isEmail, isEmpty } from "validator";

const ForgetPassForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [field, setField] = useState("forgot");
  const [data, setData] = useState({
    email: "",
  });
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  const handleEmailChange = (e) => {
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

  const handleEmailSend = (e) => {
    e.preventDefault();
    const callback = (res) => {
      if (res.data) {
        toast.success(res.data.message);
        setField("otp");
      }
    };

    dispatch(forgotPassOtp(data, callback));
  };

  const handleOtpSend = (e) => {
    e.preventDefault();
    const callback = (res) => {
      if (res.data) {
        toast.success(res.data.message);
        navigate(`/client/set-password?${data.email}`);
      }
    };
    dispatch(checkForgotOtp({ otp: otp, ...data }, callback));
  };

  const handleOtpChange = (val) => {
    setOtp(val);
  };
  return (
    <>
      <Link to="/client/login" className="back-btn-main">
        <i class="fa-regular fa-arrow-left"></i>
      </Link>
      <AccountLayout>
        <div className="account-card px-4 py-4 bg-white">
          <div className="head-div mb-3">
            <h2 className="mb-0 pb-2 head text-center">Forgot Password</h2>
          </div>
          <Form>
            {field == "forgot" ? (
              <Row>
                <Col lg="12" className="my-3">
                  <label className="form-label m-0">Your email</label>
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    name="email"
                    onChange={handleEmailChange}
                  />
                  <span className="note error_note py-2 m-0 text-danger">
                    {error}
                  </span>
                </Col>
                <Col lg="12" className="my-3 btn-wrap">
                  <Button
                    className="w-100 text-white submit-btn"
                    onClick={handleEmailSend}
                    disabled={data.email == "" || error !== "" ? true : false}
                  >
                    Send
                  </Button>
                </Col>
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
                    onClick={handleOtpSend}
                    disabled={otp == "" || otp.length < 6 ? true : false}
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
export default ForgetPassForm;

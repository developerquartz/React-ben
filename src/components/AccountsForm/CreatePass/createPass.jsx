import React, { useEffect, useState } from "react";
import AccountLayout from "../AccountLayout";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactPinField from "react-pin-field";
import { useDispatch } from "react-redux";
import { createPass } from "../../../store/actions";
import { toast } from "react-toastify";
import { PASS_REGEX } from "../../../Services/URLS";
import { checkValidations } from "../../../Services/Helper";

const CreatePass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genToken = useLocation();
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState({ password: "", confirmPass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const Error = { ...error };

    switch (name) {
      case "password": {
        if (value.length < 1) {
          Error[name] = "Required";
          setDisabled(true);
        } else if (!PASS_REGEX.test(value)) {
          Error[name] =
            "password should be at least 8 characters, one uppercase, lowercase, special character (@,-,~,_), numeric value.";
          setDisabled(true);
        } else {
          Error[name] = "";
        }
        break;
      }

      case "confirmPass": {
        if (value.length < 1) {
          Error[name] = "Required";
          setDisabled(true);
        } else if (value != data.password) {
          Error[name] = "confirm password must match with password";
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

  useEffect(() => {
    let validate = checkValidations(data);
    let validate1 = checkValidations(error);
    console.log(
      validate.error,
      validate.error !== "",
      validate1.error,
      validate1.error !== "",
      "valdtejriknmkjnikm"
    );

    if (
      !validate.error &&
      validate1.error == "Password,ConfirmPass is required!"
    ) {
      setDisabled(false);
    }
  }, [data, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (res) => {
      if (res.data) {
        toast.success("Password Created Successfully!");
        navigate("/client/login");
      }
    };
    dispatch(
      createPass(
        {
          clientgnpwtoken: genToken.search.split("?clientgnpwtoken=").join(""),
          new_password: data.password,
        },
        callBack
      )
    );
  };

  return (
    <>
      <AccountLayout>
        <div className="account-card px-4 py-4 bg-white">
          <div className="head-div mb-3">
            <h2 className="mb-0 pb-2 head text-center">Create Password</h2>
          </div>
          <Form>
            <Row>
              <Col lg="12" className="my-3">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span className="note error_note py-2 m-0 text-danger">
                  {error.password}
                </span>
              </Col>
              <Col lg="12" className="my-3">
                <Form.Control
                  type="password"
                  name="confirmPass"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
                <span className="note error_note py-2 m-0 text-danger">
                  {error.confirmPass}
                </span>
              </Col>
              <Col lg="12" className="my-3 btn-wrap">
                <Button
                  className="w-100 submit-btn text-white"
                  onClick={handleSubmit}
                  disabled={disabled}
                >
                  Set Password
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </AccountLayout>
    </>
  );
};
export default CreatePass;

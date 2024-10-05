import React, { useState, useEffect } from "react";
import AccountLayout from "../AccountLayout";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changePass } from "../../../store/actions";
import { checkValidations } from "../../../Services/Helper";
import { PASS_REGEX } from "../../../Services/URLS";

const SetPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useLocation();
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState({
    password: "",
    confirmPass: "",
  });

  const handleSetPass = (e) => {
    e.preventDefault();
    const callback = (res) => {
      if (res.data) {
        toast.success(res.data.message);
        navigate("client/login");
      } else {
        toast.error(res.error);
      }
    };
    dispatch(
      changePass(
        {
          email: email.search.split("?").join(""),
          new_password: data.password,
        },
        callback
      )
    );
  };

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
    if (
      !validate.error &&
      validate1.error == "Password,ConfirmPass is required!"
    ) {
      setDisabled(false);
    }
  }, [data, error]);
  return (
    <>
      <AccountLayout>
        <div className="account-card px-4 py-4 bg-white">
          <div className="head-div mb-3">
            <h2 className="mb-0 pb-2 head text-center">Set Password</h2>
          </div>
          <Form>
            <Row>
              <Col lg="12" className="my-3">
                {/* <label className="form-label m-0">New Password</label> */}
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
                {/* <label className="form-label m-0">Confirm Password</label> */}
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
                  onClick={handleSetPass}
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
export default SetPass;

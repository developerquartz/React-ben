import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changePassword } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setError] = useState({
    oldPassword: "",
    oldPasswordType: "password",
    newPassword: "",
    newPasswordType: "password",
    confirmPassword: "",
    confirmPasswordType: "password",
    disabled: true,
  });

  const [state, setState] = useState({
    oldPassword: "",
    oldPasswordType: "password",
    newPassword: "",
    newPasswordType: "password",
    confirmPassword: "",
    confirmPasswordType: "password",
  });
  const [showPass, setShowpass] = useState(false);
  const [showPass1, setShowpass1] = useState(false);
  const [showPass2, setShowpass2] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "oldPassword":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
        }
        break;
      case "newPassword":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
        }
        break;
      case "confirmPassword":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
        }
        break;
      default:
        break;
    }
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      // console.log("callback response", response);
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/customers");
        }, 500);
      } else {
        // console.log("err response", response);
        toast.error(response.message);
      }
    };
    dispatch(changePassword(state, callBack));
  };

  const togglePassword = (key) => {
    if (state[key] === "password") {
      setState((prevState) => ({
        ...prevState,
        [key]: "text",
      }));
      return;
    }
    setState((prevState) => ({
      ...prevState,
      [key]: "password",
    }));
  };

  return (
    <>
      <section className="profile-main py-3">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Change Password</h4>
              </div>
            </Col>
            <Col lg="6" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row>
                    {/* <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Current Password
                      </label>
                      <div className="position-relative pass">
                        <Form.Control
                          type={state?.oldPasswordType}
                          name="oldPassword"
                          value={state?.oldPassword}
                          onChange={handleChange}
                          placeholder=""
                        />
                        <Button
                          className="bg-transparent border-0 position-absolute p-0 eye"
                          onClick={(e) => togglePassword("oldPasswordType")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9M12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.73 16.39 1 12C2.73 7.61 7 4.5 12 4.5ZM3.18 12C3.98825 13.6503 5.24331 15.0407 6.80248 16.0133C8.36165 16.9858 10.1624 17.5013 12 17.5013C13.8376 17.5013 15.6383 16.9858 17.1975 16.0133C18.7567 15.0407 20.0117 13.6503 20.82 12C20.0117 10.3497 18.7567 8.95925 17.1975 7.98675C15.6383 7.01424 13.8376 6.49868 12 6.49868C10.1624 6.49868 8.36165 7.01424 6.80248 7.98675C5.24331 8.95925 3.98825 10.3497 3.18 12V12Z"
                              fill="#C2C2C2"
                            />
                          </svg>
                        </Button>
                      </div>
                    </Col> */}
                    <Col lg="12" className="my-2">
                      <div className="edit-pass d-flex align-items-center">
                        <label className="m-0 form-label2 m-0 me-3">
                          {" "}
                          Current Password
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

                        <Form.Control
                          type={showPass == false ? "password" : "text"}
                          name="oldPassword"
                          value={state?.oldPassword}
                          onChange={handleChange}
                          placeholder=""
                        />
                      </div>
                    </Col>
                    <Col lg="12" className="my-2">
                      <div className="edit-pass d-flex align-items-center">
                        <label className="m-0 form-label2 m-0 me-3">
                          {" "}
                          New Password
                        </label>
                      </div>
                      <div className={"icon-with-div pass position-relative"}>
                        <a
                          onClick={() => setShowpass1(!showPass1)}
                          className="icon-wrp2 position-absolute"
                        >
                          {showPass1 == false ? (
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

                        <Form.Control
                          type={showPass1 == false ? "password" : "text"}
                          name="newPassword"
                          value={state?.newPassword}
                          onChange={handleChange}
                          placeholder=""
                        />
                      </div>
                    </Col>
                    {/* <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        New Password
                      </label>
                      <div className="position-relative pass">
                        <Form.Control
                          type={state?.newPasswordType}
                          name="newPassword"
                          value={state?.newPassword}
                          onChange={handleChange}
                          placeholder=""
                        />
                        <Button
                          className="bg-transparent border-0 position-absolute p-0 eye"
                          onClick={(e) => togglePassword("newPasswordType")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9M12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.73 16.39 1 12C2.73 7.61 7 4.5 12 4.5ZM3.18 12C3.98825 13.6503 5.24331 15.0407 6.80248 16.0133C8.36165 16.9858 10.1624 17.5013 12 17.5013C13.8376 17.5013 15.6383 16.9858 17.1975 16.0133C18.7567 15.0407 20.0117 13.6503 20.82 12C20.0117 10.3497 18.7567 8.95925 17.1975 7.98675C15.6383 7.01424 13.8376 6.49868 12 6.49868C10.1624 6.49868 8.36165 7.01424 6.80248 7.98675C5.24331 8.95925 3.98825 10.3497 3.18 12V12Z"
                              fill="#C2C2C2"
                            />
                          </svg>
                        </Button>
                      </div>
                    </Col> */}
                    <Col lg="12" className="my-2">
                      <div className="edit-pass d-flex align-items-center">
                        <label className="m-0 form-label2 m-0 me-3">
                          {" "}
                          Confirm Password
                        </label>
                      </div>
                      <div className={"icon-with-div pass position-relative"}>
                        <a
                          onClick={() => setShowpass2(!showPass2)}
                          className="icon-wrp2 position-absolute"
                        >
                          {showPass2 == false ? (
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

                        <Form.Control
                          type={showPass2 == false ? "password" : "text"}
                          name="confirmPassword"
                          value={state?.confirmPassword}
                          onChange={handleChange}
                          placeholder=""
                        />
                      </div>
                    </Col>
                    {/* <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Confirm Password
                      </label>
                      <div className="position-relative pass">
                        <Form.Control
                          type={state?.confirmPasswordType}
                          name="confirmPassword"
                          value={state?.confirmPassword}
                          onChange={handleChange}
                          placeholder=""
                        />
                        <Button
                          className="bg-transparent border-0 position-absolute p-0 eye"
                          onClick={(e) => togglePassword("confirmPasswordType")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9M12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.73 16.39 1 12C2.73 7.61 7 4.5 12 4.5ZM3.18 12C3.98825 13.6503 5.24331 15.0407 6.80248 16.0133C8.36165 16.9858 10.1624 17.5013 12 17.5013C13.8376 17.5013 15.6383 16.9858 17.1975 16.0133C18.7567 15.0407 20.0117 13.6503 20.82 12C20.0117 10.3497 18.7567 8.95925 17.1975 7.98675C15.6383 7.01424 13.8376 6.49868 12 6.49868C10.1624 6.49868 8.36165 7.01424 6.80248 7.98675C5.24331 8.95925 3.98825 10.3497 3.18 12V12Z"
                              fill="#C2C2C2"
                            />
                          </svg>
                        </Button>
                      </div>
                    </Col> */}
                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button
                          className="d-flex align-items-center justify-content-center me-2"
                          onClick={handleSubmit}
                          disabled={errors.disabled}
                        >
                          Submit
                        </Button>
                        <Link
                          to="/customers"
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
export default ChangePasswordForm;

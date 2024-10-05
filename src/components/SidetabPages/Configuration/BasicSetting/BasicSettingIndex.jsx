import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import {
  basicSettingDetails,
  basicSettingUpdate,
} from "../../../../store/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NotificationSetting from "./NotificationSetting";
import { SELECT } from "../../../../Common/InputFields";

const BasicSettingIndex = () => {
  const Data = useSelector(
    (s) => s.Setting.basicSettingDetails?.data?.[0]?.App_Settings
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paymentModes = [{ sandbox: "Sandbox" }, { live: "Live" }];

  const [state, setState] = useState({
    "App_Settings.Admin_Country": "",
    "App_Settings.Admin_Currency": "",
    "App_Settings.Admin_Currency_Code": "",
    "App_Settings.Admin_Email_Address": "",
    "App_Settings.Admin_Phone_Number": "",
    "App_Settings.Admin_TimeZone": "",
    "App_Settings.Contact_Email": "",
    "App_Settings.Display_Date_Timezone": "",
    "App_Settings.Provider_Timeout_in_seconds": 0,

    "App_Settings.Admin_Percentage_Commission": 0,
    "App_Settings.Booking_Percentage_Tax": 0,
    "App_Settings.Booking_cancellation_charges": 0,
    "App_Settings.Default_Search_Radius": 0,
    "App_Settings.Driver_percentage_profit": 0,
    "App_Settings.Payment_Mode": "sandbox",

    "App_Settings.IOS_Driver_App_Force_Version": "",
    "App_Settings.IOS_Provider_App_Force_Version": "",
    "App_Settings.IOS_User_App_Force_Version": "",
    "App_Settings.Android_Driver_App_Force_Version": "",
    "App_Settings.Android_Provider_App_Force_Version": "",
    "App_Settings.Android_User_App_Force_Version": "",
  });

  useEffect(() => {
    setState((pre) => ({
      ...pre,
      "App_Settings.Admin_Country": Data?.Admin_Country,
      "App_Settings.Admin_Currency": Data?.Admin_Currency,
      "App_Settings.Admin_Currency_Code": Data?.Admin_Currency_Code,
      "App_Settings.Admin_Email_Address": Data?.Admin_Email_Address,
      "App_Settings.Admin_Phone_Number": Data?.Admin_Phone_Number,
      "App_Settings.Admin_TimeZone": Data?.Admin_TimeZone,
      "App_Settings.Contact_Email": Data?.Contact_Email,
      "App_Settings.Display_Date_Timezone": Data?.Display_Date_Timezone,
      "App_Settings.Provider_Timeout_in_seconds":
        Data?.Provider_Timeout_in_seconds,

      "App_Settings.Admin_Percentage_Commission":
        Data?.Admin_Percentage_Commission,
      "App_Settings.Booking_Percentage_Tax": Data?.Booking_Percentage_Tax,
      "App_Settings.Booking_cancellation_charges":
        Data?.Booking_cancellation_charges,
      "App_Settings.Default_Search_Radius": Data?.Default_Search_Radius,
      "App_Settings.Driver_percentage_profit": Data?.Driver_percentage_profit,
      "App_Settings.Payment_Mode": Data?.Payment_Mode,

      "App_Settings.Android_Driver_App_Force_Version":
        Data?.Android_Driver_App_Force_Version,
      "App_Settings.Android_Provider_App_Force_Version":
        Data?.Android_Provider_App_Force_Version,
      "App_Settings.Android_User_App_Force_Version":
        Data?.Android_User_App_Force_Version,
      "App_Settings.IOS_Driver_App_Force_Version":
        Data?.IOS_Driver_App_Force_Version,
      "App_Settings.IOS_Provider_App_Force_Version":
        Data?.IOS_Provider_App_Force_Version,
      "App_Settings.IOS_User_App_Force_Version":
        Data?.IOS_User_App_Force_Version,
    }));
  }, [Data]);

  // const disabled =
  //   !state.Contact_Email ||
  //   !state.Admin_Phone_Number ||
  //   !state.Admin_TimeZone ||
  //   !state.Provider_Timeout_in_seconds ||
  //   !state.Default_Search_Radius ||
  //   !state.Admin_Country ||
  //   !state.Android_User_App_Force_Version ||
  //   !state.Android_Provider_App_Force_Version ||
  //   !state.IOS_User_App_Force_Version ||
  //   !state.IOS_Provider_App_Force_Version
  //     ? true
  //     : "";
  useEffect(() => {
    dispatch(basicSettingDetails());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name, value",e.target);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log("state",state);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      // console.log(response.status, "response");
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          dispatch(basicSettingDetails());
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    // console.log("State", state);
    dispatch(basicSettingUpdate(state, callBack));
  };
  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Basic Settings</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="warning-notification px-4 py-3 card-box rounded border">
                <h4 className="m-0">
                  <span className="icn me-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M2.47012 18.0002H17.5301C19.0701 18.0002 20.0301 16.3302 19.2601 15.0002L11.7301 1.99018C10.9601 0.660176 9.04012 0.660176 8.27012 1.99018L0.740121 15.0002C-0.0298788 16.3302 0.930121 18.0002 2.47012 18.0002ZM10.0001 11.0002C9.45012 11.0002 9.00012 10.5502 9.00012 10.0002V8.00018C9.00012 7.45018 9.45012 7.00018 10.0001 7.00018C10.5501 7.00018 11.0001 7.45018 11.0001 8.00018V10.0002C11.0001 10.5502 10.5501 11.0002 10.0001 11.0002ZM11.0001 15.0002H9.00012V13.0002H11.0001V15.0002Z"
                        fill="#EFBA00"
                      />
                    </svg>
                  </span>
                  <b>Warning:</b> Please avoid updating anything on your own.
                  You can contact our development team if you need any changes.
                </h4>
              </div>
            </Col>
            <NotificationSetting />
            <Col lg="7" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <div className="top">
                  <h4 className="dashboard-head m-0">Basic Settings</h4>
                </div>
                <Row className="pt-3">
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Contact Email <span className="text-danger">*</span> 
                    </label>
                    <input
                      type="email"
                      placeholder=""
                      value={state?.["App_Settings.Contact_Email"]}
                      name="App_Settings.Contact_Email"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Contact Number <span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      value={state?.["App_Settings.Admin_Phone_Number"]}
                      name="App_Settings.Admin_Phone_Number"
                      placeholder=""
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Admin Country<span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      placeholder=""
                      value={state?.["App_Settings.Admin_Country"]}
                      onChange={handleChange}
                      className="form-control"
                      name="App_Settings.Admin_Country"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Admin Currency
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      placeholder=""
                      value={state?.["App_Settings.Admin_Currency"]}
                      name="App_Settings.Admin_Currency"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Admin Currency Symbol
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      placeholder=""
                      value={state?.["App_Settings.Admin_Currency_Code"]}
                      name="App_Settings.Admin_Currency_Code"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>
                  {/* <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Admin Commission Percentage 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      placeholder=""
                      value={state?.["App_Settings.Admin_Percentage_Commission"]}
                      name="App_Settings.Admin_Percentage_Commission"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col> */}
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Admin Time Zone
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      placeholder=""
                      value={state?.["App_Settings.Admin_TimeZone"]}
                      name="App_Settings.Admin_TimeZone"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>

                  {/* <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Booking Percentage Tax (%) 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      placeholder="10"
                      value={state?.Booking_Percentage_Tax}
                      name="Booking_Percentage_Tax"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col> */}
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Booking Cancellation Charges 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      placeholder="10"
                      value={
                        state?.["App_Settings.Booking_cancellation_charges"]
                      }
                      name="App_Settings.Booking_cancellation_charges"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Default Search Radius
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type=""
                      placeholder="10"
                      value={state?.["App_Settings.Default_Search_Radius"]}
                      name="App_Settings.Default_Search_Radius"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>

                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Android User App Forced Version 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={
                        state?.["App_Settings.Android_User_App_Force_Version"]
                      }
                      name="App_Settings.Android_User_App_Force_Version"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Android Provider App Forced Version 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={
                        state?.[
                          "App_Settings.Android_Provider_App_Force_Version"
                        ]
                      }
                      name="App_Settings.Android_Provider_App_Force_Version"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      Android Driver App Forced Version 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={
                        state?.["App_Settings.Android_Driver_App_Force_Version"]
                      }
                      name="App_Settings.Android_Driver_App_Force_Version"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      IOS User App Forced Version 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control"
                      value={state?.["App_Settings.IOS_User_App_Force_Version"]}
                      onChange={handleChange}
                      name="App_Settings.IOS_User_App_Force_Version"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      IOS Driver App Forced Version 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={
                        state?.["App_Settings.IOS_Driver_App_Force_Version"]
                      }
                      className="form-control"
                      onChange={handleChange}
                      name="App_Settings.IOS_Driver_App_Force_Version"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    <label htmlFor="" className="form-label2 m-0">
                      IOS Provider App Forced Version 
                      <span className="text-danger">*</span> 
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={
                        state?.["App_Settings.IOS_Provider_App_Force_Version"]
                      }
                      className="form-control"
                      onChange={handleChange}
                      name="App_Settings.IOS_Provider_App_Force_Version"
                    />
                  </Col>
                  <Col md="6" className="my-2">
                    {/* <label htmlFor="" className="form-label2 m-0">
                      Payment Mode
                      <span className="text-danger">*</span> 
                    </label> */}
                    <SELECT
                      label=" Payment Mode"
                      value={state?.["App_Settings.Payment_Mode"]}
                      onChange={handleChange}
                      data={paymentModes}
                      name="App_Settings.Payment_Mode"
                      defaultValue=""
                    />
                    {/* <input
                      type=""
                      placeholder=""
                      value={state?.["App_Settings.Payment_Mode"]}
                      name="App_Settings.Payment_Mode"
                      className="form-control"
                      onChange={handleChange}
                    /> */}
                  </Col>
                  <Col lg="12" className="my-2 btn-wrp">
                    <Button
                      // disabled={disabled}
                      onClick={handleUpdate}
                      className="d-flex align-items-center justify-content-center"
                    >
                      Submit
                    </Button>
                  </Col>

                  {/* <div className="py-2">
                    <div className="bg-white card-box px-4 py-3 rounded">
                      <div className="top">
                        <h4 className="dashboard-head m-0">Seo Settings</h4>
                      </div>
                      <Form>
                        <Row>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Title
                            </label>
                            <input type="text" className="form-control my-1" />
                          </Col>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Meta Keywords
                            </label>
                            <textarea
                              name=""
                              id=""
                              className="form-control my-1"
                              rows="2"
                            ></textarea>
                          </Col>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Meta Description
                            </label>
                            <textarea
                              name=""
                              id=""
                              className="form-control my-1"
                              rows="2"
                            ></textarea>
                          </Col>
                        </Row>
                      </Form>
                      <div className="top">
                        <h4 className="dashboard-head m-0">Facebook</h4>
                      </div>
                      <Form>
                        <Row>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Title
                            </label>
                            <input type="text" className="form-control my-1" />
                          </Col>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Description
                            </label>
                            <textarea
                              name=""
                              id=""
                              className="form-control my-1"
                              rows="2"
                            ></textarea>
                          </Col>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Image Url
                            </label>
                            <input type="text" className="form-control my-1" />
                          </Col>
                        </Row>
                      </Form>
                      <div className="top">
                        <h4 className="dashboard-head m-0">Twitter</h4>
                      </div>
                      <Form>
                        <Row>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Username
                            </label>
                            <input type="text" className="form-control my-1" />
                          </Col>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Title
                            </label>
                            <input type="text" className="form-control my-1" />
                          </Col>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Description
                            </label>
                            <textarea
                              name=""
                              id=""
                              className="form-control my-1"
                              rows="2"
                            ></textarea>
                          </Col>
                          <Col lg="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Image Url
                            </label>
                            <input type="text" className="form-control my-1" />
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div> */}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default BasicSettingIndex;

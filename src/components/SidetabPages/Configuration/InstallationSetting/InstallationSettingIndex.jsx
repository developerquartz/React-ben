import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Accordion, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useDispatch, useSelector } from "react-redux";
import {
  androidAppUrl_Update,
  androidVersion_Update,
  getConfigDetails,
  getConfigUpdate,
  getMailUpdate,
  iosAppUrl_Update,
  paymentConfig_Update,
} from "../../../../store/actions";
import { toast } from "react-toastify";

const InstallationSettingIndex = () => {
  const SmsConfig = useSelector(
    (s) => s.Setting.getconfigDetails?.data?.[0]?.twilio
  );
  const mailConfig = useSelector(
    (s) => s.Setting.getconfigDetails?.data?.[0]?.mailgun
  );
  const livePaymentconfig = useSelector(
    (s) => s.Setting.getconfigDetails?.data?.[0]?.PaymentConfig?.live
  );
  const sandBoxPaymentconfig = useSelector(
    (s) => s.Setting.getconfigDetails?.data?.[0]?.PaymentConfig?.sandbox
  );
  const AppVersionData = useSelector(
    (s) => s.Setting.getconfigDetails?.data?.[0]?.AppVersion
  );

  const AndroidAppURL = useSelector(
    (s) => s.Setting.getconfigDetails?.data?.[0]?.Android_App_URL
  );
  const IosAppURL = useSelector(
    (s) => s.Setting.getconfigDetails?.data?.[0]?.IOS_App_URL
  );
  // console.log(IosAppURL, "IosAppURL");
  const dispatch = useDispatch();
  const [smsData, setSmsData] = useState({
    accountSid: "",
    authToken: "",
    twilioFrom: "",
  });
  const [mailData, setmailData] = useState({
    MAILGUN_API_KEY: "",
    MAILGUN_DOMAIN: "",
    MAILGUN_FROM: "",
  });
  const [livePayment, setLivePayment] = useState({
    Default_Payment_Gateway: "",
    Stripe_Secret_Key: "",
    Stripe_Publishable_Key: "",
    updateType: "live",
  });
  const [sandBoxPayment, setsandBoxPayment] = useState({
    Default_Payment_Gateway: "",
    Stripe_Secret_Key: "",
    Stripe_Publishable_Key: "",
    updateType: "sandbox",
  });
  const [appversion, setAppVersion] = useState({
    Android_User_App_Version: "",
    Android_Provider_App_Version: "",
    IOS_User_App_Version: "",
    IOS_Provider_App_Version: "",
    Android_Driver_App_Version: "",
    IOS_Driver_App_Version: "",
  });
  const [androidAppURl, setandroidAppURl] = useState({
    Android_Client_App_URL: "",
    Android_Provider_App_URL: "",
    Android_Driver_App_URL: "",
  });
  const [iosAppURl, setIosAppURl] = useState({
    IOS_Client_App_URL: "",
    IOS_Provider_App_URL: "",
    IOS_Driver_App_URL: "",
  });
  // console.log(iosAppURl, "iosAppURl");
  useEffect(() => {
    setSmsData((pre) => ({
      ...pre,
      accountSid: SmsConfig?.accountSid,
      authToken: SmsConfig?.authToken,
      twilioFrom: SmsConfig?.twilioFrom,
    }));
  }, [SmsConfig]);
  useEffect(() => {
    setmailData((pre) => ({
      ...pre,
      MAILGUN_API_KEY: mailConfig?.MAILGUN_API_KEY,
      MAILGUN_DOMAIN: mailConfig?.MAILGUN_DOMAIN,
      MAILGUN_FROM: mailConfig?.MAILGUN_FROM,
    }));
  }, [mailConfig]);

  useEffect(() => {
    setLivePayment((pre) => ({
      ...pre,
      Default_Payment_Gateway: livePaymentconfig?.Default_Payment_Gateway,
      Stripe_Secret_Key: livePaymentconfig?.Stripe_Secret_Key,
      Stripe_Publishable_Key: livePaymentconfig?.Stripe_Publishable_Key,
    }));
  }, [livePaymentconfig]);
  useEffect(() => {
    setsandBoxPayment((pre) => ({
      ...pre,
      Default_Payment_Gateway: sandBoxPaymentconfig?.Default_Payment_Gateway,
      Stripe_Secret_Key: sandBoxPaymentconfig?.Stripe_Secret_Key,
      Stripe_Publishable_Key: sandBoxPaymentconfig?.Stripe_Publishable_Key,
    }));
  }, [sandBoxPaymentconfig]);
  useEffect(() => {
    setAppVersion((pre) => ({
      ...pre,
      Android_User_App_Version: AppVersionData?.Android_User_App_Version,
      Android_Provider_App_Version:
        AppVersionData?.Android_Provider_App_Version,
      IOS_User_App_Version: AppVersionData?.IOS_User_App_Version,
      IOS_Provider_App_Version: AppVersionData?.IOS_Provider_App_Version,
      Android_Driver_App_Version: AppVersionData?.Android_Driver_App_Version,
      IOS_Driver_App_Version: AppVersionData?.IOS_Driver_App_Version,
    }));
  }, [AppVersionData]);
  useEffect(() => {
    setAppVersion((pre) => ({
      ...pre,
      Android_User_App_Version: AppVersionData?.Android_User_App_Version,
      Android_Provider_App_Version:
        AppVersionData?.Android_Provider_App_Version,
      IOS_User_App_Version: AppVersionData?.IOS_User_App_Version,
      IOS_Provider_App_Version: AppVersionData?.IOS_Provider_App_Version,
      Android_Driver_App_Version: AppVersionData?.Android_Driver_App_Version,
      IOS_Driver_App_Version: AppVersionData?.IOS_Driver_App_Version,
    }));
  }, [AppVersionData]);
  useEffect(() => {
    setandroidAppURl((pre) => ({
      ...pre,
      Android_Client_App_URL: AndroidAppURL?.Android_Client_App_URL,
      Android_Provider_App_URL: AndroidAppURL?.Android_Provider_App_URL,
      Android_Driver_App_URL: AndroidAppURL?.Android_Driver_App_URL,
    }));
  }, [AndroidAppURL]);
  useEffect(() => {
    setIosAppURl((pre) => ({
      ...pre,
      IOS_Client_App_URL: IosAppURL?.IOS_Client_App_URL,
      IOS_Provider_App_URL: IosAppURL?.IOS_Provider_App_URL,
      IOS_Driver_App_URL: IosAppURL?.IOS_Driver_App_URL,
    }));
  }, [IosAppURL]);

  useEffect(() => {
    dispatch(getConfigDetails());
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSmsData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleMailGun = (e) => {
    const { name, value } = e.target;
    setmailData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLivePayment = (e) => {
    const { name, value } = e.target;
    setLivePayment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSandbox = (e) => {
    const { name, value } = e.target;
    setsandBoxPayment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleAppversion = (e) => {
    const { name, value } = e.target;
    setAppVersion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAndroidUrl = (e) => {
    const { name, value } = e.target;
    setandroidAppURl((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleIosUrl = (e) => {
    const { name, value } = e.target;
    setIosAppURl((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(getConfigUpdate(smsData, callBack));
  };
  const handleMailUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(getMailUpdate(mailData, callBack));
  };
  const handleLivePaymentUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(paymentConfig_Update(livePayment, callBack));
  };

  const handleSandboxPaymentUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(paymentConfig_Update(sandBoxPayment, callBack));
  };
  const handleAppversionUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(androidVersion_Update(appversion, callBack));
  };

  const handleAndroidUrlUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(androidAppUrl_Update(androidAppURl, callBack));
  };

  const handleIosUrlUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(iosAppUrl_Update(iosAppURl, callBack));
  };

  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Installation Settings</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="warning-notification px-4 py-3 card-box rounded border">
                <h4 className="m-0">
                  {" "}
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
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <Accordion defaultActiveKey="0" className="cstm-switch2">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="rounded-pill d-inline-flex align-items-center">
                        <span className="icn me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                          >
                            <path
                              d="M0.00496506 2.04441C0.00515174 1.74441 0.105307 1.49448 0.305431 1.2946C0.505555 1.09473 0.755618 0.994881 1.05562 0.995068L5.10562 0.997588C5.33895 0.997733 5.54324 1.07286 5.71848 1.22297C5.89305 1.37308 6.00526 1.56481 6.05512 1.79818L6.75297 5.24861C6.78616 5.48197 6.76535 5.71962 6.69053 5.96157C6.61505 6.20286 6.50226 6.39846 6.35216 6.54836L4.0007 8.8969C4.76658 10.164 5.67419 11.3229 6.72354 12.3736C7.77289 13.4243 8.89734 14.3 10.0969 15.0007L12.5484 12.6022C12.6985 12.4523 12.8696 12.3564 13.0616 12.3145C13.2529 12.2733 13.4653 12.2695 13.6986 12.3029L17.1982 12.9551C17.4315 12.9886 17.6231 13.097 17.773 13.2805C17.9229 13.4639 17.9977 13.6723 17.9976 13.9056L17.9951 17.9556C17.9949 18.2556 17.8947 18.5056 17.6946 18.7054C17.4945 18.9053 17.2444 19.0051 16.9444 19.005C14.7944 19.0036 12.699 18.523 10.6583 17.563C8.61691 16.6038 6.80936 15.336 5.23568 13.7597C3.66132 12.184 2.39578 10.3752 1.43905 8.33331C0.481656 6.29071 0.00362717 4.19441 0.00496506 2.04441Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        SMS Configuration
                      </div>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Row>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Twilio Account SID
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={smsData?.accountSid}
                              name="accountSid"
                              onChange={handleChange}
                              className="form-control px-2"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Twilio Auth Token
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={smsData?.authToken}
                              name="authToken"
                              onChange={handleChange}
                              className="form-control  px-2"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Twilio Number
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={smsData?.twilioFrom}
                              name="twilioFrom"
                              onChange={handleChange}
                              className="form-control px-2"
                            />
                          </Col>
                          <Col lg="3" className="my-2 align-self-end">
                            <div className=" btn-wrp d-flex algign-items-end h-100">
                              <Button
                                onClick={handleSubmit}
                                className="d-flex align-items-center justify-content-center me-2 w-100"
                              >
                                Submit
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="rounded-pill d-inline-flex align-items-center">
                        <span className="icn me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        MailGun Configuration
                      </div>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Row>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              MailGun API key
                            </label>
                            <input
                              type="text"
                              value={mailData?.MAILGUN_API_KEY}
                              name="MAILGUN_API_KEY"
                              placeholder=""
                              onChange={handleMailGun}
                              className="form-control px-2"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              MAILGUN DOMAIN
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={mailData?.MAILGUN_DOMAIN}
                              name="MAILGUN_DOMAIN"
                              onChange={handleMailGun}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              MAILGUN FROM{" "}
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={mailData?.MAILGUN_FROM}
                              name="MAILGUN_FROM"
                              onChange={handleMailGun}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" className="my-2">
                            <div className="pt-4 btn-wrp d-flex algign-items-end h-100">
                              <Button
                                onClick={handleMailUpdate}
                                className="d-flex align-items-center justify-content-center me-2 w-100"
                              >
                                Submit
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div className="rounded-pill d-inline-flex align-items-center">
                        <span className="icn me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M6.5 5C5.30653 5 4.16193 5.47411 3.31802 6.31802C2.47411 7.16193 2 8.30653 2 9.5V11H30V9.5C30 8.30653 29.5259 7.16193 28.682 6.31802C27.8381 5.47411 26.6935 5 25.5 5H6.5ZM2 22.5V13H30V22.5C30 23.6935 29.5259 24.8381 28.682 25.682C27.8381 26.5259 26.6935 27 25.5 27H6.5C5.30653 27 4.16193 26.5259 3.31802 25.682C2.47411 24.8381 2 23.6935 2 22.5ZM21 19C20.7348 19 20.4804 19.1054 20.2929 19.2929C20.1054 19.4804 20 19.7348 20 20C20 20.2652 20.1054 20.5196 20.2929 20.7071C20.4804 20.8946 20.7348 21 21 21H24C24.2652 21 24.5196 20.8946 24.7071 20.7071C24.8946 20.5196 25 20.2652 25 20C25 19.7348 24.8946 19.4804 24.7071 19.2929C24.5196 19.1054 24.2652 19 24 19H21Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        Live Payment Configuration
                      </div>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Row>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Default Payment Gateway
                            </label>
                            <input
                              type="text"
                              value={livePayment?.Default_Payment_Gateway}
                              name="Default_Payment_Gateway"
                              placeholder=""
                              onChange={handleLivePayment}
                              className="form-control px-2"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Stripe Secret Key
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={livePayment?.Stripe_Secret_Key}
                              name="Stripe_Secret_Key"
                              onChange={handleLivePayment}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Stripe Publishable Key{" "}
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={livePayment?.Stripe_Publishable_Key}
                              name="Stripe_Publishable_Key"
                              onChange={handleLivePayment}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" className="my-2">
                            <div className="pt-4 btn-wrp d-flex algign-items-end h-100">
                              <Button
                                onClick={handleLivePaymentUpdate}
                                className="d-flex align-items-center justify-content-center me-2 w-100"
                              >
                                Submit
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <div className="rounded-pill d-inline-flex align-items-center">
                        <span className="icn me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M6.5 5C5.30653 5 4.16193 5.47411 3.31802 6.31802C2.47411 7.16193 2 8.30653 2 9.5V11H30V9.5C30 8.30653 29.5259 7.16193 28.682 6.31802C27.8381 5.47411 26.6935 5 25.5 5H6.5ZM2 22.5V13H30V22.5C30 23.6935 29.5259 24.8381 28.682 25.682C27.8381 26.5259 26.6935 27 25.5 27H6.5C5.30653 27 4.16193 26.5259 3.31802 25.682C2.47411 24.8381 2 23.6935 2 22.5ZM21 19C20.7348 19 20.4804 19.1054 20.2929 19.2929C20.1054 19.4804 20 19.7348 20 20C20 20.2652 20.1054 20.5196 20.2929 20.7071C20.4804 20.8946 20.7348 21 21 21H24C24.2652 21 24.5196 20.8946 24.7071 20.7071C24.8946 20.5196 25 20.2652 25 20C25 19.7348 24.8946 19.4804 24.7071 19.2929C24.5196 19.1054 24.2652 19 24 19H21Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        SandBox Payment Configuration
                      </div>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Row>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Default Payment Gateway
                            </label>
                            <input
                              type="text"
                              value={sandBoxPayment?.Default_Payment_Gateway}
                              name="Default_Payment_Gateway"
                              placeholder=""
                              onChange={handleSandbox}
                              className="form-control px-2"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Stripe Secret Key
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={sandBoxPayment?.Stripe_Secret_Key}
                              name="Stripe_Secret_Key"
                              onChange={handleSandbox}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Stripe Publishable Key{" "}
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={sandBoxPayment?.Stripe_Publishable_Key}
                              name="Stripe_Publishable_Key"
                              onChange={handleSandbox}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" className="my-2">
                            <div className="pt-4 btn-wrp d-flex algign-items-end h-100">
                              <Button
                                onClick={handleSandboxPaymentUpdate}
                                className="d-flex align-items-center justify-content-center me-2 w-100"
                              >
                                Submit
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>{" "}
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <div className="rounded-pill d-inline-flex align-items-center">
                        <span className="icn me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M14.975 3.019L15.935 1.287C15.9473 1.2648 15.9551 1.24041 15.9579 1.21521C15.9608 1.19 15.9586 1.16449 15.9516 1.14011C15.9446 1.11574 15.9329 1.09298 15.9171 1.07314C15.9013 1.05331 15.8817 1.03678 15.8595 1.0245C15.8373 1.01222 15.8129 1.00443 15.7877 1.00158C15.7625 0.99873 15.737 1.00087 15.7126 1.00788C15.6882 1.01489 15.6655 1.02664 15.6456 1.04244C15.6258 1.05825 15.6093 1.0778 15.597 1.1L14.627 2.85C13.799 2.48695 12.9046 2.29951 12.0005 2.29951C11.0964 2.29951 10.202 2.48695 9.374 2.85L8.404 1.1C8.37921 1.05491 8.33751 1.02152 8.2881 1.00718C8.23868 0.992829 8.18559 0.9987 8.1405 1.0235C8.09542 1.0483 8.06203 1.08999 8.04768 1.1394C8.03333 1.18882 8.03921 1.24191 8.064 1.287L9.024 3.019C8.11059 3.46949 7.33887 4.1628 6.79345 5.0229C6.24803 5.88301 5.94999 6.8767 5.932 7.895H18.069C18.0508 6.87649 17.7525 5.88266 17.2067 5.02253C16.6609 4.1624 15.8888 3.46921 14.975 3.019ZM9.2 5.674C9.09968 5.674 9.00162 5.64424 8.91823 5.58848C8.83483 5.53273 8.76984 5.45349 8.7315 5.36079C8.69316 5.26809 8.68317 5.16609 8.70282 5.06772C8.72246 4.96934 8.77085 4.87901 8.84186 4.80814C8.91286 4.73728 9.00329 4.68907 9.10171 4.66962C9.20012 4.65017 9.30209 4.66035 9.39472 4.69888C9.48734 4.73741 9.56646 4.80254 9.62204 4.88605C9.67763 4.96956 9.7072 5.06768 9.707 5.168C9.70674 5.30229 9.65321 5.43099 9.55815 5.52585C9.4631 5.62072 9.33429 5.674 9.2 5.674ZM14.802 5.674C14.7017 5.674 14.6036 5.64424 14.5202 5.58848C14.4368 5.53273 14.3718 5.45349 14.3335 5.36079C14.2952 5.26809 14.2852 5.16609 14.3048 5.06772C14.3245 4.96934 14.3728 4.87901 14.4439 4.80814C14.5149 4.73728 14.6053 4.68907 14.7037 4.66962C14.8021 4.65017 14.9041 4.66035 14.9967 4.69888C15.0893 4.73741 15.1685 4.80254 15.224 4.88605C15.2796 4.96956 15.3092 5.06768 15.309 5.168C15.3087 5.30229 15.2552 5.43099 15.1602 5.52585C15.0651 5.62072 14.9363 5.674 14.802 5.674ZM5.93 17.171C5.92974 17.3641 5.96759 17.5553 6.04138 17.7337C6.11518 17.9121 6.22346 18.0742 6.36003 18.2107C6.4966 18.3472 6.65876 18.4553 6.83722 18.529C7.01568 18.6027 7.20693 18.6404 7.4 18.64H8.373V21.64C8.373 22.0008 8.51634 22.3469 8.77148 22.602C9.02663 22.8572 9.37268 23.0005 9.7335 23.0005C10.0943 23.0005 10.4404 22.8572 10.6955 22.602C10.9507 22.3469 11.094 22.0008 11.094 21.64V18.64H12.908V21.64C12.908 22.0007 13.0513 22.3466 13.3063 22.6017C13.5614 22.8567 13.9073 23 14.268 23C14.6287 23 14.9746 22.8567 15.2297 22.6017C15.4847 22.3466 15.628 22.0007 15.628 21.64V18.64H16.602C16.7948 18.6401 16.9858 18.6022 17.1639 18.5285C17.3421 18.4548 17.504 18.3467 17.6403 18.2103C17.7767 18.074 17.8848 17.9121 17.9585 17.7339C18.0323 17.5558 18.0701 17.3648 18.07 17.172V8.375H5.93V17.171ZM4.063 8.141C3.7023 8.14153 3.35653 8.28512 3.10157 8.54027C2.84661 8.79542 2.70327 9.14129 2.703 9.502V15.171C2.703 15.3496 2.73818 15.5264 2.80653 15.6914C2.87487 15.8565 2.97505 16.0064 3.10134 16.1327C3.22763 16.259 3.37755 16.3591 3.54255 16.4275C3.70756 16.4958 3.88441 16.531 4.063 16.531C4.2416 16.531 4.41845 16.4958 4.58345 16.4275C4.74846 16.3591 4.89838 16.259 5.02467 16.1327C5.15096 16.0064 5.25113 15.8565 5.31948 15.6914C5.38783 15.5264 5.423 15.3496 5.423 15.171V9.502C5.42247 9.14147 5.27902 8.79585 5.02408 8.54092C4.76915 8.28598 4.42354 8.14253 4.063 8.142V8.141ZM19.935 8.141C19.5743 8.14153 19.2285 8.28512 18.9736 8.54027C18.7186 8.79542 18.5753 9.14129 18.575 9.502V15.171C18.575 15.3496 18.6102 15.5264 18.6785 15.6914C18.7469 15.8565 18.8471 16.0064 18.9733 16.1327C19.0996 16.259 19.2496 16.3591 19.4146 16.4275C19.5796 16.4958 19.7564 16.531 19.935 16.531C20.1136 16.531 20.2904 16.4958 20.4555 16.4275C20.6205 16.3591 20.7704 16.259 20.8967 16.1327C21.023 16.0064 21.1231 15.8565 21.1915 15.6914C21.2598 15.5264 21.295 15.3496 21.295 15.171V9.502C21.2945 9.14147 21.151 8.79585 20.8961 8.54092C20.6411 8.28598 20.2955 8.14253 19.935 8.142V8.141Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        App Version{" "}
                      </div>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Row>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Android User App Version{" "}
                            </label>
                            <input
                              type="text"
                              value={appversion?.Android_User_App_Version}
                              name="Android_User_App_Version"
                              placeholder=""
                              onChange={handleAppversion}
                              className="form-control px-2"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Android Provider App Version
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={appversion?.Android_Provider_App_Version}
                              name="Android_Provider_App_Version"
                              onChange={handleAppversion}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              IOS User App Version{" "}
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={appversion?.IOS_User_App_Version}
                              name="IOS_User_App_Version"
                              onChange={handleAppversion}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              IOS Provider App Version{" "}
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={appversion?.IOS_Provider_App_Version}
                              name="IOS_Provider_App_Version"
                              onChange={handleAppversion}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Android Driver App Version{" "}
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={appversion?.Android_Driver_App_Version}
                              name="Android_Driver_App_Version"
                              onChange={handleAppversion}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              IOS Driver App Version{" "}
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={appversion?.IOS_Driver_App_Version}
                              name="IOS_Driver_App_Version"
                              onChange={handleAppversion}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" className="my-2">
                            <div className="pt-4 btn-wrp d-flex algign-items-end h-100">
                              <Button
                                onClick={handleAppversionUpdate}
                                className="d-flex align-items-center justify-content-center me-2 w-100"
                              >
                                Submit
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <div className="rounded-pill d-inline-flex align-items-center">
                        <span className="icn me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M14.975 3.019L15.935 1.287C15.9473 1.2648 15.9551 1.24041 15.9579 1.21521C15.9608 1.19 15.9586 1.16449 15.9516 1.14011C15.9446 1.11574 15.9329 1.09298 15.9171 1.07314C15.9013 1.05331 15.8817 1.03678 15.8595 1.0245C15.8373 1.01222 15.8129 1.00443 15.7877 1.00158C15.7625 0.99873 15.737 1.00087 15.7126 1.00788C15.6882 1.01489 15.6655 1.02664 15.6456 1.04244C15.6258 1.05825 15.6093 1.0778 15.597 1.1L14.627 2.85C13.799 2.48695 12.9046 2.29951 12.0005 2.29951C11.0964 2.29951 10.202 2.48695 9.374 2.85L8.404 1.1C8.37921 1.05491 8.33751 1.02152 8.2881 1.00718C8.23868 0.992829 8.18559 0.9987 8.1405 1.0235C8.09542 1.0483 8.06203 1.08999 8.04768 1.1394C8.03333 1.18882 8.03921 1.24191 8.064 1.287L9.024 3.019C8.11059 3.46949 7.33887 4.1628 6.79345 5.0229C6.24803 5.88301 5.94999 6.8767 5.932 7.895H18.069C18.0508 6.87649 17.7525 5.88266 17.2067 5.02253C16.6609 4.1624 15.8888 3.46921 14.975 3.019ZM9.2 5.674C9.09968 5.674 9.00162 5.64424 8.91823 5.58848C8.83483 5.53273 8.76984 5.45349 8.7315 5.36079C8.69316 5.26809 8.68317 5.16609 8.70282 5.06772C8.72246 4.96934 8.77085 4.87901 8.84186 4.80814C8.91286 4.73728 9.00329 4.68907 9.10171 4.66962C9.20012 4.65017 9.30209 4.66035 9.39472 4.69888C9.48734 4.73741 9.56646 4.80254 9.62204 4.88605C9.67763 4.96956 9.7072 5.06768 9.707 5.168C9.70674 5.30229 9.65321 5.43099 9.55815 5.52585C9.4631 5.62072 9.33429 5.674 9.2 5.674ZM14.802 5.674C14.7017 5.674 14.6036 5.64424 14.5202 5.58848C14.4368 5.53273 14.3718 5.45349 14.3335 5.36079C14.2952 5.26809 14.2852 5.16609 14.3048 5.06772C14.3245 4.96934 14.3728 4.87901 14.4439 4.80814C14.5149 4.73728 14.6053 4.68907 14.7037 4.66962C14.8021 4.65017 14.9041 4.66035 14.9967 4.69888C15.0893 4.73741 15.1685 4.80254 15.224 4.88605C15.2796 4.96956 15.3092 5.06768 15.309 5.168C15.3087 5.30229 15.2552 5.43099 15.1602 5.52585C15.0651 5.62072 14.9363 5.674 14.802 5.674ZM5.93 17.171C5.92974 17.3641 5.96759 17.5553 6.04138 17.7337C6.11518 17.9121 6.22346 18.0742 6.36003 18.2107C6.4966 18.3472 6.65876 18.4553 6.83722 18.529C7.01568 18.6027 7.20693 18.6404 7.4 18.64H8.373V21.64C8.373 22.0008 8.51634 22.3469 8.77148 22.602C9.02663 22.8572 9.37268 23.0005 9.7335 23.0005C10.0943 23.0005 10.4404 22.8572 10.6955 22.602C10.9507 22.3469 11.094 22.0008 11.094 21.64V18.64H12.908V21.64C12.908 22.0007 13.0513 22.3466 13.3063 22.6017C13.5614 22.8567 13.9073 23 14.268 23C14.6287 23 14.9746 22.8567 15.2297 22.6017C15.4847 22.3466 15.628 22.0007 15.628 21.64V18.64H16.602C16.7948 18.6401 16.9858 18.6022 17.1639 18.5285C17.3421 18.4548 17.504 18.3467 17.6403 18.2103C17.7767 18.074 17.8848 17.9121 17.9585 17.7339C18.0323 17.5558 18.0701 17.3648 18.07 17.172V8.375H5.93V17.171ZM4.063 8.141C3.7023 8.14153 3.35653 8.28512 3.10157 8.54027C2.84661 8.79542 2.70327 9.14129 2.703 9.502V15.171C2.703 15.3496 2.73818 15.5264 2.80653 15.6914C2.87487 15.8565 2.97505 16.0064 3.10134 16.1327C3.22763 16.259 3.37755 16.3591 3.54255 16.4275C3.70756 16.4958 3.88441 16.531 4.063 16.531C4.2416 16.531 4.41845 16.4958 4.58345 16.4275C4.74846 16.3591 4.89838 16.259 5.02467 16.1327C5.15096 16.0064 5.25113 15.8565 5.31948 15.6914C5.38783 15.5264 5.423 15.3496 5.423 15.171V9.502C5.42247 9.14147 5.27902 8.79585 5.02408 8.54092C4.76915 8.28598 4.42354 8.14253 4.063 8.142V8.141ZM19.935 8.141C19.5743 8.14153 19.2285 8.28512 18.9736 8.54027C18.7186 8.79542 18.5753 9.14129 18.575 9.502V15.171C18.575 15.3496 18.6102 15.5264 18.6785 15.6914C18.7469 15.8565 18.8471 16.0064 18.9733 16.1327C19.0996 16.259 19.2496 16.3591 19.4146 16.4275C19.5796 16.4958 19.7564 16.531 19.935 16.531C20.1136 16.531 20.2904 16.4958 20.4555 16.4275C20.6205 16.3591 20.7704 16.259 20.8967 16.1327C21.023 16.0064 21.1231 15.8565 21.1915 15.6914C21.2598 15.5264 21.295 15.3496 21.295 15.171V9.502C21.2945 9.14147 21.151 8.79585 20.8961 8.54092C20.6411 8.28598 20.2955 8.14253 19.935 8.142V8.141Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        Android App Url
                      </div>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Row>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Android Client App URL
                            </label>
                            <input
                              type="text"
                              value={androidAppURl?.Android_Client_App_URL}
                              name="Android_Client_App_URL"
                              onChange={handleAndroidUrl}
                              placeholder=""
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Android Provider App URL
                            </label>
                            <input
                              type="text"
                              value={androidAppURl?.Android_Provider_App_URL}
                              name="Android_Provider_App_URL"
                              placeholder=""
                              onChange={handleAndroidUrl}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              Android Driver App URL{" "}
                            </label>
                            <input
                              type="text"
                              value={androidAppURl?.Android_Driver_App_URL}
                              name="Android_Driver_App_URL"
                              onChange={handleAndroidUrl}
                              placeholder=""
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" className="my-2">
                            <div className="pt-4 btn-wrp d-flex algign-items-end h-100">
                              <Button
                                onClick={handleAndroidUrlUpdate}
                                className="d-flex align-items-center justify-content-center me-2 w-100"
                              >
                                Submit
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      <div className="rounded-pill d-inline-flex align-items-center">
                        <span className="icn me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M14.975 3.019L15.935 1.287C15.9473 1.2648 15.9551 1.24041 15.9579 1.21521C15.9608 1.19 15.9586 1.16449 15.9516 1.14011C15.9446 1.11574 15.9329 1.09298 15.9171 1.07314C15.9013 1.05331 15.8817 1.03678 15.8595 1.0245C15.8373 1.01222 15.8129 1.00443 15.7877 1.00158C15.7625 0.99873 15.737 1.00087 15.7126 1.00788C15.6882 1.01489 15.6655 1.02664 15.6456 1.04244C15.6258 1.05825 15.6093 1.0778 15.597 1.1L14.627 2.85C13.799 2.48695 12.9046 2.29951 12.0005 2.29951C11.0964 2.29951 10.202 2.48695 9.374 2.85L8.404 1.1C8.37921 1.05491 8.33751 1.02152 8.2881 1.00718C8.23868 0.992829 8.18559 0.9987 8.1405 1.0235C8.09542 1.0483 8.06203 1.08999 8.04768 1.1394C8.03333 1.18882 8.03921 1.24191 8.064 1.287L9.024 3.019C8.11059 3.46949 7.33887 4.1628 6.79345 5.0229C6.24803 5.88301 5.94999 6.8767 5.932 7.895H18.069C18.0508 6.87649 17.7525 5.88266 17.2067 5.02253C16.6609 4.1624 15.8888 3.46921 14.975 3.019ZM9.2 5.674C9.09968 5.674 9.00162 5.64424 8.91823 5.58848C8.83483 5.53273 8.76984 5.45349 8.7315 5.36079C8.69316 5.26809 8.68317 5.16609 8.70282 5.06772C8.72246 4.96934 8.77085 4.87901 8.84186 4.80814C8.91286 4.73728 9.00329 4.68907 9.10171 4.66962C9.20012 4.65017 9.30209 4.66035 9.39472 4.69888C9.48734 4.73741 9.56646 4.80254 9.62204 4.88605C9.67763 4.96956 9.7072 5.06768 9.707 5.168C9.70674 5.30229 9.65321 5.43099 9.55815 5.52585C9.4631 5.62072 9.33429 5.674 9.2 5.674ZM14.802 5.674C14.7017 5.674 14.6036 5.64424 14.5202 5.58848C14.4368 5.53273 14.3718 5.45349 14.3335 5.36079C14.2952 5.26809 14.2852 5.16609 14.3048 5.06772C14.3245 4.96934 14.3728 4.87901 14.4439 4.80814C14.5149 4.73728 14.6053 4.68907 14.7037 4.66962C14.8021 4.65017 14.9041 4.66035 14.9967 4.69888C15.0893 4.73741 15.1685 4.80254 15.224 4.88605C15.2796 4.96956 15.3092 5.06768 15.309 5.168C15.3087 5.30229 15.2552 5.43099 15.1602 5.52585C15.0651 5.62072 14.9363 5.674 14.802 5.674ZM5.93 17.171C5.92974 17.3641 5.96759 17.5553 6.04138 17.7337C6.11518 17.9121 6.22346 18.0742 6.36003 18.2107C6.4966 18.3472 6.65876 18.4553 6.83722 18.529C7.01568 18.6027 7.20693 18.6404 7.4 18.64H8.373V21.64C8.373 22.0008 8.51634 22.3469 8.77148 22.602C9.02663 22.8572 9.37268 23.0005 9.7335 23.0005C10.0943 23.0005 10.4404 22.8572 10.6955 22.602C10.9507 22.3469 11.094 22.0008 11.094 21.64V18.64H12.908V21.64C12.908 22.0007 13.0513 22.3466 13.3063 22.6017C13.5614 22.8567 13.9073 23 14.268 23C14.6287 23 14.9746 22.8567 15.2297 22.6017C15.4847 22.3466 15.628 22.0007 15.628 21.64V18.64H16.602C16.7948 18.6401 16.9858 18.6022 17.1639 18.5285C17.3421 18.4548 17.504 18.3467 17.6403 18.2103C17.7767 18.074 17.8848 17.9121 17.9585 17.7339C18.0323 17.5558 18.0701 17.3648 18.07 17.172V8.375H5.93V17.171ZM4.063 8.141C3.7023 8.14153 3.35653 8.28512 3.10157 8.54027C2.84661 8.79542 2.70327 9.14129 2.703 9.502V15.171C2.703 15.3496 2.73818 15.5264 2.80653 15.6914C2.87487 15.8565 2.97505 16.0064 3.10134 16.1327C3.22763 16.259 3.37755 16.3591 3.54255 16.4275C3.70756 16.4958 3.88441 16.531 4.063 16.531C4.2416 16.531 4.41845 16.4958 4.58345 16.4275C4.74846 16.3591 4.89838 16.259 5.02467 16.1327C5.15096 16.0064 5.25113 15.8565 5.31948 15.6914C5.38783 15.5264 5.423 15.3496 5.423 15.171V9.502C5.42247 9.14147 5.27902 8.79585 5.02408 8.54092C4.76915 8.28598 4.42354 8.14253 4.063 8.142V8.141ZM19.935 8.141C19.5743 8.14153 19.2285 8.28512 18.9736 8.54027C18.7186 8.79542 18.5753 9.14129 18.575 9.502V15.171C18.575 15.3496 18.6102 15.5264 18.6785 15.6914C18.7469 15.8565 18.8471 16.0064 18.9733 16.1327C19.0996 16.259 19.2496 16.3591 19.4146 16.4275C19.5796 16.4958 19.7564 16.531 19.935 16.531C20.1136 16.531 20.2904 16.4958 20.4555 16.4275C20.6205 16.3591 20.7704 16.259 20.8967 16.1327C21.023 16.0064 21.1231 15.8565 21.1915 15.6914C21.2598 15.5264 21.295 15.3496 21.295 15.171V9.502C21.2945 9.14147 21.151 8.79585 20.8961 8.54092C20.6411 8.28598 20.2955 8.14253 19.935 8.142V8.141Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        IOS App Url
                      </div>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Row>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              IOS Client App URL
                            </label>
                            <input
                              type="text"
                              value={iosAppURl?.IOS_Client_App_URL}
                              name="IOS_Client_App_URL"
                              onChange={handleIosUrl}
                              placeholder=""
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              IOS Provider App URL
                            </label>
                            <input
                              type="text"
                              value={iosAppURl?.IOS_Provider_App_URL}
                              name="IOS_Provider_App_URL"
                              placeholder=""
                              onChange={handleIosUrl}
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" md="4" sm="6" className="my-2">
                            <label for="" className="form-label2 m-0">
                              IOS Driver App URL{" "}
                            </label>
                            <input
                              type="text"
                              value={iosAppURl?.IOS_Driver_App_URL}
                              name="IOS_Driver_App_URL"
                              onChange={handleIosUrl}
                              placeholder=""
                              className="form-control"
                            />
                          </Col>
                          <Col lg="3" className="my-2">
                            <div className="pt-4 btn-wrp d-flex algign-items-end h-100">
                              <Button
                                onClick={handleIosUrlUpdate}
                                className="d-flex align-items-center justify-content-center me-2 w-100"
                              >
                                Submit
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default InstallationSettingIndex;

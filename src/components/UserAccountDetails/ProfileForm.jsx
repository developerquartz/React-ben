import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { fileUpload, getProfile, getDocuments } from "../../store/actions";
import { isEmail, isEmpty } from "validator";
import { PASS_REGEX, Numeric } from "../../Services/URLS";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { MenuItem, Select } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import moment from "moment";
import Loading from "../../Common/extra/loading";
import {
  forgotPassOtp,
  getUserProfile,
  updateUserData,
  userData,
} from "../../store/actions";
import { checkValidations } from "../../Services/Helper";

var UsStates = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

const MarryStatus = [
  {
    name: "single",
    id: "single",
  },
  {
    name: "married filing jointly",
    id: "married filing jointly",
  },
  {
    name: "married filing separately",
    id: "married filing separately",
  },
  {
    name: "head of household",
    id: "head of household",
  },
  {
    name: "qualifying widow(er)",
    id: "qualifying widow(er)",
  },
];

const Languages = [
  {
    name: "English",
    id: "ENG",
  },
  {
    name: "Spanish",
    id: "ESP",
  },
];

const TaxAgnecy = [
  {
    name: "Federal",
    id: "FEDERAL",
  },
  {
    name: "State",
    id: "STATE",
  },
];

const TaxType = [
  {
    name: "Personal",
    id: "Personal",
  },
  {
    name: "Business",
    id: "Business",
  },
  {
    name: "Personal and Business",
    id: "Personal and Business",
  },
  {
    name: "Payrol",
    id: "Payrol",
  },
  {
    name: "Other",
    id: "Other",
  },
];

const TaxProblems = [
  {
    name: "Assets Seized",
    id: "ASSETS_SEIZED",
  },
  {
    name: "Bank Account Levy",
    id: "BANK_ACCOUNT_LEVY",
  },
  {
    name: "Can't Pay Unpaid Taxes",
    id: "CANT_PAY_UNPAID_TAXES",
  },
  {
    name: "Innocent Spouse",
    id: "INNOCENT_SPOUSE",
  },
  {
    name: "License Suspension Revocation",
    id: "License_Suspension_Revocation",
  },
  {
    name: "Lien Filed",
    id: "LIEN_FILED",
  },
  {
    name: "Passport Suspension Revocation",
    id: "Passport_Suspension_Revocation",
  },
  {
    name: "Received Audit Notice",
    id: "RECEIVED_AUDIT_NOTICE",
  },
  {
    name: "Unpaid Penalties and Interest",
    id: "UNPAID_PENALTIES_AND_INTEREST",
  },
  {
    name: "Wage Garnishment",
    id: "WAGE_GARNISHMENT",
  },
  {
    name: "Received IRS Letter",
    id: "RECEIVED_IRS_LETTER",
  },
  {
    name: "Issue Claiming Dependents",
    id: "ISSUE_CLAIMING_DEPENDENTS",
  },
  {
    name: "ID Theft",
    id: "ID_THEFT",
  },
  {
    name: "IRS Refund",
    id: "IRS_REFUND",
  },
  {
    name: "Other",
    id: "OTHER",
  },
];

const BusinessTypes = [
  {
    name: "Sole Proprietorship",
    id: "sole proprietorship",
  },
  {
    name: "Partnership",
    id: "partnership",
  },
  {
    name: "LLP",
    id: "llp",
  },
  {
    name: "LLC (Single)",
    id: "llc (single)",
  },
  {
    name: "LLC (Multiple)",
    id: "llc (multiple)",
  },
  {
    name: "S Corp",
    id: "s corp",
  },
  {
    name: "C Corp",
    id: "c corp",
  },
];

const ProfileForm = () => {
  const currentDate = new Date();
  const minDate = new Date();
  minDate.setFullYear(currentDate.getFullYear() - 18);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    userId: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
    AptNo: "",
    City: "",
    State: "",
    Zip: "",
    document_template: "",
    CellPhone: "",
    WorkPhone: "",
    HomePhone: "",
    DOB: moment(new Date()).format("YYYY-MM-DD"),
    SSN: "",
    Marital_Status: "",
    TAX_RELIEF_TAX_AGENCY: "",
    Notes: "",
    Language: "",
    TAX_RELIEF_TAX_TYPE: "",
    SourceName: "",
    BusinessType: "",
    BusinessName: "",
    EIN: "",
    SMSPermit: "",
    TaxProblem: "",
  });
  console.log(data, "tax problem");
  const [errors, setError] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
    AptNo: "",
    City: "",
    State: "",
    Zip: "",
    document_template: "",
    CellPhone: "",
    WorkPhone: "",
    HomePhone: "",
    DOB: "",
    SSN: "",
    Marital_Status: "",
    TAX_RELIEF_TAX_AGENCY: "",
    Notes: "",
    Language: "",
    TAX_RELIEF_TAX_TYPE: "",
    SourceName: "",
    BusinessType: "",
    BusinessName: "",
    EIN: "",
    SMSPermit: "",
    TaxProblem: "",
    OpenerName: "",
    SETOfficerName: "",
    TaxPreparerName: "",
    DistributionId: "",
    StatusID: "",
    ProductID: "",
    UDF: "",
    disabled: true,
  });
  const user = useSelector((s) => s?.login?.profile?.data);
  const userId = localStorage && localStorage.getItem("id");
  console.log(errors.disabled, "error disabled");
  useEffect(() => {
    if (userId) {
      dispatch(userData({ id: userId }));
    }
  }, [userId]);

  useEffect(() => {
    let validate = checkValidations(data);
    console.log(validate, "validatee");
    if (
      validate.error ===
      "BusinessType,BusinessName,EIN,OpenerName,SETOfficerName,TaxPreparerName,DistributionId,StatusID,ProductID,UDF is required!"
    ) {
      setError((pre) => ({ ...pre, disabled: false }));
    } else if (
      validate.error ===
      "OpenerName,SETOfficerName,TaxPreparerName,DistributionId,StatusID,ProductID,UDF is required!"
    ) {
      setError((pre) => ({ ...pre, disabled: false }));
    } else if (validate.error === "UDF is required!") {
      setError((pre) => ({ ...pre, disabled: false }));
    } else if (validate.error === "UDF is required!") {
      setError((pre) => ({ ...pre, disabled: false }));
    } else {
      setError((pre) => ({ ...pre, disabled: true }));
    }
  }, [data]);

  useEffect(() => {
    if (user?.amtaxsettlement_data) {
      setData((pre) => ({
        ...pre,
        userId: user?.id,
        FirstName: user?.amtaxsettlement_data?.FirstName,
        LastName: user?.amtaxsettlement_data?.LastName,
        Email: user?.amtaxsettlement_data?.Email,
        Address: user?.amtaxsettlement_data?.Address,
        AptNo: user?.amtaxsettlement_data?.AptNo,
        City: user?.amtaxsettlement_data?.City,
        State: user?.amtaxsettlement_data?.State,
        Zip: user?.amtaxsettlement_data?.Zip,
        document_template: user?.document_template,
        CellPhone: user?.amtaxsettlement_data?.CellPhone.replace(/[\D]/g, ""),
        WorkPhone: user?.amtaxsettlement_data?.WorkPhone.replace(/[\D]/g, ""),
        HomePhone: user?.amtaxsettlement_data?.HomePhone.replace(/[\D]/g, ""),
        DOB: moment(user?.amtaxsettlement_data?.DOB).format("YYYY-MM-DD"),
        SSN: user?.amtaxsettlement_data?.SSN.replace(/[\D]/g, ""),
        Marital_Status: user?.amtaxsettlement_data?.Marital_Status,
        TAX_RELIEF_TAX_AGENCY:
          user?.amtaxsettlement_data?.TAX_RELIEF_TAX_AGENCY,
        Notes: user?.amtaxsettlement_data?.Notes,
        Language: user?.amtaxsettlement_data?.Language,
        TAX_RELIEF_TAX_TYPE: user?.amtaxsettlement_data?.TAX_RELIEF_TAX_TYPE,
        SourceName: user?.amtaxsettlement_data?.SourceName,
        BusinessType: user?.amtaxsettlement_data?.BusinessType,
        BusinessName: user?.amtaxsettlement_data?.BusinessName,
        EIN: user?.amtaxsettlement_data?.EIN,
        SMSPermit: user?.amtaxsettlement_data?.SMSPermit,
        TaxProblem: user?.amtaxsettlement_data?.TaxProblem,
        OpenerName: user?.amtaxsettlement_data?.OpenerName || "",
        SETOfficerName: user?.amtaxsettlement_data?.SETOfficerName || "",
        TaxPreparerName: user?.amtaxsettlement_data?.TaxPreparerName || "",
        DistributionId: user?.amtaxsettlement_data?.DistributionId || "",
        StatusID: user?.amtaxsettlement_data?.StatusID || "",
        ProductID: user?.amtaxsettlement_data?.ProductID || "",
        UDF: user?.amtaxsettlement_data?.UDF || "",
      }));
    } else {
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "FirstName":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;
      case "LastName":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "Email": {
        if (isEmpty(value)) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else if (!isEmail(value)) {
          Error[name] = "Invalid Email";

          Error["disabled"] = true;
        } else {
          Error[name] = "";
          Error["disabled"] = true;
        }
        break;
      }
      case "Address":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "AptNo":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "City":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "State":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "Zip":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "DOB":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "SSN":
        Error[name] = "";
        if (value.length < 9) {
          Error[name] = "Social Security Number must contain 9 digits";
          Error["disabled"] = true;
        } else if (value.length > 9) {
          Error[name] = "Social Security Number must contain 9 digits";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "Marital_Status":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "TAX_RELIEF_TAX_AGENCY":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "Notes":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "Language":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "TaxProblem":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "TAX_RELIEF_TAX_TYPE":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "SourceName":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      // case "BusinessType":
      //   Error[name] = "";
      //   if (value.length < 1) {
      //     Error[name] = "Required";
      //     Error["disabled"] = true;
      //   } else {
      //     Error["disabled"] = true;
      //   }
      //   break;

      // case "BusinessName":
      //   Error[name] = "";
      //   if (value.length < 1) {
      //     Error[name] = "Required";
      //     Error["disabled"] = true;
      //   } else {
      //     Error["disabled"] = true;
      //   }
      //   break;
      // case "EIN":
      //   Error[name] = "";
      //   if (value.length < 1) {
      //     Error[name] = "Required";
      //     Error["disabled"] = true;
      //   } else {
      //     Error["disabled"] = true;
      //   }
      //   break;
      case "SMSPermit":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "document_template":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      default:
        break;
    }
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const callBack = (response) => {
      if (response.data) {
        dispatch(userData({ id: userId }));
        setLoading(false);
      }
    };
    let body = {
      userId: data.userId,
      FirstName: data.FirstName,
      LastName: data.LastName,
      Email: data.Email,
      Address: data.Address,
      AptNo: data.AptNo,
      City: data.City,
      State: data.State,
      Zip: data.Zip,
      document_template: data.document_template,
      CellPhone: "+" + data.CellPhone,
      WorkPhone: "+" + data.WorkPhone,
      HomePhone: "+" + data.HomePhone,
      DOB: moment(data.DOB).format("MM/DD/YYYY"),
      SSN: data.SSN,
      Marital_Status: data.Marital_Status,
      TAX_RELIEF_TAX_AGENCY: data.TAX_RELIEF_TAX_AGENCY,
      Notes: data.Notes,
      Language: data.Language,
      TAX_RELIEF_TAX_TYPE: data.TAX_RELIEF_TAX_TYPE,
      SourceName: data.SourceName,
      SMSPermit: data.SMSPermit,
      TaxProblem: data.TaxProblem,
      OpenerName: data.OpenerName,
      SETOfficerName: data.SETOfficerName,
      TaxPreparerName: data.TaxPreparerName,
      DistributionId: data.DistributionId,
      StatusID: data.StatusID,
      ProductID: data.ProductID,
      UDF: data.UDF,
      status: "active",
    };

    let businessBody = {
      BusinessType: data.BusinessType,
      BusinessName: data.BusinessName,
      EIN: data.EIN,
    };

    let finalBody;
    if (
      data.TAX_RELIEF_TAX_TYPE == "Personal and Business" ||
      data.TAX_RELIEF_TAX_TYPE == "Business"
    ) {
      console.log("running ture");
      finalBody = { ...body, ...businessBody };
    } else {
      finalBody = { ...body };
    }

    dispatch(updateUserData(finalBody, callBack));
  };

  const handlePhone = (name, phoneNumber, dialCode, validate) => {
    if (!phoneNumber || !dialCode) return false;
    const Error = { ...errors };
    switch (name) {
      case "CellPhone":
        if (!validate) {
          Error[name] = "Invalid Number";
        } else {
          Error[name] = "";
        }
        break;

      case "WorkPhone":
        if (!validate) {
          Error[name] = "Invalid Number";
        } else {
          Error[name] = "";
        }
        break;

      case "HomePhone":
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
  return (
    <>
      {loading && <Loading className={"cstmLoader"} />}
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item>Profile</Breadcrumb.Item>
                  <Breadcrumb.Item active>Edit</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row className="align-items-start">
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="FirstName"
                        value={data?.FirstName}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.FirstName}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="LastName"
                        value={data?.LastName}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.LastName}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Email
                      </label>
                      <input
                        type="email"
                        name="Email"
                        value={data?.Email}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.Email}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 col-12 phone-input">
                      <label for="" className="form-label2 m-0">
                        Cell Phone
                      </label>
                      <PhoneInput
                        country={"us"}
                        value={data.CellPhone}
                        onChange={(data, country) => {
                          let validateWithLength = country.format?.split(".");
                          validateWithLength = validateWithLength?.length - 1;
                          if (validateWithLength == data.length) {
                            handlePhone(
                              "CellPhone",
                              data,
                              country.dialCode,
                              true
                            );
                          } else {
                            handlePhone(
                              "CellPhone",
                              data,
                              country.dialCode,
                              false
                            );
                          }
                        }}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.CellPhone}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 col-12">
                      <label for="" className="form-label2 m-0">
                        Work Phone
                      </label>
                      <PhoneInput
                        country={"us"}
                        value={data.WorkPhone}
                        onChange={(data, country) => {
                          let validateWithLength = country.format?.split(".");
                          validateWithLength = validateWithLength?.length - 1;
                          if (validateWithLength == data.length) {
                            handlePhone(
                              "WorkPhone",
                              data,
                              country.dialCode,
                              true
                            );
                          } else {
                            handlePhone(
                              "WorkPhone",
                              data,
                              country.dialCode,
                              false
                            );
                          }
                        }}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.WorkPhone}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 col-12">
                      <label for="" className="form-label2 m-0">
                        Home Phone
                      </label>
                      <PhoneInput
                        country={"us"}
                        value={data.HomePhone}
                        onChange={(data, country) => {
                          let validateWithLength = country.format?.split(".");
                          validateWithLength = validateWithLength?.length - 1;
                          if (validateWithLength == data.length) {
                            handlePhone(
                              "HomePhone",
                              data,
                              country.dialCode,
                              true
                            );
                          } else {
                            handlePhone(
                              "HomePhone",
                              data,
                              country.dialCode,
                              false
                            );
                          }
                        }}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.HomePhone}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Address
                      </label>
                      <input
                        type="text"
                        name="Address"
                        value={data?.Address}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.Address}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Apt No.
                      </label>
                      <input
                        type="text"
                        name="AptNo"
                        value={data?.AptNo}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />

                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.AptNo}
                      </span>
                    </Col>

                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        City
                      </label>
                      <input
                        type="text"
                        name="City"
                        value={data?.City}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.City}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 doc-select">
                      <label htmlFor="" className="form-label2 m-0">
                        State
                      </label>
                      {/* <input
                        type="text"
                        name="State"
                        value={data?.State}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      /> */}
                      <Select
                        className="demo-simple-select-label mt-2"
                        id="demo-simple-select"
                        name="State"
                        value={data.State}
                        onChange={handleChange}
                        MenuProps={UsStates}
                      >
                        {UsStates &&
                          UsStates.length > 0 &&
                          UsStates.map((item, idx) => {
                            return (
                              <MenuItem key={item.code} value={item.code}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.State}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Zip
                      </label>
                      <input
                        type="number"
                        name="Zip"
                        value={data?.Zip}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.Zip}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        DOB
                      </label>
                      <input
                        type="date"
                        name="DOB"
                        value={data?.DOB}
                        onChange={handleChange}
                        placeholder=""
                        max={minDate.toISOString().split("T")[0]}
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.DOB}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        SSN
                      </label>
                      <input
                        type="number"
                        name="SSN"
                        value={data?.SSN}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.SSN}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 doc-select">
                      <label htmlFor="" className="form-label2 m-0">
                        Marital Status
                      </label>
                      <Select
                        className="demo-simple-select-label mt-2"
                        id="demo-simple-select"
                        name="Marital_Status"
                        value={data.Marital_Status}
                        onChange={handleChange}
                        MenuProps={MarryStatus}
                      >
                        {MarryStatus &&
                          MarryStatus.length > 0 &&
                          MarryStatus.map((item, idx) => {
                            return (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.Marital_Status}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 doc-select">
                      <label htmlFor="" className="form-label2 m-0">
                        Tax Relief Tax Agency
                      </label>
                      <Select
                        className="demo-simple-select-label mt-2"
                        id="demo-simple-select"
                        name="TAX_RELIEF_TAX_AGENCY"
                        value={data.TAX_RELIEF_TAX_AGENCY}
                        onChange={handleChange}
                        MenuProps={TaxAgnecy}
                      >
                        {TaxAgnecy &&
                          TaxAgnecy.length > 0 &&
                          TaxAgnecy.map((item, idx) => {
                            return (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.TAX_RELIEF_TAX_AGENCY}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Notes
                      </label>
                      <input
                        type="text"
                        name="Notes"
                        value={data?.Notes}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.Notes}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 doc-select">
                      <label htmlFor="" className="form-label2 m-0">
                        Language
                      </label>
                      <Select
                        className="demo-simple-select-label mt-2"
                        id="demo-simple-select"
                        name="Language"
                        value={data.Language}
                        onChange={handleChange}
                        MenuProps={Languages}
                      >
                        {Languages &&
                          Languages.length > 0 &&
                          Languages.map((item, idx) => {
                            return (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.Language}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 doc-select">
                      <label htmlFor="" className="form-label2 m-0">
                        Tax Problem
                      </label>
                      <Select
                        className="demo-simple-select-label mt-2"
                        id="demo-simple-select"
                        name="TaxProblem"
                        value={data.TaxProblem}
                        onChange={handleChange}
                        MenuProps={TaxProblems}
                      >
                        {TaxProblems &&
                          TaxProblems.length > 0 &&
                          TaxProblems.map((item, idx) => {
                            return (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.TaxProblem}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2 doc-select">
                      <label htmlFor="" className="form-label2 m-0">
                        Tax Relief Tax Type
                      </label>
                      <Select
                        className="demo-simple-select-label mt-2"
                        id="demo-simple-select"
                        name="TAX_RELIEF_TAX_TYPE"
                        value={data.TAX_RELIEF_TAX_TYPE}
                        onChange={handleChange}
                        MenuProps={TaxType}
                      >
                        {TaxType &&
                          TaxType.length > 0 &&
                          TaxType.map((item, idx) => {
                            return (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.TAX_RELIEF_TAX_TYPE}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Source Name
                      </label>
                      <input
                        type="text"
                        name="SourceName"
                        value={data?.SourceName}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.SourceName}
                      </span>
                    </Col>
                    {(data.TAX_RELIEF_TAX_TYPE == "Personal and Business" ||
                      data.TAX_RELIEF_TAX_TYPE == "Business") && (
                      <Col lg="6" className="my-2 doc-select">
                        <label htmlFor="" className="form-label2 m-0">
                          Business Type
                        </label>
                        <Select
                          className="demo-simple-select-label mt-2"
                          id="demo-simple-select"
                          name="BusinessType"
                          value={data.BusinessType}
                          onChange={handleChange}
                          MenuProps={BusinessTypes}
                        >
                          {BusinessTypes &&
                            BusinessTypes.length > 0 &&
                            BusinessTypes.map((item, idx) => {
                              return (
                                <MenuItem key={item.id} value={item.id}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.BusinessType}
                        </span>
                      </Col>
                    )}
                    {(data.TAX_RELIEF_TAX_TYPE == "Personal and Business" ||
                      data.TAX_RELIEF_TAX_TYPE == "Business") && (
                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Business Name
                        </label>
                        <input
                          type="text"
                          name="BusinessName"
                          value={data?.BusinessName}
                          onChange={handleChange}
                          placeholder=""
                          className="form-control"
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.BusinessName}
                        </span>
                      </Col>
                    )}
                    {(data.TAX_RELIEF_TAX_TYPE == "Personal and Business" ||
                      data.TAX_RELIEF_TAX_TYPE == "Business") && (
                      <Col lg="6" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          EIN
                        </label>
                        <input
                          type="number"
                          name="EIN"
                          value={data?.EIN}
                          onChange={handleChange}
                          placeholder=""
                          className="form-control"
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.EIN}
                        </span>
                      </Col>
                    )}
                    <Col lg="6" className="my-2 doc-select">
                      <label htmlFor="" className="form-label2 m-0">
                        SMS Permit
                      </label>
                      <Select
                        className="demo-simple-select-label mt-2"
                        id="demo-simple-select"
                        name="SMSPermit"
                        value={data.SMSPermit}
                        onChange={handleChange}
                        // MenuProps={Templates}
                      >
                        <MenuItem key={true} value={true}>
                          Yes
                        </MenuItem>
                        <MenuItem key={false} value={false}>
                          No
                        </MenuItem>
                      </Select>
                      {data.SMSPermit == false && (
                        <span className="note error_note py-2 m-0 disclaimer-text">
                          You will not be able to receive notifications and will
                          miss out on important status updates for your case!
                        </span>
                      )}
                      {data.SMSPermit == "no" && (
                        <span className="note error_note py-2 m-0 disclaimer-text">
                          You will not be able to receive notifications and will
                          miss out on important status updates for your case!
                        </span>
                      )}
                    </Col>

                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button
                          disabled={errors.disabled}
                          onClick={handleSubmit}
                          className={`d-inline-flex align-items-center justify-content-center me-2`}
                        >
                          Submit
                        </Button>
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
export default ProfileForm;

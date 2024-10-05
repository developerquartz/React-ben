import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import {
  addPromoCode,
  editPromoCodes,
  promoCodeDetails,
} from "../../../store/actions";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRef } from "react";
import moment from "moment";

const PromoCodesAddIndex = () => {
  const EditId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compMounted = useRef();
  const PromoData = useSelector((s) => s.PromoReducer.PromoDetails?.data?.[0]);
  // console.log(PromoData, "PromoData");
  const [data, setData] = useState({
    promoId: "",
    name: "",
    type: "amount",
    promocode: "",
    startDate: "",
    endDate: "",
    discount: 0,
    minAmount: 0,
    startDateMin: new Date().toISOString().split("T")[0],
    endDateMin:  new Date().toISOString().split("T")[0],
    // orderInterval: "",
  });
  // console.log(data, "data");
  const [errors, setError] = useState({
    name: "",
    type: "amount",
    promocode: "",
    startDate: "",
    endDate: "",
    discount: "",
    minAmount: "",
    orderInterval: "",
    disabled: true,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "name":
        Error[name] = "";
        if (value.length < 5) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
        }
        break;
      case "discount":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
        }
        break;
      case "minAmount":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
        }
        break;
      case "orderInterval":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
        }
        break;
      case "promocode":
        Error[name] = "";
        if (value.length < 1) {
          Error[promocode] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
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

  useEffect(() => {
    if (EditId) {
      dispatch(promoCodeDetails(EditId));
    }

    setData((pre) => ({
      ...pre,
      promoId: EditId,
    }));
  }, [EditId]);

  useEffect(() => {
    if (compMounted.current) {
      setData((pre) => ({
        ...pre,
        name: PromoData?.name,
        type: PromoData?.type,
        promocode: PromoData?.promocode,
        startDate: moment(PromoData?.startDate).format("YYYY-MM-DD"),
        endDate: moment(PromoData?.endDate).format("YYYY-MM-DD"),
        discount: PromoData?.discount,
        minAmount: PromoData?.minAmount,
      }));
    } else {
      compMounted.current = true;
    }
  }, [PromoData]);

  const handleStatus = (e) => {
    e.preventDefault();
    const { value } = e.target;
    // console.log(value, "value");
    setData((pre) => ({
      ...pre,
      type: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/promocodes");
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    if (EditId) {
      if (data.promoId) {
        data.promoId = data.promoId;
      }

      dispatch(
        editPromoCodes(
          {
            ...data,
            discount: Number(data.discount),
            minAmount: Number(data.minAmount),
          },
          callBack
        )
      );
    } 
    else {
      if (data.orderInterval) {
        data.orderInterval = data.orderInterval;
      }
      if(data.startDate && data.endDate){
        if (data.startDate.valueOf() > data.endDate.valueOf()) {
          toast.error("Start Date should be less than End Date!");
          return
        }
      }
      dispatch(
        addPromoCode(
          {
            ...data,
            discount: Number(data.discount),
            minAmount: Number(data.minAmount),
          },
          callBack
        )
      );
    }
  };

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/promocodes">Promo Codes</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {EditId ? "Edit" : "Add"}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        value={data?.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.name}
                      </span>
                    </Col>
                    <Col lg="3" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Start Date
                      </label>
                      <input
                        type="date"
                        placeholder=""
                        value={data?.startDate}
                        name="startDate"
                        onChange={handleChange}
                        className="form-control"
                        min={data?.startDateMin}
                      />
                    </Col>
                    <Col lg="3" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Expires on
                      </label>
                      <input
                        type="date"
                        placeholder=""
                        value={moment.utc(data?.endDate).format("YYYY-MM-DD")}
                        name="endDate"
                        className="form-control"
                        onChange={handleChange}
                        min={data?.endDateMin}
                      />
                    </Col>
                    <Col lg="2" className="my-2">
                      <label htmlFor="" className="label m-0 me-2">
                        Type
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        // value={type}
                        onChange={(e) => handleStatus(e)}
                      >
                        <option value="amount">Amount</option>
                        <option value="orderCount">OrderCount</option>
                      </Form.Select>
                    </Col>
                    {data?.type == "amount" ? (
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Min Amount
                        </label>
                        <input
                          type="tel"
                          placeholder=""
                          value={data?.minAmount}
                          name="minAmount"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.minAmount}
                        </span>
                      </Col>
                    ) : (
                      <Col lg="4" className="my-2">
                        <label htmlFor="" className="form-label2 m-0">
                          Order Interval{" "}
                        </label>
                        <input
                          type="tel"
                          placeholder=""
                          value={data?.orderInterval}
                          name="orderInterval"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.orderInterval}
                        </span>
                      </Col>
                    )}

                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Promo Code
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        value={data?.promocode}
                        name="promocode"
                        className="form-control"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.promocode}
                      </span>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Discount{" "}
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        value={data?.discount}
                        name="discount"
                        className="form-control"
                        onChange={handleChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.promocode}
                      </span>
                    </Col>
                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button
                          disabled={errors.disabled}
                          onClick={handleSubmit}
                          className="d-flex align-items-center justify-content-center me-2"
                        >
                          Submit
                        </Button>
                        <Link
                          to="/promocodes"
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
export default PromoCodesAddIndex;

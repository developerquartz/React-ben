import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { addFaq, editFaq, faqDetails } from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef } from "react";

const AddFaqIndex = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compMounted = useRef();
  const EditId = location.pathname.split("/")[4];
  const [addfaq, setAddfaq] = useState({
    FaqId: "",
    question: "",
    answer: "",
  });
  const [errors, setError] = useState({
    question: "",
    answer: "",
    disabled: true,
  });
  const Faqdetails = useSelector((s) => s.FaqReducer.faqDetails?.data);

  useEffect(() => {
    if (compMounted.current) {
      setAddfaq((pre) => ({
        ...pre,
        question: Faqdetails?.question,
        answer: Faqdetails?.answer,
      }));
    } else {
      compMounted.current = true;
    }
  }, [Faqdetails]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "question":
        Error[name] = "";
        if (value.length < 4) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;
      case "answer":
        Error[name] = "";
        if (value.length < 4) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;

          ("");
        }
        break;

      default:
        break;
    }
    setAddfaq((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };
  useEffect(() => {
    if (EditId) {
      dispatch(faqDetails(EditId));
    }
    setAddfaq((pre) => ({
      ...pre,
      FaqId: EditId,
    }));
  }, [EditId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/configuration/faq");
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    if (EditId) {
      if (addfaq.FaqId) {
        addfaq.FaqId = addfaq.FaqId;
      }
      dispatch(editFaq(addfaq, callBack));
    } else {
      dispatch(addFaq(addfaq, callBack));
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
                  <Breadcrumb.Item href="/configuration/faq">FAQs</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {" "}
                    {EditId ? "Edit" : "Add"}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Question
                      </label>
                      <input
                        type="text"
                        name="question"
                        value={addfaq?.question}
                        onChange={handleChange}
                        placeholder=""
                        className="form-control"
                      />
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Answer
                      </label>
                      <textarea
                        name="answer"
                        rows="8"
                        value={addfaq?.answer}
                        onChange={handleChange}
                        className="form-control"
                      ></textarea>
                    </Col>
                    {/* <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Status
                      </label>
                      <div className=" switch-btn-cstm">
                        <BootstrapSwitchButton
                          width={92}
                          height={36}
                          checked={false}
                          onlabel="Active"
                          offlabel="InActive"
                          onChange={(e) =>
                            onStatusChange(
                              EditAdmin?.status == "active" ? "inactive" : "active"
                            )
                          }
                        />
                      </div>
                    </Col> */}
                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button
                          onClick={handleSubmit}
                          disabled={errors.disabled}
                          className="d-flex align-items-center justify-content-center me-2"
                        >
                          Submit
                        </Button>
                        <Link
                          to="/configuration/faq"
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
export default AddFaqIndex;

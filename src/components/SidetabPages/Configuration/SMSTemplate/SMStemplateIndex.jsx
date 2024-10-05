import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getSmsTemplate_Details,
  smsTemplates_Update,
} from "../../../../store/actions";
import { SELECT } from "../../../../Common/InputFields";

const SMStemplateIndex = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    smsTemplateId: "",
    title: "",
    body: "",
  });
  const templateNames = [];
  const SmstemplatesData = useSelector((s) => s.Setting.getSmsTemplates?.data);
  SmstemplatesData?.forEach((element) => {
    templateNames.push({ [element._id]: element.title });
  });
  const handleDropDown = (e) => {
    var selectedTemplate = SmstemplatesData.filter((element) => {
      return element._id === e.target.value;
    });
    setState((pre) => ({
      ...pre,

      body: selectedTemplate[0].body,
      title: selectedTemplate[0].title,
      smsTemplateId: selectedTemplate[0]._id,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
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
    dispatch(smsTemplates_Update(state, callBack));
  };
  useEffect(() => {
    dispatch(getSmsTemplate_Details());
  }, []);
  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">SMS Templates</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <Form>
                  <Row>
                    <Col lg="6" className="my-2">
                      <SELECT
                        label="SMS Unique Title"
                        value={state.smsTemplateId}
                        onChange={handleDropDown}
                        data={templateNames}
                      />{" "}
                    </Col>
                    <Col lg="6" className="my-2">
                      <label for="" className="form-label2 m-0">
                        Select SMS Unique Title
                      </label>
                      <input
                        type="text"
                        value={state.body}
                        name="body"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </Form>
                <Button
                  onClick={handleSubmit}
                  className="d-flex align-items-center justify-content-center"
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default SMStemplateIndex;

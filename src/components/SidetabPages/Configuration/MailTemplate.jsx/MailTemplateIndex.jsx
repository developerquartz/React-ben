import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Switch from "react-switch";
import CKEditor from "react-ckeditor-component";
import { useDispatch, useSelector } from "react-redux";
import {
  getMailTemplate_Details,
  mailTemplates_Update,
} from "../../../../store/actions";
import { SELECT } from "../../../../Common/InputFields";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MailTemplateIndex = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    emailTemplateId: "",
    title: "",
    body: "",
    emailTitle: "",
    adminEmailInfo: "",
  });
  const templateNames = [];
  const mailTemplatesData = useSelector(
    (s) => s.Setting.getMailTemplates?.data
  );
  mailTemplatesData?.forEach((element) => {
    templateNames.push({ [element._id]: element.title });
  });
  const handleDropDown = (e) => {
    var selectedTemplate = mailTemplatesData.filter((element) => {
      return element._id === e.target.value;
    });
    setState((pre) => ({
      ...pre,
      // selectedValue: e.target.value,
      emailTitle: selectedTemplate[0].emailTitle,
      adminEmailInfo: selectedTemplate[0].adminEmailInfo,
      body: selectedTemplate[0].body,
      title: selectedTemplate[0].title,
      emailTemplateId: selectedTemplate[0]._id,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setState((prevState) => ({
      ...prevState,
      body: newContent,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        navigate("/configuration/mailtemplate");
      } else {
        toast.error(response.message);
      }
    };
    dispatch(mailTemplates_Update(state, callBack));
  };

  useEffect(() => {
    dispatch(getMailTemplate_Details());
  }, []);
  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Email Templates</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <Form>
                  <Row>
                    <Col lg="6" className="my-2">
                      <SELECT
                        label="Select Mail template"
                        value={state.emailTemplateId}
                        onChange={handleDropDown}
                        data={templateNames}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label for="" className="form-label2 m-0">
                        Email Title
                      </label>
                      <input
                        type="email"
                        value={state.emailTitle}
                        name="emailTitle"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </Col>
                    <Col lg="12" className="my-2">
                      <CKEditor
                        activeClass="p10"
                        content={state.body}
                        events={{
                          change: onChange,
                        }}
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
export default MailTemplateIndex;

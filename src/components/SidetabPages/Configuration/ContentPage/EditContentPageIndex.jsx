import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import {
  contentPageDetails,
  contentPageEdit,
  contentPageList,
} from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const EditContentPageIndex = () => {
  const id = location.pathname.split("/")[4];
  const [contentPage, setContentPage] = useState({
    ContentId: "",
    name: "",
    content: "",
    status: "",
  });
  const [errors, setError] = useState({
    name: "",
    content: "",
    disabled: true,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Contentpage = useSelector(
    (s) => s.ContentPageReducer.contentPageDetails?.data
  );
  // console.log(Contentpage, "Contentpage");
  useEffect(() => {
    setContentPage((pre) => ({
      ...pre,
      name: Contentpage?.name,
      content: Contentpage?.content,
      status: Contentpage?.status,
    }));
  }, [Contentpage]);

  useEffect(() => {
    setContentPage((pre) => ({
      ...pre,
      ContentId: id,
    }));
    if (id) {
      dispatch(contentPageDetails(id));
    }
  }, [id]);

  const onStatusChange = (value) => {
    setContentPage((pre) => ({
      ...pre,
      status: value,
    }));
    errors.disabled = false;
  };

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

          ("");
        }
        break;
      case "content":
        Error[name] = "";
        if (value.length < 5) {
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
    setContentPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/configuration/contentpage");
          dispatch(contentPageList());
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(contentPageEdit(contentPage, callBack));
  };
  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/configuration/contentpage">Content Page</Breadcrumb.Item>
                  <Breadcrumb.Item active>Edit</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        value={contentPage?.name}
                        name="name"
                        onChange={handleChange}
                        disabled={true}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.name}
                      </span>
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Answer
                      </label>
                      <textarea
                        name="content"
                        rows="8"
                        value={contentPage?.content}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <span className="note error_note py-2 m-0 text-danger">
                          {errors.content}
                        </span>
                      </textarea>
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Status
                      </label>
                      <div className=" switch-btn-cstm">
                        <BootstrapSwitchButton
                          width={92}
                          height={36}
                          checked={contentPage?.status == 1 ? true : false}
                          onlabel="Active"
                          offlabel="InActive"
                          value={contentPage?.status}
                          onChange={(e) =>
                            onStatusChange(contentPage?.status == 1 ? 0 : 1)
                          }
                        />
                      </div>
                    </Col>

                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button
                          onClick={handleUpdate}
                          disabled={errors.disabled}
                          className="d-flex align-items-center justify-content-center me-2"
                        >
                          Submit
                        </Button>
                        <Link
                          to="/configuration/contentpage"
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
export default EditContentPageIndex;

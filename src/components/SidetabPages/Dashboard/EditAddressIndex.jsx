import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { fileUpload, postDocument } from "../../../store/actions";
import Loading from "../../../Common/extra/loading";
import FileUploader from "./FilePreview";

const EditAddressIndex = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { docId } = useParams();
  const userId = localStorage.getItem("id");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [data, setData] = useState({
    image_url: [],
    fileName: "",
    status: "submitted",
  });
  console.log(data, "file datata");
  const [errors, setError] = useState({
    image_url: "",
  });
  const [loading, setLoading] = useState(false);
  const DocumentData = useSelector((s) => s?.Customers?.getDocumentFile?.data);

  useEffect(() => {
    if (DocumentData) {
      setData((pre) => ({
        ...pre,
        image_url: DocumentData?.image_url,
      }));
    }
  }, [DocumentData]);

  useEffect(() => {
    if (data.image_url) {
      setData((pre) => ({
        ...pre,
        fileName: data.image_url.map((item) => item.split("/")[3]),
      }));
    }
  }, [data.image_url]);

  const handleFileUpload = () => {
    let formData = new FormData();

    for (let index = 0; index < uploadedFiles.length; index++) {
      formData.append("project_image[]", uploadedFiles[index]);
    }
    const callback = (url) => {
      console.log(url, "urllllllllllllll");
      const postCallBack = (res) => {
        if (res.status == 200) {
          toast.success("Success!");
          setLoading(false);
          navigate(`/client/documents`);
        }
      };
      if (url.data != "failed") {
        dispatch(
          postDocument(
            {
              user_id: userId,
              document_id: docId,
              image_url: url.files,
              status: data.status,
            },
            postCallBack
          )
        );
      } else {
        toast.error(url.data);
        setLoading(false);
      }
    };
    setLoading(true);
    dispatch(fileUpload(formData, null, callback));
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
                  <Breadcrumb.Item href="">Upload Document</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row className="">
                    <>
                      <Col md={12}>
                        <FileUploader
                          setUploadedFiles={setUploadedFiles}
                          uploadedFiles={uploadedFiles}
                        />
                      </Col>
                    </>
                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex align-items-center">
                        <Button
                          onClick={handleFileUpload}
                          disabled={uploadedFiles.length > 0 ? false : true}
                          className="d-flex align-items-center justify-content-center me-2"
                        >
                          Submit
                        </Button>
                        <Link
                          to={`/client/documents/${userId}`}
                          className="d-flex py-1 btn-2 border align-items-center justify-content-center me-2"
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
export default EditAddressIndex;

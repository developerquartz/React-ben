import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getDocumentById } from "../../../store/actions";
import ImagePreview from "../../../Common/extra/ImagePreview";
import download from "downloadjs";
// import DocViewer from "react-doc-viewer";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Loading from "../../../Common/extra/loading";

const ViewAddressIndex = () => {
  const dispatch = useDispatch();
  const { docId } = useParams();
  const userId = localStorage.getItem("id");
  const [data, setData] = useState({
    image_url: "",
    fileName: "Drag/Drop or Upload File",
    status: "submitted",
  });
  const [errors, setError] = useState({
    image_url: "",
  });

  const DocumentData = useSelector((s) => s?.login?.getDocuments?.data);
  const docs =
    DocumentData && DocumentData.image_url.map((url) => ({ uri: url }));
  const [activeDocument, setActiveDocument] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (docId && DocumentData) {
      setData((pre) => ({ ...pre, image_url: DocumentData?.image_url }));
    }
  }, [docId, DocumentData]);

  useEffect(() => {
    if (docs) {
      setActiveDocument(docs[0]);
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

  useEffect(() => {
    if (docId && userId) {
      dispatch(getDocumentById({ docId: docId, userId: userId }));
    }
  }, [docId, userId]);

  const handleDocumentChange = (Document) => {
    setActiveDocument(Document);
  };

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href={`/customers/profile/${userId}`}>
                    Document
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Row className="justify-content-center doc-reverse">
                  <>
                    <Col md={12} className="text-center">
                      {(DocumentData && (
                        <>
                          <DocViewer
                            documents={docs}
                            activeDocument={activeDocument}
                            pluginRenderers={DocViewerRenderers}
                            onDocumentChange={handleDocumentChange}
                          />
                        </>
                      )) || <h5 className="mt-5">No Document Submitted</h5>}
                    </Col>
                    {DocumentData && (
                      <Col
                        md={6}
                        className="text-center doc-preview-btn d-flex gap-10 justify-content-center"
                      >
                        <a
                          className="text-white"
                          href={activeDocument?.uri}
                          target="blank"
                        >
                          <Button>Preview</Button>
                        </a>
                      </Col>
                    )}
                  </>
                  <Col lg="12" className="my-2"></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ViewAddressIndex;

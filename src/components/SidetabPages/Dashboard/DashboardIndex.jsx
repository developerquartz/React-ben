import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteUser, getDocuments } from "../../../store/actions";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
} from "../../../Common/DataTable";

const columnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "name",
    align: false,
    disablePadding: true,
    label: "Document Name",
    title: "name",
    order: 1,
  },

  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    title: "status",
    type: "tag",
    order: 1,
  },

  {
    id: "action",
    align: true,
    disablePadding: false,
    title: "action",
    label: "Action",
  },
];

const DashboardIndex = () => {
  const dispatch = useDispatch();
  const [deleteShow, deleteSetShow] = useState(false);
  const [docData, setDocData] = useState([]);
  const [Delete, setDelete] = useState({
    open: false,
    dumpId: "",
  });
  const userId = JSON.parse(localStorage.getItem("userData"));

  const [docState, setDocState] = useState({
    columns: columnData,
    rowsPerPage: 5,
    page: 0,
    order: -1,
    orderBy: "createdAt",
  });
  const [state, setState] = useState("all");

  const docList = useSelector((s) => s?.login?.documents?.data?.documents);
  console.log(docList, "doc listtttt");
  const loading = useSelector((s) => s?.Dashboard?.loading);

  useEffect(() => {
    if (userId) {
      dispatch(getDocuments({ id: userId?.id }));
    }
  }, []);

  useEffect(() => {
    if (docList) {
      setDocData(docList);
    }
  }, [docList]);

  const handleTabChange = (value) => {
    setState(value);
    if (value == "all") {
      setDocData(docList);
    } else if (value == "pending") {
      setDocData(docList.filter((item) => item.status == "pending"));
    } else if (value == "submitted") {
      setDocData(docList.filter((item) => item.status == "submitted"));
    } else if (value == "accepted") {
      setDocData(docList.filter((item) => item.status == "accepted"));
    } else if (value == "rejected") {
      setDocData(docList.filter((item) => item.status == "rejected"));
    }
  };

  const DeletePopup = (state, id = "") => {
    setDelete((pre) => ({
      ...pre,
      open: state,
      dumpId: id,
    }));
  };

  const handleDelete = () => {
    const callBack = (response) => {
      if (response.status == 200) {
        toast.success(response.message);
        setDelete(false);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(deleteUser({ userId: Delete.dumpId }, callBack));
  };

  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="py-2">
                <Tab.Container id="left-tabs-example" defaultActiveKey={state}>
                  <Nav
                    variant="pills"
                    className="bg-white mb-3 commonTabs viewprofile"
                  >
                    <Nav.Item>
                      <Nav.Link
                        className="bg-transparent border-0 py-3 position-relative px-3"
                        eventKey="all"
                        onClick={() => handleTabChange("all")}
                      >
                        All
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="bg-transparent border-0 py-3 position-relative px-3"
                        eventKey="pending"
                        onClick={() => handleTabChange("pending")}
                      >
                        Pending
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="bg-transparent border-0 py-3 position-relative px-3"
                        eventKey="Submitted"
                        onClick={() => handleTabChange("submitted")}
                      >
                        Submitted
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="bg-transparent border-0 py-3 position-relative px-3"
                        eventKey="Accepted"
                        onClick={() => handleTabChange("accepted")}
                      >
                        Accepted
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="bg-transparent border-0 py-3 position-relative px-3"
                        eventKey="Rejected"
                        onClick={() => handleTabChange("rejected")}
                      >
                        Rejected
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className="bg-white px-4 py-3 card-box rounded">
                    <div className="top d-flex align-items-start justify-content-between">
                      <h4 className="dashboard-head m-0">Documents</h4>
                    </div>
                    <div className="address-wrp">
                      <div className="py-2">
                        <div className="cstm-card tax-table-responsive">
                          <DataTable>
                            <DataTableHead
                              columns={columnData}
                              orderBy={docState.orderBy}
                              // sort={this.handleRequestSort}
                            />
                            <DataTableBody
                              loading={loading}
                              column={columnData}
                              data={docData}
                              page={docState.page}
                              rowsPerPage={docState.rowsPerPage}
                              actionBtn={[
                                {
                                  label: "Upload",
                                  icon: "",
                                  link: `/client/document/upload`,
                                  // backUrl: { backLink },
                                },
                                {
                                  label: "ViewDoc",
                                  icon: "",
                                  link: `/client/document/view`,
                                  // backUrl: { backLink },
                                },
                              ]}
                            />
                          </DataTable>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal
        show={Delete.open}
        onHide={() => {
          setDelete(false);
        }}
        className="deleteAdd-pop delete-pop"
        centered
      >
        <Modal.Body>
          <div className="text-center py-3">
            <div className="icn my-3">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256    C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216    c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"
                  fill="#f8c886"
                ></path>
                <path
                  d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877    C276,137.831,267.046,128.877,256,128.877z"
                  fill="#f8c886"
                ></path>
                <circle cx="256" cy="349.16" r="27" fill="#f8c886"></circle>{" "}
              </svg>
            </div>
            <h2 className="pop-head m-0 pb-2">Are you Sure?</h2>
            <div className="btn-wrap my-2 d-flex align-items-center justify-content-center mt-3">
              <div className="pe-2 w-50">
                <Button
                  className="btn-2 w-100 d-flex align-items-center justify-content-center"
                  onClick={() => {
                    setDelete(false);
                  }}
                >
                  No Cancel!
                </Button>
              </div>
              <div className="pe-2 w-50">
                <Button
                  onClick={handleDelete}
                  className=" w-100 d-flex align-items-center justify-content-center"
                >
                  Yes, Delete it
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default DashboardIndex;

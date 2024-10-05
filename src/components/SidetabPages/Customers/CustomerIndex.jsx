import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Tab, Nav } from "react-bootstrap";

import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../Common/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { customerList, deleteUser } from "../../../store/actions";
import Filters from "./Filters";
import { toast } from "react-toastify";

const columnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "name",
    align: false,
    disablePadding: true,
    label: "Name",
    title: "Name",
    order: 1,
  },
  {
    id: "email",
    align: true,
    disablePadding: false,
    label: "Email",
    title: "Email",
    order: 1,
  },
  {
    id: "mobileNumber",
    numeric: false,
    disablePadding: false,
    label: "Mobile Number",
    title: "Mobile",
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
  {
    id: "action1",
    align: true,
    disablePadding: false,
    title: "action",
    label: "Doc Review",
  },
];

const CustomerIndex = () => {
  const dispatch = useDispatch();

  const [deleteShow, deleteSetShow] = useState(false);
  const [tabs, setTabs] = useState("all");
  const [filter, setFilter] = useState("");
  const [state, setState] = useState({
    columns: columnData,
    rowsPerPage: 10,
    page: 0,
    order: -1,
    orderBy: "createdAt",
    search: "",
    status: "",
  });

  const [Delete, setDelete] = useState({
    open: false,
    dumpId: "",
  });

  const userData = useSelector((s) => s?.Customers?.user?.data);
  const totalCount = useSelector((s) => s.Customers?.user?.totalcount);
  const loading = useSelector((s) => s.Customers?.loading);

  const getTableRecords = () => {
    let body = {
      orderBy: state.orderBy,
      order: state.order,
      page: parseInt(state.page) + 1,
      limit: state.rowsPerPage,
      search: filter,
    };
    if (state.status) {
      body.status = state.status;
    }

    dispatch(customerList(body));
  };

  useEffect(() => {
    getTableRecords(state.order, state.orderBy);
  }, [state]);

  const handleStatus = (e) => {
    e.preventDefault();
    const { value } = e.target;
    // console.log(value, "value");
    setState((pre) => ({
      ...pre,
      status: value,
    }));
  };

  const resetFilter = () => {
    setState((pre) => ({
      ...pre,
      status: "",
    }));
    setFilter("");
  };

  const handleChangePage = (event, page) => {
    setState((pre) => ({
      ...pre,
      page: page,
    }));
    // getTableRecords(state.order, state.orderBy);
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setFilter(value);
  };

  const filterdata = (e) => {
    e.preventDefault();
    getTableRecords(1, state.orderBy);
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
      if (response.status == "success") {
        toast.success(response.message);
        setDelete(false);
        dispatch(customerList());
      } else {
        toast.error(response.message);
      }
    };
    dispatch(deleteUser({ userId: Delete.dumpId }, callBack));
  };

  const handleRequestSort = (data) => {
    if (data.key !== "action") {
      let NewColoumns = state.columns.map((key, index) => {
        if (key.id !== data.key) {
          return { ...key, order: 1 };
        } else {
          return { ...key, order: data.order };
        }
      });
      setState(
        {
          loading: true,
          columns: NewColoumns,
          orderBy: data.key,
          order: data.order,
          rowsPerPage: 10,
          page: 0,
        },
        () => getTableRecords(data.order, data.key)
      );
    }
  };

  return (
    <>
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
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Customers</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              {/* <div className="bg-white px-4 py-3"></div> */}
              <Filters
                status={state.status}
                columns={state.columns}
                filter={filter}
                handleStatus={handleStatus}
                handleSearchChange={handleSearchChange}
                filterdata={filterdata}
                resetFilter={resetFilter}
              />
              <Tab.Container id="left-tabs-example" defaultActiveKey={tabs}>
                <Nav variant="pills" className="bg-white mb-3 commonTabs">
                  <Nav.Item>
                    <Nav.Link
                      className="bg-transparent border-0 py-3 position-relative"
                      eventKey="all"
                      onClick={() => setTabs("all")}
                    >
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="bg-transparent border-0 py-3 position-relative"
                      eventKey="today"
                      onClick={() => setTabs("today")}
                    >
                      Today
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="bg-transparent border-0 py-3 position-relative"
                      eventKey="thisWeek"
                      onClick={() => setTabs("thisWeek")}
                    >
                      This Week
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="bg-transparent border-0 py-3 position-relative"
                      eventKey="thisMonth"
                      onClick={() => setTabs("thisMonth")}
                    >
                      This Month
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="bg-transparent border-0 py-3 position-relative"
                      eventKey="thisYear"
                      onClick={() => setTabs("thisYear")}
                    >
                      This Year
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="bg-white px-4 py-3 card-box">
                  <Tab.Content>
                    <Tab.Pane eventKey={tabs}>
                      <div className="table-responsive py-3">
                        <DataTable className="">
                          <DataTableHead
                            columns={columnData}
                            orderBy={state.orderBy}
                            sort={handleRequestSort}
                          />
                          <DataTableBody
                            loading={loading}
                            column={columnData}
                            data={userData}
                            page={state.page}
                            rowsPerPage={state.rowsPerPage}
                            docBtn={[
                              {
                                label: "View",
                                icon: "",
                                link: "/customers/profile",
                              },
                              {
                                label: "Delete",
                                icon: "",
                                action: DeletePopup,
                              },
                              {
                                label: "Edit",
                                icon: "",
                                link: "/customers/edit",
                              },
                              ,
                            ]}
                            actionBtn={[
                              {
                                label: "View",
                                icon: "",
                                link: "/customers/profile",
                              },
                              {
                                label: "Delete",
                                icon: "",
                                action: DeletePopup,
                              },
                              {
                                label: "Edit",
                                icon: "",
                                link: "/customers/edit",
                              },
                              ,
                            ]}
                          />
                          {userData?.length > 0 && (
                            <DataTablePagination
                              count={totalCount}
                              rowsPerPage={state.rowsPerPage}
                              page={state.page}
                              onPageChange={handleChangePage}
                              rowsPerPageOptions={[]}
                            />
                          )}
                        </DataTable>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerIndex;

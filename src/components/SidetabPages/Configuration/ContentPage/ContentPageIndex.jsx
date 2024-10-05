import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  Form,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { contentPageList, deleteFaq } from "../../../../store/actions";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../../Common/DataTable";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
const columnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "name",
    align: false,
    disablePadding: true,
    label: "Title",
    title: "name",
    order: 1,
  },

  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    type: "statustag",
  },

  {
    id: "updatedAt",
    align: true,
    disablePadding: false,
    label: "createdAt",
    type: "date",
    title: "registered",
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
const ContentPageIndex = () => {
  const dispatch = useDispatch();
  const [deleteShow, deleteSetShow] = useState(false);
  const deleteClose = () => deleteSetShow(false);
  const deleteShowPop = () => deleteSetShow(true);
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
  const Data = useSelector((s) => s.ContentPageReducer.contentPageList?.data);
  const totalCount = useSelector(
    (s) => s.ContentPageReducer.contentPageList.totalcount
  );
  const loading = useSelector((s) => s.ContentPageReducer?.loading);

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

    dispatch(contentPageList(body));
  };

  useEffect(() => {
    getTableRecords(state.order, state.orderBy);
  }, [state]);

  const handleStatus = (e) => {
    e.preventDefault();
    const { value } = e.target;

    setState((pre) => ({
      ...pre,
      status: parseInt(value),
    }));
  };

  const resetFilter =()=>{
    setState((pre) => ({
      ...pre,
      status: ""
    }));
    setFilter("");
  }

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
        dispatch(faqList());
      } else {
        toast.error(response.message);
      }
    };
    dispatch(deleteFaq({ FaqId: Delete.dumpId, status: "deleted" }, callBack));
  };
  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Content Page</h4>
              </div>
            </Col>
            <div className="bg-white px-4 py-3 card-box">
              <Filters
                status={state.status}
                columns={state.columns}
                filter={filter}
                handleStatus={handleStatus}
                handleSearchChange={handleSearchChange}
                filterdata={filterdata}
                resetFilter={resetFilter}
              />
              <div className="table-responsive py-3">
                <DataTable className="">
                  <DataTableHead
                    columns={columnData}
                    orderBy={state.orderBy}
                    // sort={this.handleRequestSort}
                  />
                  <DataTableBody
                    loading={loading}
                    column={columnData}
                    data={Data}
                    page={state.page}
                    rowsPerPage={state.rowsPerPage}
                    actionBtn={[
                      {
                        label: "Edit",
                        icon: "",
                        link: "/configuration/contentpage/edit",
                      },
                      ,
                    ]}
                  />
                  {Data?.length > 0 && (
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
            </div>
            {/* <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <div className="d-flex align-items-center justify-content-between flex-wrap filter-wrp">
                  <div className="left d-flex align-items-center flex-wrap my-2">
                    <div className="filterby d-flex align-items-center me-2">
                      <label htmlFor="" className="label m-0 me-2">
                        Filter By:
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option>Status</option>
                        <option value="1">Active</option>
                        <option value="2">Inactive</option>
                      </Form.Select>
                    </div>
                    <div className="form-wrp">
                      <Form className="position-relative search-form">
                        <input
                          type="search"
                          placeholder="Search"
                          className="form-control"
                        />
                        <Button className="position-absolute d-flex align-items-center justify-contnet-center common-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.5 3.75001C9.61358 3.75001 8.73583 3.9246 7.91689 4.26382C7.09794 4.60304 6.35382 5.10024 5.72703 5.72704C5.10023 6.35384 4.60303 7.09795 4.26381 7.9169C3.92459 8.73585 3.75 9.61359 3.75 10.5C3.75 11.3864 3.92459 12.2642 4.26381 13.0831C4.60303 13.9021 5.10023 14.6462 5.72703 15.273C6.35382 15.8998 7.09794 16.397 7.91689 16.7362C8.73583 17.0754 9.61358 17.25 10.5 17.25C12.2902 17.25 14.0071 16.5389 15.273 15.273C16.5388 14.0071 17.25 12.2902 17.25 10.5C17.25 8.7098 16.5388 6.99291 15.273 5.72704C14.0071 4.46117 12.2902 3.75001 10.5 3.75001V3.75001ZM2.25 10.5C2.25017 9.17511 2.56944 7.86973 3.18079 6.69431C3.79214 5.51889 4.67759 4.50799 5.76224 3.74713C6.84689 2.98627 8.09883 2.49784 9.41216 2.32314C10.7255 2.14843 12.0616 2.29261 13.3074 2.74347C14.5533 3.19432 15.6722 3.9386 16.5695 4.91333C17.4669 5.88807 18.1163 7.06459 18.4628 8.34337C18.8094 9.62216 18.8428 10.9656 18.5603 12.26C18.2778 13.5545 17.6878 14.7618 16.84 15.78L21.53 20.47C21.6037 20.5387 21.6628 20.6215 21.7038 20.7135C21.7448 20.8055 21.7668 20.9048 21.7686 21.0055C21.7704 21.1062 21.7518 21.2062 21.7141 21.2996C21.6764 21.393 21.6203 21.4778 21.549 21.549C21.4778 21.6203 21.393 21.6764 21.2996 21.7141C21.2062 21.7519 21.1062 21.7704 21.0055 21.7686C20.9048 21.7668 20.8055 21.7448 20.7135 21.7038C20.6215 21.6628 20.5387 21.6037 20.47 21.53L15.78 16.84C14.5752 17.8435 13.1094 18.4829 11.5543 18.6833C9.99922 18.8837 8.41922 18.6367 6.99941 17.9714C5.5796 17.3061 4.37878 16.25 3.53763 14.9267C2.69648 13.6035 2.24983 12.068 2.25 10.5V10.5Z"
                              fill="white"
                            />
                          </svg>
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className="table-responsive py-3">
                  <table className="table common-table">
                    <thead>
                      <tr>
                        <th>Content Type</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="text-muted m-0 fw-sbold">
                            Driver Registration
                          </p>
                        </td>
                        <td>
                          <p className="m-0 status active-status"> Active</p>
                        </td>
                        <td>
                          <p className="m-0">01 Dec 2022</p>
                        </td>
                        <td>
                          <div className="action-btn d-flex align-items-center">
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Edit</Tooltip>
                              )}
                              placement="top"
                            >
                              <Button className="btn d-inline-flex align-items-center justify-content-center me-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M10.2583 4.20624L7.77917 1.75624L8.59583 0.939573C8.81944 0.715962 9.09419 0.604156 9.42008 0.604156C9.74558 0.604156 10.0201 0.715962 10.2437 0.939573L11.0604 1.75624C11.284 1.97985 11.4007 2.24974 11.4104 2.56591C11.4201 2.88168 11.3132 3.15138 11.0896 3.37499L10.2583 4.20624ZM9.4125 5.06666L3.22917 11.25H0.75V8.77082L6.93333 2.58749L9.4125 5.06666Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Button>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="text-muted m-0 fw-sbold">
                            Driver Registration
                          </p>
                        </td>
                        <td>
                          <p className="m-0 status active-status"> Active</p>
                        </td>
                        <td>
                          <p className="m-0">01 Dec 2022</p>
                        </td>
                        <td>
                          <div className="action-btn d-flex align-items-center">
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Edit</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                to="/configuration/contentpage/edit"
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M10.2583 4.20624L7.77917 1.75624L8.59583 0.939573C8.81944 0.715962 9.09419 0.604156 9.42008 0.604156C9.74558 0.604156 10.0201 0.715962 10.2437 0.939573L11.0604 1.75624C11.284 1.97985 11.4007 2.24974 11.4104 2.56591C11.4201 2.88168 11.3132 3.15138 11.0896 3.37499L10.2583 4.20624ZM9.4125 5.06666L3.22917 11.25H0.75V8.77082L6.93333 2.58749L9.4125 5.06666Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ContentPageIndex;

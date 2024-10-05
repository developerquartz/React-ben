import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../../Common/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { adminTransactionsList } from "../../../../store/actions";
import Filters from "./Filters";
import { toast } from "react-toastify";
import moment from 'moment';

const columnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "customerDetails",
    numeric: false,
    disablePadding: false,
    label: "Customer",
    title: "customerDetails",
    type: "service",
    order: 1,
  },
  {
    id: "text",
    align: true,
    disablePadding: false,
    label: "Description",
    title: "text",
    order: 1,
  },
  {
    id: "amount",
    align: true,
    disablePadding: false,
    label: "Amount",
    title: "amount",
    type: "amount",
    order: 1,
  },
  {
    id: "commission",
    align: true,
    disablePadding: false,
    label: "Earning",
    title: "commission",
    type: "amount",
    order: 1,
  },
  {
    id: "type",
    align: true,
    disablePadding: false,
    label: "Type",
    title: "type",
    type: "type",
    order: 1,
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    title: "status",
    type: "tag",
    order: 1
  },
  {
    id: "createdAt",
    align: true,
    disablePadding: false,
    label: "Created At	",
    type: "dateTime",
    title: "Date|Time",
    order: 1,
  },
];

const AdminTransactionIndex = () => {

  const [trxnDetailShow, trxnDetailSetShow] = useState(false);
  const trxnDetailClose = () => trxnDetailSetShow(false);
  const trxnDetailShowPop = () => trxnDetailSetShow(true);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");

  const [state, setState] = useState({
    columns: columnData,
    rowsPerPage: 10,
    page: 0,
    order: -1,
    orderBy: "createdAt",
    search: "",
    status: "",
    datefilter: false,
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
  });

  const adminTransactionData = useSelector((s) => s?.Dashboard?.adminTransactionList?.data);
  const totalCount = useSelector((s) => s.Dashboard?.adminTransactionList?.totalcount);
  const loading = useSelector((s) => s.Dashboard?.loading);


  const getTableRecords = () => {
    let body = {
      orderBy: state.orderBy,
      order: state.order,
      page: parseInt(state.page) + 1,
      limit: state.rowsPerPage,
      search: filter,
      datefilter: state?.datefilter
    };
    if (state.status) {
      body.type = state.status;
    }
    if (state?.datefilter) {
      if(state.startDate){
        body.startDate = moment(state.startDate, "YYYY-MM-DD").format("DD-MM-YYYY");
      }
      if(state.endDate){
        body.endDate = moment(state.endDate, "YYYY-MM-DD").format("DD-MM-YYYY");
      }
    }
    dispatch(adminTransactionsList(body));
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

  const handleRequestSort = (data) => {
    if (data.key !== "action") {
      let NewColoumns = state.columns.map((key, index) => {
        if (key.id !== data.key) {
          return { ...key, order: 1 };
        } 
        else {
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

  const handleStartDate = (e) => {
    const {  value } = e.target;
    const { endDate } = state;
    if (new Date(endDate) < new Date(value)) {
      toast.error( "Please select `Start date` less than or equal to `End date`.");
    } 
    else {
      setState((pre) => ({
        ...pre,
        startDate: moment(value).format("YYYY-MM-DD"),
      }));
    }
  };

  const handleEndDate = (e) => {
    const {  value } = e.target;
    const { startDate } = state;
    if (new Date(startDate) > new Date(value)) {
      toast.error( "Please select `Start date` greater than or equal to `End date`." );
    } 
    else {
      setState((pre) => ({
        ...pre,
        endDate: moment(value).format("YYYY-MM-DD"),
      }));
    }
  };

  const handleDateFilterChange = (e) => {
    e.preventDefault();
    const { checked } = e.target;
      setState((pre) => ({
        ...pre,
        datefilter: checked,
      }));
  };

  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Transactions</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
            <div className="bg-white px-4 py-3 card-box rounded">
              <Filters
                status={state.status}
                columns={state.columns}
                filter={filter}
                handleStatus={handleStatus}
                handleSearchChange={handleSearchChange}
                filterdata={filterdata}
                resetFilter={resetFilter}
                datefilter={state?.datefilter}
                handleDateFilterChange={handleDateFilterChange}
                startDate={state?.startDate}
                endDate={state?.endDate}
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
              />
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
                    data={adminTransactionData}
                    page={state.page}
                    rowsPerPage={state.rowsPerPage}  
                    actionBtn={[]}     
                  />
                  {adminTransactionData?.length > 0 && (
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
              {/* <div className="bg-white px-4 py-3 card-box rounded">
                <div className="d-flex align-items-center justify-content-between flex-wrap filter-wrp">
                  <div className="left d-flex align-items-center flex-wrap my-2">
                    <div className="form-wrp">
                      <Form className="position-relative search-form">
                        <input type="date" className="form-control" />
                      </Form>
                    </div>
                  </div>
                  <div className="right btn-wrap d-flex align-items-center my-2">
                    <Button
                      type="button"
                      className="d-flex btn-2 align-items-center justify-content-center me-2 btn btn-primary"
                    >
                      <span className="me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                        >
                          <path
                            d="M4.697 3.9985L6.3 2.3885V9.1015C6.3 9.28715 6.37375 9.4652 6.50503 9.59647C6.6363 9.72775 6.81435 9.8015 7 9.8015C7.18565 9.8015 7.3637 9.72775 7.49497 9.59647C7.62625 9.4652 7.7 9.28715 7.7 9.1015V2.3885L9.303 3.9985C9.36807 4.06411 9.44549 4.11618 9.5308 4.15172C9.6161 4.18726 9.70759 4.20556 9.8 4.20556C9.89241 4.20556 9.9839 4.18726 10.0692 4.15172C10.1545 4.11618 10.2319 4.06411 10.297 3.9985C10.3626 3.93343 10.4147 3.856 10.4502 3.7707C10.4858 3.6854 10.5041 3.59391 10.5041 3.5015C10.5041 3.40909 10.4858 3.3176 10.4502 3.2323C10.4147 3.14699 10.3626 3.06957 10.297 3.0045L7.497 0.204499C7.43043 0.140771 7.35193 0.0908152 7.266 0.0574991C7.09558 -0.0125135 6.90442 -0.0125135 6.734 0.0574991C6.64807 0.0908152 6.56957 0.140771 6.503 0.204499L3.703 3.0045C3.63773 3.06977 3.58596 3.14725 3.55064 3.23252C3.51532 3.3178 3.49714 3.4092 3.49714 3.5015C3.49714 3.5938 3.51532 3.6852 3.55064 3.77047C3.58596 3.85575 3.63773 3.93323 3.703 3.9985C3.76827 4.06377 3.84575 4.11554 3.93103 4.15086C4.0163 4.18618 4.1077 4.20436 4.2 4.20436C4.2923 4.20436 4.3837 4.18618 4.46897 4.15086C4.55425 4.11554 4.63173 4.06377 4.697 3.9985ZM13.3 8.4015C13.1143 8.4015 12.9363 8.47525 12.805 8.60652C12.6737 8.7378 12.6 8.91585 12.6 9.1015V11.9015C12.6 12.0872 12.5263 12.2652 12.395 12.3965C12.2637 12.5278 12.0857 12.6015 11.9 12.6015H2.1C1.91435 12.6015 1.7363 12.5278 1.60503 12.3965C1.47375 12.2652 1.4 12.0872 1.4 11.9015V9.1015C1.4 8.91585 1.32625 8.7378 1.19497 8.60652C1.0637 8.47525 0.885652 8.4015 0.7 8.4015C0.514348 8.4015 0.336301 8.47525 0.205025 8.60652C0.0737498 8.7378 0 8.91585 0 9.1015V11.9015C0 12.4585 0.221249 12.9926 0.615076 13.3864C1.0089 13.7803 1.54305 14.0015 2.1 14.0015H11.9C12.457 14.0015 12.9911 13.7803 13.3849 13.3864C13.7788 12.9926 14 12.4585 14 11.9015V9.1015C14 8.91585 13.9263 8.7378 13.795 8.60652C13.6637 8.47525 13.4857 8.4015 13.3 8.4015Z"
                            fill="#515463"
                          />
                        </svg>
                      </span>
                      Export
                    </Button>
                  </div>
                </div>
                <div className="table-responsive py-3">
                  <table className="table common-table">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th> Earning</th>
                        <th> Description</th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className=" m-0 ">29 Dec 2022, 6:32 PM</p>
                        </td>
                        <td>
                          <p className="m-0">Credit</p>
                        </td>
                        <td>
                          <p className="m-0 theme-clr fw-sbold">+₦123.48</p>
                        </td>
                        <td>
                          <p className="m-0 theme-clr fw-sbold">₦66634.51</p>
                        </td>
                        <td>
                          <p className="m-0"> Credit with Ref: 479619</p>
                        </td>
                        <td>
                          <div className="action-btn d-flex align-items-center">
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>View Details</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                onClick={trxnDetailShowPop}
                                to=""
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M7.00001 5.25C6.53588 5.25 6.09076 5.43437 5.76257 5.76256C5.43438 6.09075 5.25001 6.53587 5.25001 7C5.25001 7.46413 5.43438 7.90925 5.76257 8.23744C6.09076 8.56563 6.53588 8.75 7.00001 8.75C7.46414 8.75 7.90926 8.56563 8.23745 8.23744C8.56564 7.90925 8.75001 7.46413 8.75001 7C8.75001 6.53587 8.56564 6.09075 8.23745 5.76256C7.90926 5.43437 7.46414 5.25 7.00001 5.25ZM7.00001 9.91667C6.22646 9.91667 5.4846 9.60938 4.93762 9.06239C4.39063 8.51541 4.08334 7.77355 4.08334 7C4.08334 6.22645 4.39063 5.48459 4.93762 4.93761C5.4846 4.39062 6.22646 4.08333 7.00001 4.08333C7.77356 4.08333 8.51542 4.39062 9.0624 4.93761C9.60939 5.48459 9.91668 6.22645 9.91668 7C9.91668 7.77355 9.60939 8.51541 9.0624 9.06239C8.51542 9.60938 7.77356 9.91667 7.00001 9.91667M7.00001 2.625C4.08334 2.625 1.59251 4.43917 0.583344 7C1.59251 9.56083 4.08334 11.375 7.00001 11.375C9.91668 11.375 12.4075 9.56083 13.4167 7C12.4075 4.43917 9.91668 2.625 7.00001 2.625Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className=" m-0 ">29 Dec 2022, 6:32 PM</p>
                        </td>
                        <td>
                          <p className="m-0">Credit</p>
                        </td>
                        <td>
                          <p className="m-0 theme-clr fw-sbold">+₦123.48</p>
                        </td>
                        <td>
                          <p className="m-0 theme-clr fw-sbold">₦66634.51</p>
                        </td>
                        <td>
                          <p className="m-0"> Credit with Ref: 479619</p>
                        </td>
                        <td>
                          <div className="action-btn d-flex align-items-center">
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>View Details</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                onClick={trxnDetailShowPop}
                                to=""
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M7.00001 5.25C6.53588 5.25 6.09076 5.43437 5.76257 5.76256C5.43438 6.09075 5.25001 6.53587 5.25001 7C5.25001 7.46413 5.43438 7.90925 5.76257 8.23744C6.09076 8.56563 6.53588 8.75 7.00001 8.75C7.46414 8.75 7.90926 8.56563 8.23745 8.23744C8.56564 7.90925 8.75001 7.46413 8.75001 7C8.75001 6.53587 8.56564 6.09075 8.23745 5.76256C7.90926 5.43437 7.46414 5.25 7.00001 5.25ZM7.00001 9.91667C6.22646 9.91667 5.4846 9.60938 4.93762 9.06239C4.39063 8.51541 4.08334 7.77355 4.08334 7C4.08334 6.22645 4.39063 5.48459 4.93762 4.93761C5.4846 4.39062 6.22646 4.08333 7.00001 4.08333C7.77356 4.08333 8.51542 4.39062 9.0624 4.93761C9.60939 5.48459 9.91668 6.22645 9.91668 7C9.91668 7.77355 9.60939 8.51541 9.0624 9.06239C8.51542 9.60938 7.77356 9.91667 7.00001 9.91667M7.00001 2.625C4.08334 2.625 1.59251 4.43917 0.583344 7C1.59251 9.56083 4.08334 11.375 7.00001 11.375C9.91668 11.375 12.4075 9.56083 13.4167 7C12.4075 4.43917 9.91668 2.625 7.00001 2.625Z"
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
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
        className="refund-pop"
        show={trxnDetailShow}
        onHide={trxnDetailClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-md-4">
            <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center justify-content-between flex-wrap">
              <li className="py-2 w-50 border-bottom">
                <p className="text-muted fw-bold small-text m-0">Time</p>
                <h6 className="small-text theme-clr m-0">
                  30 Dec 2022, 11:52 AM
                </h6>
              </li>
              <li className="py-2 w-50 border-bottom">
                <p className="text-muted fw-bold small-text m-0">Type</p>
                <h6 className="small-text theme-clr m-0">credit</h6>
              </li>
              <li className="py-2 w-50 border-bottom">
                <p className="text-muted fw-bold small-text m-0">Amount</p>
                <h6 className="small-text theme-clr m-0">+₦123.48</h6>
              </li>
              <li className="py-2 w-50 border-bottom">
                <p className="text-muted fw-bold small-text m-0">Earning</p>
                <h6 className="small-text theme-clr m-0">₦66881.47</h6>
              </li>
              <li className="py-2 w-50 border-bottom">
                <p className="text-muted fw-bold small-text m-0">Description</p>
                <h6 className="small-text theme-clr m-0">
                  Credit with Ref: 582758
                </h6>
              </li>
              <li className="py-2 w-50 ">
                <h6 className="small-text fw-sbold theme-clr m-0">Order</h6>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AdminTransactionIndex;

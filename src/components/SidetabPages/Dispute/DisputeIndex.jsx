import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../Common/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { disputeReply, disputesList, refundDispute } from "../../../store/actions";
import Filters from "./Filters";
import { toast } from "react-toastify";
import moment from "moment";

const columnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "bookingDetails",
    align: false,
    disablePadding: true,
    label: "Booking ID",
    title: "bookingNumber",
    type: "bookingNumber",
    order: 1,
  },
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
    id: "disputeReason",
    numeric: false,
    disablePadding: false,
    label: "Reason",
    title: "disputeReason",
    order: 1,
  },
  {
    id: "bookingAmount",
    align: true,
    disablePadding: false,
    label: "Booking Total",
    title: "bookingAmount",
    type: "amount",
    order: 1,
  },
  // {
  //   id: "refundAmount",
  //   align: true,
  //   disablePadding: false,
  //   label: "Refund",
  //   title: "refundAmount",
  //   type: "amount",
  //   order: 1,
  // },
  {
    id: "disputeStatus",
    align: true,
    disablePadding: false,
    label: "Status",
    title: "disputeStatus",
    type: "disputeStatus",
    order: 1,
  },
  {
    id: "createdAt",
    align: true,
    disablePadding: false,
    label: "Requested At	",
    type: "date",
    title: "Date|Time",
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

const DisputeIndex = () => {
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

  const [reply, SetReply] = useState({
    disputeId: "",
    message: "",
    disputeStatus: ""
  });

  const [refund, SetRefund] = useState({
    bookingId: "",
    disputeId: "",
    refundPercent: "",
    refundAmount: 0,
    disputeStatus: ""
  });

  const [errors, setError] = useState({
    refundPercent: "",
    disabled: true,
  });

  const [Msg, setMsg] = useState({
    open: false,
    id: ""
  });

  const [refundModal, SetRefundModal] = useState({
    open: false,
    id: "",
    bookingId: "",
    bookingTotal: 0
  });

  const disputeData = useSelector((s) => s?.Dispute?.disputesList?.data);
  const totalCount = useSelector((s) => s.Dispute?.disputesList?.totalcount);
  const loading = useSelector((s) => s.Dispute?.loading);

  const getTableRecords = () => {
    let body = {
      orderBy: state.orderBy,
      order: state.order,
      page: parseInt(state.page) + 1,
      limit: state.rowsPerPage,
      search: filter,
      datefilter: state?.datefilter
    }
    if (state.status) {
      body.status = state.status;
    }
    if (state?.datefilter) {
      if (state.startDate) {
        body.startDate = moment(state.startDate, "YYYY-MM-DD").format("DD-MM-YYYY");
      }
      if (state.endDate) {
        body.endDate = moment(state.endDate, "YYYY-MM-DD").format("DD-MM-YYYY");
      }
    }
    // console.log("body", body);
    dispatch(disputesList(body));
  };

  useEffect(() => {
    getTableRecords(state.order, state.orderBy);
  }, [state]);

  useEffect(() => {
    SetReply((pre) => ({
      ...pre,
      disputeId: Msg.id,
    }));
  }, [Msg.id]);

  useEffect(() => {
    SetRefund((pre) => ({
      ...pre,
      bookingId: refund.bookingId,
      disputeId: refund.id
    }));
  }, [refund.id]);

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
    const { value } = e.target;
    const { endDate } = state;
    if (new Date(endDate) < new Date(value)) {
      toast.error("Please select `Start date` less than or equal to `End date`.");
    }
    else {
      setState((pre) => ({
        ...pre,
        startDate: moment(value).format("YYYY-MM-DD"),
      }));
    }
  };

  const handleEndDate = (e) => {
    const { value } = e.target;
    const { startDate } = state;
    if (new Date(startDate) > new Date(value)) {
      toast.error("Please select `Start date` greater than or equal to `End date`.");
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

  const handleReplyChange = (e) => {
    const { name, value } = e.target;
    SetReply((pre) => ({ ...pre, [name]: value }));
  };

  const handleRefundChange = (e) => {
    var { name, value, min, max } = e.target;
    const Error = { ...errors };
    switch (name) {
      case "refundPercent":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        }
        else {
          value = Math.max(Number(min), Math.min(Number(max), Number(value)));
          // console.log("value", value, refundModal?.bookingTotal);
          SetRefund((pre) => ({ ...pre, "refundAmount": Number(((value * refundModal?.bookingTotal) / 100).toFixed(2)) }));
          Error["disabled"] = false;
          ("");
        }
        break;

      default:
        break;
    }

    SetRefund((pre) => ({ ...pre, [name]: value }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const MsgPopup = (state, id = "", disputeStatus = "") => {
    setMsg((pre) => ({
      ...pre,
      open: state,
      id: id,
      disputeStatus: disputeStatus
    }));
  };

  const RefundPopup = (state, disputeId = "", bookingId = "", bookingTotal = 0, disputeStatus = "", refundPercent = 0, refundAmount = 0) => {
    SetRefundModal((pre) => ({
      ...pre,
      open: state,
      id: disputeId,
      bookingId: bookingId,
      bookingTotal: bookingTotal
    }));

    SetRefund((pre) => ({
      ...pre,
      disputeId: disputeId,
      bookingId: bookingId,
      disputeStatus: disputeStatus, 
      refundPercent: refundPercent,
      refundAmount: refundAmount
    }));
  };

  const onMsgHide = () => {
    setMsg((pre) => ({ ...pre, open: false }));
  };

  const onHideRefund = () => {
    SetRefundModal((pre) => ({ ...pre, open: false }));
  };

  const SendMessage = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          onMsgHide();
          getTableRecords();
        }, 500);
        reply.message = "";
      } else {
        toast.error(response.message);
      }
    };
    dispatch(disputeReply(reply, callBack));
  };

  const handleRefund = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          dispatch(disputesList());
          onHideRefund();
        }, 100);
      } else {
        toast.error(response.message);
      }
    };
    dispatch(refundDispute(refund, callBack));
  };

  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Dispute</h4>
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
                      data={disputeData}
                      page={state.page}
                      rowsPerPage={state.rowsPerPage}
                      actionBtn={[
                        { label: "View", icon: "", link: "/dispute/detail" },
                        { label: "Msg", icon: "", action: MsgPopup },
                        { label: "Refund", icon: "", action: RefundPopup },
                      ]}
                    />
                    {disputeData?.length > 0 && (
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
            </Col>
          </Row>
        </Container>
      </section>

      <Modal className="add-pop " show={Msg?.open} onHide={onMsgHide} centered>
        <Modal.Header closeButton>
          <Modal.Title> Dispute Chat </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column justify-content-between position-relative chat-box">
            {disputeData?.length > 0 &&
              disputeData?.map((data) => {
                return (
                  <>
                    <div className="chat customer py-2">
                      <div className="d-flex align-items-start comment-card">
                        <div className="message">
                          <div className="content position-relative my-2">
                            <div className="comment-content">
                              <p className="py-1 px-3">{data?.disputeDescription}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-body">
                      {data &&
                        data?.reply?.map((msgdata) => {
                          return (
                            <>
                              <div
                                className={
                                  msgdata?.byCustomer == false
                                    ? "chat customer-care py-2"
                                    : "chat customer py-2"
                                }
                              >
                                <div className="d-flex align-items-start comment-card">
                                  <div className="message">
                                    <div className="content position-relative my-2">
                                      <div className="comment-content">
                                        <p className="py-1 px-3">
                                          {msgdata?.message}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </>
                );
              })}

            {Msg?.disputeStatus !== "completed" && (
              <div className="chat-footer p-3">
                <form>
                  <div className="position-relative ">
                    <input
                      type="text"
                      name="message"
                      value={reply.message}
                      onChange={handleReplyChange}
                      placeholder="Message......"
                      className="form-control"
                    />
                    <div className="position-absolute d-flex align-items-center btn-wrap">
                      <button
                        onClick={SendMessage}
                        className="files bg-transparent border-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                        >
                          <path
                            d="M1.39688 4.77654L16.4994 0.938282C16.6519 0.899405 16.8124 0.904514 16.9622 0.95302C17.112 1.00153 17.245 1.09145 17.3458 1.21238C17.4467 1.33332 17.5112 1.48032 17.532 1.6364C17.5528 1.79248 17.5289 1.95125 17.4632 2.09435L10.9715 16.2603C10.905 16.4056 10.7982 16.5288 10.6637 16.6151C10.5293 16.7014 10.3729 16.7473 10.2131 16.7473C10.0533 16.7473 9.89686 16.7014 9.76242 16.615C9.62798 16.5287 9.52118 16.4055 9.45472 16.2602L7.23317 11.3994C7.20593 11.3399 7.19682 11.2736 7.20698 11.2089C7.21714 11.1442 7.24613 11.0839 7.29031 11.0356L11.9297 5.96262C11.949 5.94127 11.9624 5.91531 11.9687 5.88724C11.975 5.85917 11.9739 5.82996 11.9656 5.80244L11.9483 5.76297C11.9285 5.731 11.8985 5.70665 11.8631 5.6939C11.8277 5.68114 11.789 5.68073 11.7533 5.69272L11.7188 5.70853L5.89928 9.35571C5.84379 9.39031 5.77936 9.40785 5.71399 9.40613C5.64863 9.40442 5.5852 9.38353 5.53161 9.34606L1.12466 6.26914C0.993514 6.17771 0.891408 6.05051 0.830508 5.90269C0.769608 5.75487 0.75248 5.59265 0.781165 5.43537C0.809849 5.27809 0.883138 5.13237 0.992301 5.01556C1.10146 4.89876 1.2419 4.81579 1.39688 4.77654Z"
                            fill="#0d6efd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

          </div>
        </Modal.Body>
      </Modal>

      <Modal className="refund-pop"
        show={refundModal.open}
        onHide={onHideRefund}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Refund Amount</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label2 m-0 pb-1">
                  Refund Percent
                </label>
                <input
                  type="number"
                  name="refundPercent"
                  value={refund?.refundPercent}
                  className="form-control"
                  onChange={handleRefundChange}
                  min="1"
                  max="100"
                />

              </Col>
              <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label2 m-0 pb-1">
                  Refund Amount
                </label>
                <input type="text" value={"$ " + refund?.refundAmount} className="form-control" disabled />
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-muted fw-sbold small-text">
                    Max Amount $ {refundModal.bookingTotal}
                  </p>
                  {/* <p className="theme-clr fw-sbold small-text">Fill Amount</p> */}
                </div>
              </Col>
              {/* <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label2 m-0 pb-1">
                  Reason
                </label>
                <textarea
                  name=""
                  i
                  rows="2"
                  className="form-control"
                ></textarea>
              </Col> */}
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          {refund?.disputeStatus !== "completed" && (
            <Button
              className="btn-2 d-flex align-items-center justify-content-center"
              onClick={handleRefund}
            >
              Refund
            </Button>
          )}

          <Button
            className="btn d-flex align-items-center justify-content-center"
            onClick={onHideRefund}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default DisputeIndex;

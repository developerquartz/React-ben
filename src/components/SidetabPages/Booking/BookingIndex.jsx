import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../Common/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { bookingsList } from "../../../store/actions";
import Filters from "./Filters";
import { toast } from "react-toastify";
import moment from "moment";

const columnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "bookingNumber",
    align: false,
    disablePadding: true,
    label: "Booking ID",
    title: "bookingNumber",
    order: 1,
  },
  {
    id: "customerName",
    numeric: false,
    disablePadding: false,
    label: "Customer",
    title: "customerName",
  },
  {
    id: "providerName",
    numeric: false,
    disablePadding: false,
    label: "Provider",
    title: "providerName",
  },
  {
    id: "totalAmount",
    align: true,
    disablePadding: false,
    label: "Cost",
    title: "totalAmount",
    type: "amount",
    order: 1,
  },
  {
    id: "status",
    align: true,
    disablePadding: false,
    label: "Status",
    title: "status",
    type: "tag",
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
const columnData1 = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },
  {
    id: "bookingNumber",
    align: false,
    disablePadding: true,
    label: "Booking ID",
    title: "bookingNumber",
    order: 1,
  },
  {
    id: "paymentMethod",
    align: false,
    disablePadding: true,
    label: "PaymentMethod",
    title: "paymentMethod",
    order: 1,
  },
  {
    id: "paymentStatus",
    align: false,
    disablePadding: true,
    label: "PaymentStatus",
    title: "paymentStatus",
    order: 1,
  },
  {
    id: "paymentType",
    align: false,
    disablePadding: true,
    label: "PaymentType",
    title: "paymentType",
    order: 1,
  },
  {
    id: "bookingType",
    align: false,
    disablePadding: true,
    label: "BookingType",
    title: "bookingType",
    order: 1,
  },
  {
    id: "serviceCategory",
    align: false,
    disablePadding: true,
    label: "ServiceCategory",
    title: "serviceCategory",
    order: 1,
  },

  {
    id: "customerName",
    numeric: false,
    disablePadding: false,
    label: "Customer",
    title: "customerName",
  },
  {
    id: "customerEmail",
    numeric: false,
    disablePadding: false,
    label: "CustomerEmail",
    title: "customerEmail",
  },
  {
    id: "customerMobileNumber",
    numeric: false,
    disablePadding: false,
    label: "CustomerMobile",
    title: "customerMobileNumber",
  },
  {
    id: "providerName",
    numeric: false,
    disablePadding: false,
    label: "Provider",
    title: "providerName",
  },
  {
    id: "providerEmail",
    numeric: false,
    disablePadding: false,
    label: "ProviderEmail",
    title: "providerEmail",
  },
  {
    id: "providerMobileNumber",
    numeric: false,
    disablePadding: false,
    label: "ProviderMobileNumber",
    title: "providerMobileNumber",
  },

  {
    id: "vehicleType",
    numeric: false,
    disablePadding: false,
    label: "CustomerVehicleType",
    title: "vehicleType",
  },
  {
    id: "model",
    numeric: false,
    disablePadding: false,
    label: "CustomerVehicleModel",
    title: "model",
  },
  {
    id: "make",
    numeric: false,
    disablePadding: false,
    label: "CustomerVehicleMake",
    title: "make",
  },

  {
    id: "plateNumber",
    numeric: false,
    disablePadding: false,
    label: "CustomerVehiclePlateNumber",
    title: "plateNumber",
  },
  {
    id: "color",
    numeric: false,
    disablePadding: false,
    label: "CustomerVehicleColor",
    title: "color",
  },
  {
    id: "fuelType",
    numeric: false,
    disablePadding: false,
    label: "CustomerVehicleFuelType",
    title: "fuelType",
  },

  {
    id: "startAddress",
    disablePadding: false,
    label: "StartAddress",
    title: "startAddress",
  },
  {
    id: "endAddress",
    disablePadding: false,
    label: "EndAddress",
    title: "endAddress",
  },

  {
    id: "totalAmount",
    align: true,
    disablePadding: false,
    label: "Cost",
    title: "totalAmount",
    type: "amount",
    order: 1,
  },
  {
    id: "status",
    align: true,
    disablePadding: false,
    label: "Status",
    title: "status",
    type: "tag",
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

const BookingIndex = () => {
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

  const bookingData = useSelector((s) => s?.Dashboard?.bookingsList?.data);
  const totalCount = useSelector((s) => s.Dashboard?.bookingsList?.totalcount);
  const loading = useSelector((s) => s.Dashboard?.loading);

  const getTableRecords = () => {
    let body = {
      orderBy: state.orderBy,
      order: state.order,
      page: parseInt(state.page) + 1,
      limit: state.rowsPerPage,
      search: filter,
      datefilter: state?.datefilter,
    };
    if (state.status) {
      body.status = state.status;
    }
    if (state?.datefilter) {
      if (state.startDate) {
        body.startDate = moment(state.startDate, "YYYY-MM-DD").format(
          "DD-MM-YYYY"
        );
      }
      if (state.endDate) {
        body.endDate = moment(state.endDate, "YYYY-MM-DD").format("DD-MM-YYYY");
      }
    }
    // console.log("body", body);
    dispatch(bookingsList(body));
  };

  useEffect(() => {
    getTableRecords(state.order, state.orderBy);
  }, [state]);

  const handleStatus = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value, "value");
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

  const handleStartDate = (e) => {
    const { value } = e.target;
    const { endDate } = state;
    if (new Date(endDate) < new Date(value)) {
      toast.error(
        "Please select `Start date` less than or equal to `End date`."
      );
    } else {
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
      toast.error(
        "Please select `Start date` greater than or equal to `End date`."
      );
    } else {
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

  // console.log("state", state);
  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Bookings</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <Filters
                  status={state.status}
                  columns={columnData1}
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
                      data={bookingData}
                      page={state.page}
                      rowsPerPage={state.rowsPerPage}
                      actionBtn={[
                        {
                          label: "View",
                          icon: "",
                          link: "/bookings/booking-detail",
                        },
                      ]}
                    />
                    {bookingData?.length > 0 && (
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
    </>
  );
};
export default BookingIndex;

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
import { useDispatch, useSelector } from "react-redux";
import { adminList } from "../../../store/actions";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../Common/DataTable";
import Filters from "./Filters";
const columnData = [
  { id: "_id", align: false, disablePadding: true, label: "#", order: 1 },

  {
    id: "name",
    align: false,
    disablePadding: true,
    label: "Name",
    title: "UserName",
    order: 1,
  },
  {
    id: "email",
    align: false,
    disablePadding: true,
    label: "Email",
    title: "email",
    order: 1,
  },
  {
    id: "mobileNumber",
    align: false,
    disablePadding: true,
    label: "Mobile",
    title: "mobileNumber",
    order: 1,
  },
  {
    id: "role",
    align: false,
    disablePadding: true,
    label: "Role",
    title: "role",
    order: 1,
  },
  {
    id: "status",
    align: false,
    disablePadding: true,
    label: "Status",
    title: "status",
    order: 1,
    type: "tag",
  },

  // {
  //   id: "createdAt",
  //   align: true,
  //   disablePadding: false,
  //   label: "Data|Time",
  //   type: "date&time",
  //   title: "registered",
  //   order: 1,
  // },
  {
    id: "action",
    align: true,
    disablePadding: false,
    title: "action",
    label: "Action",
  },
];

const SystemAccessIndex = () => {
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
  });
  const adminData = useSelector((s) => s.SystemAdmin.adminList.data);
  const totalCount = useSelector((s) => s?.SystemAdmin.adminList?.totalcount);
  const loading = useSelector((s) => s?.SystemAdmin?.loading);

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

    dispatch(adminList(body));
  };
  useEffect(() => {
    getTableRecords(state.order, state.orderBy);
  }, [state]);
  const handleStatus = (e) => {
    e.preventDefault();
    const { value } = e.target;
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
  const DeletePopup = (state, id = "") => {
    setDelete((pre) => ({
      ...pre,
      open: state,
      dumpId: id,
    }));
  };

  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">System Access</h4>
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
                    data={adminData}
                    page={state.page}
                    rowsPerPage={state.rowsPerPage}
                    actionBtn={[
                      // { label: "Delete", icon: "", action: DeletePopup },
                      {
                        label: "Edit",
                        icon: "",
                        link: "/systemaccess/edituser",
                      },
                      ,
                    ]}
                  />
                  {adminData?.length > 0 && (
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
          </Row>
        </Container>
      </section>
    </>
  );
};
export default SystemAccessIndex;

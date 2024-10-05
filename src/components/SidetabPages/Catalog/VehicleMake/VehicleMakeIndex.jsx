import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
} from "react-bootstrap";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { vehicleMakeList, deleteVehicleMake } from "../../../../store/actions";

import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTablePagination,
} from "../../../../Common/DataTable";

import Filters from "./Filters";
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
    id: "createdAt",
    align: true,
    disablePadding: false,
    label: "Created At	",
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

const VehicleMakeIndex = () => {
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
    status: ""
  });

  const [Delete, setDelete] = useState({
    open: false,
    dumpId: "",
  });
  // console.log(Delete.dumpId, "dumpId");

  const VehicleMakeData = useSelector(
    (s) => s?.Catalog?.vehicleMakeList?.data
  );

  const totalCount = useSelector(
    (s) => s?.Catalog?.vehicleMakeList?.totalcount
  );
  const loading = useSelector((s) => s?.Catalog?.loading);

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
    dispatch(vehicleMakeList(body));
  };

  useEffect(() => {
    getTableRecords(state.order, state.orderBy);
  }, [state]);

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
      // console.log(response, "response");
      if (response.status == "success") {
        toast.success(response.message);
        setDelete(false);
        dispatch(vehicleMakeList());
      } else {
        toast.error(response.message);
      }
    };
    dispatch(deleteVehicleMake({ vehicleMakeId: Delete.dumpId }, callBack));
  };

  // const [deleteShow, deleteSetShow] = useState(false);
  // const deleteClose = () => deleteSetShow(false);
  // const deleteShowPop = () => deleteSetShow(true);

  const [importShow, importSetShow] = useState(false);
  const importClose = () => importShow(false);
  const importShowPop = () => importSetShow(true);

  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Vehicle Makes</h4>
              </div>
            </Col>
            <div className="bg-white px-4 py-3 card-box">
              <Filters
                status={state.status}
                columns={state.columns}
                filter={filter}
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
                    data={VehicleMakeData}
                    page={state.page}
                    rowsPerPage={state.rowsPerPage}
                    actionBtn={[
                      { label: "Delete", icon: "", action: DeletePopup },
                      {
                        label: "Edit", icon: "", link: "/catalog/vehicle-makes/edit",
                      },
                    ]}
                  />
                  {VehicleMakeData?.length > 0 && (
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

      <Modal
        show={Delete.open}
        onHide={deleteClose}
        className="deleteAdd-pop delete-pop"
        centered
      >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
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

      <Modal
        show={importShow}
        onHide={importClose}
        className="deleteAdd-pop delete-pop"
        centered
      >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
          <div className="text-center py-3">
            <h2 className="pop-head m-0 pb-2">Import Vehicle Makes</h2>
            <div className="py-2">
              <div className="position-relative upload-file-doc upload-file py-3 d-flex align-items-center justify-content-center">
                <input type="file" className="position-absolute" />
                <div className="inner text-center">
                  <div className="icn my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M13.2375 16.7625C13.75 17.25 13.75 18.05 13.2375 18.5375C12.75 19.025 11.95 19.025 11.4625 18.5375C10.2917 17.365 9.63412 15.7757 9.63412 14.1188C9.63412 12.4618 10.2917 10.8725 11.4625 9.7L15.8875 5.275C17.06 4.10422 18.6493 3.44664 20.3062 3.44664C21.9632 3.44664 23.5525 4.10422 24.725 5.275C25.8958 6.44754 26.5534 8.03678 26.5534 9.69375C26.5534 11.3507 25.8958 12.94 24.725 14.1125L22.8625 15.975C22.875 14.95 22.7125 13.925 22.3625 12.95L22.95 12.35C23.3004 12.0034 23.5786 11.5907 23.7685 11.1358C23.9583 10.6809 24.0561 10.1929 24.0561 9.7C24.0561 9.2071 23.9583 8.71908 23.7685 8.26421C23.5786 7.80934 23.3004 7.39664 22.95 7.05C22.6033 6.69958 22.1906 6.42139 21.7358 6.23152C21.2809 6.04166 20.7929 5.9439 20.3 5.9439C19.8071 5.9439 19.3191 6.04166 18.8642 6.23152C18.4093 6.42139 17.9966 6.69958 17.65 7.05L13.2375 11.4625C12.8871 11.8091 12.6089 12.2218 12.419 12.6767C12.2292 13.1316 12.1314 13.6196 12.1314 14.1125C12.1314 14.6054 12.2292 15.0934 12.419 15.5483C12.6089 16.0032 12.8871 16.4159 13.2375 16.7625M16.7625 11.4625C17.25 10.975 18.05 10.975 18.5375 11.4625C19.7083 12.635 20.3659 14.2243 20.3659 15.8812C20.3659 17.5382 19.7083 19.1275 18.5375 20.3L14.1125 24.725C12.94 25.8958 11.3507 26.5534 9.69374 26.5534C8.03677 26.5534 6.44752 25.8958 5.27499 24.725C4.10421 23.5525 3.44662 21.9632 3.44662 20.3063C3.44662 18.6493 4.10421 17.06 5.27499 15.8875L7.13749 14.025C7.12499 15.05 7.28749 16.075 7.63749 17.0625L7.04999 17.65C6.69957 17.9966 6.42137 18.4093 6.23151 18.8642C6.04165 19.3191 5.94389 19.8071 5.94389 20.3C5.94389 20.7929 6.04165 21.2809 6.23151 21.7358C6.42137 22.1907 6.69957 22.6034 7.04999 22.95C7.39663 23.3004 7.80933 23.5786 8.2642 23.7685C8.71907 23.9583 9.20708 24.0561 9.69999 24.0561C10.1929 24.0561 10.6809 23.9583 11.1358 23.7685C11.5906 23.5786 12.0033 23.3004 12.35 22.95L16.7625 18.5375C17.1129 18.1909 17.3911 17.7782 17.581 17.3233C17.7708 16.8684 17.8686 16.3804 17.8686 15.8875C17.8686 15.3946 17.7708 14.9066 17.581 14.4517C17.3911 13.9968 17.1129 13.5841 16.7625 13.2375C16.6411 13.1237 16.5443 12.9863 16.4782 12.8336C16.412 12.681 16.3779 12.5164 16.3779 12.35C16.3779 12.1836 16.412 12.019 16.4782 11.8664C16.5443 11.7137 16.6411 11.5763 16.7625 11.4625V11.4625Z"
                        fill="#515462"
                      />
                    </svg>
                  </div>
                  <p className="text-muted m-0">Upload File</p>
                </div>
              </div>
            </div>
            <div className="btn-wrap my-2 d-flex align-items-center justify-content-center mt-3">
              <div className="pe-2 w-50">
                <Button
                  className="btn-2 w-100 d-flex align-items-center justify-content-center"
                  onClick={importClose}
                >
                  No Cancel!
                </Button>
              </div>
              <div className="pe-2 w-50">
                <Button className=" w-100 d-flex align-items-center justify-content-center">
                  Import
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default VehicleMakeIndex;

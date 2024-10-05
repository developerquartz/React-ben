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
import { serviceAddOnList, deleteServiceAddOn } from "../../../../store/actions";

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
    id: "category",
    align: false,
    disablePadding: true,
    label: "Category",
    title: "Category",
    order: 1,
  },
  {
    id: "serviceDetails",
    align: false,
    disablePadding: true,
    label: "Service Name",
    title: "serviceDetails",
    type: "service",
    order: 1,
  },
  {
    id: "logo",
    align: false,
    disablePadding: true,
    label: "Featured Image",
    title: "Logo",
    type: "logo",
    order: 1,
  },
  {
    id: "setPrice",
    align: false,
    disablePadding: true,
    label: "Set Price",
    title: "setPrice",
    order: 1,
  },
  // {
  //   id: "addOnCost",
  //   align: false,
  //   disablePadding: true,
  //   label: "Add On Charges",
  //   title: "Price",
  //   order: 1,
  // },
  // {
  //   id: "distanceCost",
  //   align: false,
  //   disablePadding: true,
  //   label: "Delivery Charges",
  //   title: "distanceCost",
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

const AddOnListIndex = () => {
  const dispatch = useDispatch();
  const [deleteShow, deleteSetShow] = useState(false);
  const deleteClose = () => deleteSetShow(false);
  const [filter, setFilter] = useState("");
  
  const [state, setState] = useState({
    columns: columnData,
    rowsPerPage: 10,
    page: 0,
    order: 1,
    orderBy: "category",
    search: "",
    category: ""
  });

  const [Delete, setDelete] = useState({
    open: false,
    dumpId: "",
  });

  const ServiceAddOnData = useSelector(
    (s) => s?.Catalog?.serviceAddOnList?.data
  );

  const totalCount = useSelector(
    (s) => s?.Catalog?.serviceAddOnList?.totalcount
  );
  const loading = useSelector((s) => s?.Catalog?.loading);

  const getTableRecords = () => {
    let body = {
      orderBy: state.orderBy,
      order: state.order,
      page: parseInt(state.page) + 1,
      limit: state.rowsPerPage,
      search: filter,
      category: state.category
    };

    dispatch(serviceAddOnList(body));
  };

  useEffect(() => {
    getTableRecords(state.order, state.orderBy);
  }, [state]);

  const resetFilter =()=>{
    setState((pre) => ({
      ...pre,
      category: ""
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

  const handleStatus = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setState((pre) => ({
      ...pre,
      category: value,
    }));
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
        dispatch(serviceAddOnList());
      } else {
        toast.error(response.message);
      }
    };
    dispatch(deleteServiceAddOn({ addOnId: Delete.dumpId }, callBack));
  };

  return (
    <>
      <section className="dashboard py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Add On</h4>
              </div>
            </Col>
            <div className="bg-white px-4 py-3 card-box">
              <Filters
                status={state.status}
                handleStatus={handleStatus}
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
                    data={ServiceAddOnData}
                    page={state.page}
                    rowsPerPage={state.rowsPerPage}
                    actionBtn={[
                      { label: "Delete", icon: "", action: DeletePopup },
                      {
                        label: "Edit", icon: "", link: "/catalog/add-on/edit",
                      },
                    ]}
                  />
                  {ServiceAddOnData?.length > 0 && (
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
    </>
  );
};
export default AddOnListIndex;

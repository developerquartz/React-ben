import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Filters = (props) => {
  const {
    status,
    filterdata,
    handleStatus,
    handleSearchChange,
    filter,
    columns,
    resetFilter,
  } = props;

  return (
    <>
      <div className="d-flex align-items-center justify-content-between flex-wrap filter-wrp">
        <div className="left d-flex align-items-center flex-wrap my-2">
          <div className="filterby d-flex align-items-center me-2">
            <label htmlFor="" className="label m-0 me-2">
              Filter By:
            </label>
            <Form.Select
              aria-label="Default select example"
              value={status}
              onChange={(e) => handleStatus(e)}
            >
              <option value="">Category...</option>
              <option value="Towing">Towing</option>
              <option value="Wash">Wash</option>
              <option value="Fuel">Fuel</option>
              <option value="Repair">Repair</option>
            </Form.Select>
          </div>
          <div className="form-wrp">
            <Form
              onSubmit={filterdata}
              className="position-relative search-form"
            >
              <input
                type="search"
                value={filter}
                name="filter"
                placeholder="Search"
                className="form-control"
                onChange={(e) => handleSearchChange(e)}
              />
              <Button
                type="submit"
                className="position-absolute d-flex align-items-center justify-contnet-center common-btn"
              >
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
          </div>{" "}
          <div className="d-flex align-items-center flex-wrap mx-2">
            <Button
              type="submit"
              className="position-absolute d-flex align-items-center justify-content-center common-btn px-1"
              onClick={resetFilter}
            >
              <label htmlFor="" className="label m-0">
                Clear
              </label>
            </Button>
          </div>
        </div>
        <div className="right btn-wrap d-flex align-items-center my-2">
          <Link
            to="/customers/add"
            className="d-flex align-items-center justify-content-center me-2 btn btn-primary "
          >
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M6.41667 11.0833V7.58334H2.91667V6.41667H6.41667V2.91667H7.58334V6.41667H11.0833V7.58334H7.58334V11.0833H6.41667Z"
                  fill="white"
                />
              </svg>
            </span>
            Add New Account
          </Link>
        </div>
      </div>
    </>
  );
};
export default Filters;

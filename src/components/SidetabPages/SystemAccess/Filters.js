import React from "react";
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

const Filters = (props) => {
  const {
    status,
    filterdata,
    handleStatus,
    handleSearchChange,
    filter,
    columns,
    resetFilter
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
              <option value="">Status</option>
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
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
          {/* <Button
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
          </Button> */}

          <Link
            to="/systemaccess/adduser"
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
            Add New SubAdmin
          </Link>
        </div>
      </div>
    </>
  );
};
export default Filters;

import React from "react";
import { Nav, Button, Accordion } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Admin from "./Role/Admin";
import SubAdmin from "./Role/SubAdmin";
import Logo from "../../assest/images/logo.png";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      <div
        className={`sidebar shadow-sm ${showSidebar && "active"}`}
        style={{ backgroundColor: "#fbfbfc" }}
      >
        <div className="top bg-white text-center py-2">
          <Link to="/customers">
            <img src={Logo} alt="" className="img-fluid logo" />
          </Link>
        </div>
        <Nav className="w-100 bg-transparent">
          <Button
            className="bg-white border-0 p-0 closebtn d-lg-none"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Admin setShowSidebar={setShowSidebar} />
        </Nav>
      </div>
    </>
  );
};
export default Sidebar;

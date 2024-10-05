import React from "react";
import { Nav, Button, Accordion } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Admin = ({ setShowSidebar }) => {
  const navigate = useNavigate();
  const pageChange = (e, url) => {
    e.preventDefault();
    navigate(url);
    setShowSidebar(false);
  };
  return (
    <>
      <ul className="list-unstyled mb-0 w-100 sidebar-links">
        <li className="">
          <Link
            className={`link ${
              window.location.pathname == "/client/edit-profile" && "active"
            } `}
            onClick={(e) => pageChange(e, "/client/edit-profile")}
          >
            <span className="me-2 icn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z"
                  fill="black"
                />
              </svg>
            </span>
            Your Profile
          </Link>
        </li>
        <li className="">
          <Link
            className={`link ${
              window.location.pathname == "/client/documents" && "active"
            } `}
            onClick={(e) => pageChange(e, "/client/documents")}
          >
            <span className="me-2 icn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z"
                  fill="black"
                />
              </svg>
            </span>
            Documents
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Admin;
